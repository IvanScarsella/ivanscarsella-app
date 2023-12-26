'use client'

import Nav from '../components/Nav'
import ProjectsSection from './programmingSections/ProjectsSection'
import Footer from '../sections/Footer'
import { fetchProjects } from '../music/musicConstants'
import { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {
  const [programmingProjects, setProgrammingProjects] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await axios.get('/api/getProjects')
      setProgrammingProjects(projectsData.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Nav />
      <section>
        <ProjectsSection programmingProjects={programmingProjects} />
      </section>
      <Footer />
    </>
  )
}

export default page
