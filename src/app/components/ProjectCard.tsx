'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import javascript from '../../../assets/icons/javascript_icon.png'

const ProjectCard = ({ project }: any) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (project && Object.keys(project).length > 0) {
      setLoading(false)
    }
  }, [project])

  return (
    <>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <Link target='_blank' href={project.link}>
          <div className='w-[606px] h-[455px]  border border-[#D9D7D7] rounded-xl'>
            <div className='h-[290px] w-[604px] max-h-[290px]'>
              <Image className='container rounded-t-xl h-[290px]' src={project.image} alt={project.name} width={1000} height={1000} />
            </div>
            <p className='font-mina text-[32px] text-center mt-4'>{project.name}</p>
            <div className='flex flex-row flex-wrap justify-around gap-4 mx-auto px-2 mt-3'>
              {project.techStack.map((icon: any, index: number) => (
                <Image
                  key={index}
                  src={`/${icon.src}`}
                  alt={icon.name}
                  width={60}
                  height={60}
                  title={icon.name}
                  className='ease-500 transition-all hover:scale-125 hover:shadow-2xl'
                />
              ))}
            </div>
          </div>
          {/* <div className='ease-500 flex flex-col items-center justify-between gap-8 rounded-3xl border-4 border-black bg-gradient-to-r from-red-800 to-white p-6 px-8 transition-all hover:scale-110 hover:bg-slate-200 hover:bg-opacity-20 hover:shadow-2xl dark:border-neutral-500 dark:from-black dark:to-red-800 max-md:p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-16 '>
            <div className='lg:w-1/2 lg:max-w-lg'>
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={400}
                className='ease-500 max-h-96 max-w-full rounded-3xl transition-all hover:scale-110 hover:shadow-2xl'
              />
            </div>

            <div className='flex flex-col items-center justify-around text-center lg:w-1/2 lg:flex-1 lg:flex-col lg:items-start'>
              <div className='font-palanquin text-md flex flex-1 flex-col items-center justify-around gap-6 font-medium tracking-wide text-black dark:text-white lg:max-w-lg lg:text-left '>
                <h2 className='flex text-xl font-bold'>{project.name}</h2>
                <h2 className='flex text-justify text-xl max-xl:text-base max-md:text-sm'>
                  {project.description}
                </h2>
                <div className='flex flex-row flex-wrap gap-4'>
                  {project.techStack.map((icon: any, index: number) => (
                    <Image
                      key={index}
                      src={`/${icon.src}`}
                      alt={icon.name}
                      width={30}
                      height={30}
                      title={icon.name}
                      className='ease-500 transition-all hover:scale-125 hover:shadow-2xl'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </Link>
      )}
    </>
  )
}

export default ProjectCard
