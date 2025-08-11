// fix-imports.js
const fs = require('fs')
const path = require('path')

const ROOT_DIR = path.join(__dirname, 'src') // Ajusta si tu código no está en /src

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file)
    if (fs.statSync(filepath).isDirectory()) {
      walkDir(filepath, callback)
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      callback(filepath)
    }
  })
}

function getRealFileName(filePath) {
  if (fs.existsSync(filePath)) return path.basename(filePath)
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) return null
  const fileLower = path.basename(filePath).toLowerCase()
  const realName = fs
    .readdirSync(dir)
    .find((f) => f.toLowerCase() === fileLower)
  return realName || null
}

walkDir(ROOT_DIR, (file) => {
  let content = fs.readFileSync(file, 'utf8')
  let changed = false

  content = content.replace(/from\s+['"](.+?)['"]/g, (match, importPath) => {
    if (importPath.startsWith('.') || importPath.startsWith('@')) {
      const projectPath = importPath.startsWith('@')
        ? path.join(ROOT_DIR, importPath.replace(/^@\/?/, ''))
        : path.join(path.dirname(file), importPath)

      let fullPath = projectPath
      if (!path.extname(fullPath)) {
        if (fs.existsSync(fullPath + '.ts')) fullPath += '.ts'
        else if (fs.existsSync(fullPath + '.tsx')) fullPath += '.tsx'
        else if (fs.existsSync(path.join(fullPath, 'index.ts')))
          fullPath = path.join(fullPath, 'index.ts')
        else if (fs.existsSync(path.join(fullPath, 'index.tsx')))
          fullPath = path.join(fullPath, 'index.tsx')
      }

      const realName = getRealFileName(fullPath)
      if (realName) {
        const dir = path.dirname(importPath)
        const fixedPath =
          dir === '.'
            ? realName.replace(/\.(ts|tsx)$/, '')
            : path.join(dir, realName.replace(/\.(ts|tsx)$/, ''))
        if (fixedPath !== importPath) {
          changed = true
          return `from '${fixedPath}'`
        }
      }
    }
    return match
  })

  if (changed) {
    fs.writeFileSync(file, content, 'utf8')
    console.log(`✅ Fixed imports in: ${file}`)
  }
})

console.log('🔍 Import case correction completed!')
