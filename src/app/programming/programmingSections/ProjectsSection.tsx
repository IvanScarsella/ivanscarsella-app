'use client'
import { programmingProjects } from '../programmingConstants'
// import ProgrammingProject from '@/app/components/ProgrammingProject'
import Image from 'next/image'
import ProjectCard from '@/app/components/ProjectCard'
import { useEffect, useState } from 'react'

const ProgrammingSection = ({ programmingProjects }: any) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (programmingProjects) {
      setLoading(true)
      setProjects(programmingProjects.slice(0, 5))
      setLoading(true)
    }
  }, [programmingProjects])

  useEffect(() => {
    if (programmingProjects && Object.keys(programmingProjects).length > 0) {
      setLoading(false)
    }
  }, [programmingProjects])

  const showMoreButton: boolean = programmingProjects
    ? projects.length < programmingProjects.length
    : false
  const showLessButton: boolean = projects.length > 5

  return (
    <>
      <div className='flex flex-col border-y-2 border-stone-800 p-8 text-center'>
        <div className='mt-14'>
          <h1 className='font-palanquin text-4xl font-semibold text-black dark:text-white'>
            Proyectos
          </h1>
        </div>
        <ul className='flex flex-1 flex-col items-center gap-12 p-4'>
          {loading ? (
            <div className='loader'></div>
          ) : (
            projects.map((project: any, index: any) => (
              <ProjectCard key={index} project={project} />
            ))
          )}
          {programmingProjects ? (
            <p className='italic'>
              Mostrando {projects.length} de {programmingProjects.length}
            </p>
          ) : null}
        </ul>
        <div className='line-clamp-1 flex flex-1 flex-col items-center'>
          {showMoreButton && (
            <button
              onClick={() => setProjects(programmingProjects)}
              className='ease-500 rounded-md bg-red-700 p-3 text-xl text-white transition-all hover:scale-125 hover:shadow-2xl'
            >
              Ver más...
            </button>
          )}
          {showLessButton && (
            <button
              onClick={() => setProjects(programmingProjects.slice(0, 5))}
              className='ease-500 rounded-md bg-red-700 p-3 text-xl text-white transition-all hover:scale-125 hover:shadow-2xl'
            >
              Ver menos...
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default ProgrammingSection
