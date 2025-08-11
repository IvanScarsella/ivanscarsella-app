// check-imports.js
const fs = require('fs')
const path = require('path')

const ROOT_DIR = path.join(__dirname, 'src')

function getAllFiles(
  dir,
  extList = ['.ts', '.tsx', '.js', '.jsx'],
  fileList = []
) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, extList, fileList)
    } else if (extList.includes(path.extname(file))) {
      fileList.push(fullPath)
    }
  })
  return fileList
}

function checkImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const importRegex = /from\s+['"](@\/[^'"]+)['"]/g
  let match
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1].replace('@', '') // remove alias
    const fullImportPath = path.join(ROOT_DIR, importPath)

    // Check if file/folder exists (case-sensitive)
    const parts = importPath.split('/').filter(Boolean)
    let currentPath = ROOT_DIR
    let errorFound = false

    for (let part of parts) {
      const realEntries = fs.readdirSync(currentPath)
      if (!realEntries.includes(part)) {
        console.log(`❌ Case mismatch in: ${filePath}`)
        console.log(`   Import says: ${part}`)
        console.log(`   Real entries: ${realEntries.join(', ')}`)
        errorFound = true
        break
      }
      currentPath = path.join(currentPath, part)
    }

    if (
      !errorFound &&
      !fs.existsSync(currentPath) &&
      !fs.existsSync(currentPath + '.tsx') &&
      !fs.existsSync(currentPath + '.ts') &&
      !fs.existsSync(currentPath + '.js') &&
      !fs.existsSync(currentPath + '.jsx')
    ) {
      console.log(`❌ Missing file for import in: ${filePath}`)
      console.log(`   Import path: ${fullImportPath}`)
    }
  }
}

console.log('🔍 Checking imports for case sensitivity issues...')
const allFiles = getAllFiles(ROOT_DIR)
allFiles.forEach(checkImports)
console.log('✅ Check completed.')
