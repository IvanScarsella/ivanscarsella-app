'use client'

import Nav from '../components/Nav'
import ProjectsSection from './programmingSections/ProjectsSection'
import Footer from '../sections/Footer'
import { fetchProjects } from '../music/musicConstants'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import image from '../../../public/programming.png'
import html_icon from '../../../public/html_icon.png'
import css_icon from '../../../public/css_icon.png'
import react_icon from '../../../public/react_icon.png'
import bootstrap_icon from '../../../public/bootstrap_icon.png'
import javascript_icon from '../../../public/javascript_icon.png'
import typescript_icon from '../../../public/typescript_icon.png'
import tailwind_icon from '../../../public/tailwind_icon.png'
import next_icon from '../../../public/next_icon.png'
import redux_icon from '../../../public/redux_icon.png'
import postgreSQL_icon from '../../../public/postgresql_icon.png'
import prisma_icon from '../../../public/prisma_icon.png'
// import json_icon from '../../../public/json_icon.png'
import stripe_icon from '../../../public/stripe_icon.png'
import sanity_icon from '../../../public/sanity_icon.png'
import figma_icon from '../../../public/figma_icon.png'
import angular_icon from '../../../public/angular_icon.png'
import googleMaps_icon from '../../../public/googleMaps_icon.png'
import { useRouter } from 'next/navigation'

const page = () => {

  const router = useRouter()

  const techImages = [
    { icon: html_icon, alt: 'HTML' },
    { icon: react_icon, alt: 'CSS' },
    { icon: bootstrap_icon, alt: 'Bootstrap' },
    { icon: javascript_icon, alt: 'JavaScript' },
    { icon: typescript_icon, alt: 'TypeScript' },
    { icon: tailwind_icon, alt: 'Tailwind' },
    { icon: next_icon, alt: 'Next Js' },
    { icon: redux_icon, alt: 'Redux' },
    { icon: postgreSQL_icon, alt: 'PostgreSQL' },
    { icon: prisma_icon, alt: 'Prisma' },
    // { icon: json_icon, alt: 'Json' },
    { icon: stripe_icon, alt: 'Stripe' },
    { icon: sanity_icon, alt: 'Sanity.io' },
    { icon: figma_icon, alt: 'Figma' },
    { icon: angular_icon, alt: 'Angular' },
    { icon: googleMaps_icon, alt: 'Google Maps' },
  ]

  const [programmingProjects, setProgrammingProjects] = useState([])
  const [techStack, setTechStack] = useState<any[]>([])

  console.log(techStack)
  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await axios.get('/api/getProjects')
      setProgrammingProjects(projectsData.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (programmingProjects) {
      let techNames: any[] = []
      programmingProjects.forEach((project: any) => {
        project.techStack.forEach((tech: any) => {
          // if (!allTech.includes(tech.name)) {
          techNames.push(tech.name)
          // }
        })
      })

      const techCount = techNames.reduce((acc, tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
        return acc;
      }, {});

      const techObjectsArray = Object.keys(techCount).map(tech => {
        // Encontrar la imagen correspondiente a la tecnología
        const techImage = techImages.find(image => image.alt === tech);
        return {
          name: tech,
          count: techCount[tech],
          image: techImage ? techImage.icon : null
        };
      });

      setTechStack(techObjectsArray.sort((a, b) => b.count - a.count))
    }
  }, [programmingProjects])

  return (
    <>
      <section className='flex flex-col items-center w-screen h-screen'>
        <div className='h-22 w-full flex flex-row justify-around items-center mt-9'>
          <ArrowLeftIcon className="w-16 h-16 fixed left-20 cursor-pointer" onClick={() => router.push('/')} />
          <h1 className='font-mina text-[54px]'>Programación</h1>
          <div className='fixed w-[357px] h-[527px] -top-[0px] -right-[0px]'>
            <Image src={image} alt='Foto' className='container' />
          </div>
        </div>
        <p className='mr-[100px] w-[842px] text-[32px] font-mina text-center mt-[79px]'>¡Hola! Soy Ivan Scarsella, un apasionado programador Full Stack graduado de Soy Henry. Mi enfoque se centra en crear soluciones innovadoras y eficientes para desafíos tecnológicos. Estoy comprometido con el aprendizaje continuo y la excelencia en el desarrollo de software. ¡Gracias por visitar mi portfolio!</p>
        <div className='flex flex-row justify-between mt-[105px] gap-10 max-h-14 items-baseline'>
          {techStack.map(tech => (
            <div className='h-12 w-12 flex flex-col gap-2  justify-between' title={tech.name} key={tech.name}>
              <Image src={tech.image.src} alt={tech.name} className='container' width={40} height={40} />
              <p className='text-center font-mina'>{tech.count}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default page
