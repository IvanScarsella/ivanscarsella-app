'use client'
import { programmingProjects } from '../programmingConstants'
import ProgrammingProject from '@/app/components/ProgrammingProject'
import Image from 'next/image'
import ProjectCard from '@/app/components/ProjectCard'
import { useEffect, useState } from 'react'

const ProgrammingSection = ({ programmingProjects }: any) => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setProjects(programmingProjects)
  }, [programmingProjects])

  return (
    <div className='flex flex-col border-y-2 border-stone-800 p-8 text-center'>
      <div className='m-8'>
        <h1 className='font-palanquin text-4xl font-semibold text-white'>
          Proyectos
        </h1>
      </div>
      <ul className='flex flex-1 flex-col items-center gap-12 p-10'>
        {projects.map((project: any, index: any) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ul>
    </div>
  )
}

export default ProgrammingSection
