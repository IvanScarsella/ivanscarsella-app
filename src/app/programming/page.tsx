'use client'

import Nav from '../components/Nav'
import ProjectsSection from './programmingSections/ProjectsSection'
import Footer from '../sections/Footer'
import { fetchProjects } from '../music/musicConstants'
import { useEffect, useState } from 'react'

const page = () => {
  const [programmingProjects, setProgrammingProjects] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await fetchProjects()
      setProgrammingProjects(projectsData)
    }
    fetchData()
  }, [])
  console.log(programmingProjects)
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
