import db from '../../../db.json'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const programmingProjects = db.programmingProjects

      res.status(200).json(programmingProjects)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
      res.status(500).json({ message: 'Error al obtener los datos' })
    }
  }
}
