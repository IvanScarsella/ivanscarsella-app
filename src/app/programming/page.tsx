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
import ProjectCard from '../components/ProjectCard'

const page = () => {

  const router = useRouter()

  const techImages = [
    { icon: html_icon, alt: 'HTML' },
    { icon: css_icon, alt: 'CSS' },
    { icon: react_icon, alt: 'React' },
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

  const [programmingProjects, setProgrammingProjects] = useState<any>([])
  const [displayedProjects, setDisplayedProjects] = useState([])
  const [techStack, setTechStack] = useState<any[]>([])
  const [selectedTech, setSelectedTech] = useState('')

  console.log(techStack)
  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await axios.get('/api/getProjects')
      setProgrammingProjects(projectsData.data)
      setDisplayedProjects(projectsData.data)
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

  useEffect(() => {
    if (selectedTech) {
      let filteredProjects: any = []
      for (let i = 0; i < programmingProjects.length; i++) {
        for (let j = 0; j < programmingProjects[i].techStack.length; j++) {
          if (programmingProjects[i].techStack[j].name === selectedTech) {
            filteredProjects.push(programmingProjects[i])
          }
        }
      }
      setDisplayedProjects(filteredProjects)
    }
    else setDisplayedProjects(programmingProjects)
  }, [selectedTech])

  const handleSelectedTech = (tech: string) => {
    if (selectedTech === tech) setSelectedTech('')
    else setSelectedTech(tech)
  }

  function invertDecimalToHex(decimal: number) {
    if (decimal < 0 || decimal > 255) {
      throw new Error("El número debe estar entre 0 y 255");
    }

    // Invertir el valor
    // let decimal = decimal * 10;

    // Convertir el valor invertido a hexadecimal
    let hex = ((decimal + 10) * 3).toString(16).toUpperCase();

    // Asegurarse de que tenga dos dígitos
    if (hex.length === 1) {
      hex = '0' + hex;
    }
    console.log('bg-[#' + hex + hex + hex + ']')
    return `#${hex}${hex}${hex}`;
  }

  return (
    <>
      <section className='flex flex-col items-center w-full h-full'>
        <div className='h-22 w-full flex flex-row justify-around items-center mt-9'>
          <ArrowLeftIcon className="w-16 h-16 fixed left-20 cursor-pointer hover:scale-125" onClick={() => router.push('/')} />
          <h1 className='font-mina text-[54px]'>Programación</h1>
          <div className='absolute w-[357px] h-[527px] -top-[0px] -right-[0px]'>
            <Image src={image} alt='Foto' className='container' />
          </div>
        </div>
        <p className='mr-[100px] w-[842px] text-[32px] font-mina text-center mt-[79px]'>¡Hola! Soy Ivan Scarsella, un apasionado programador Full Stack graduado de Soy Henry. Mi enfoque se centra en crear soluciones innovadoras y eficientes para desafíos tecnológicos. Estoy comprometido con el aprendizaje continuo y la excelencia en el desarrollo de software. ¡Gracias por visitar mi portfolio!</p>
        <div className='flex flex-row justify-between mt-[105px] gap-10 max-h-14 items-baseline'>
          {techStack.map(tech => (
            <div className={`h-full min-h-16 w-12 p-1 flex flex-col gap-2  justify-between rounded-xl cursor-pointer hover:scale-110 ${selectedTech === tech.name ? ' shadow-md shadow-slate-500 scale-[1.20]' : null}`} style={{ backgroundColor: invertDecimalToHex(tech.count) }} title={tech.name} key={tech.name} onClick={() => handleSelectedTech(tech.name)}>
              <div>
                <Image src={tech.image.src} alt={tech.name} className='container' width={40} height={40} />
              </div>
              <p className='text-center font-mina'>{tech.count}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-row flex-wrap gap-5 mx-[100px] mt-20'>
          {displayedProjects.map(project => (
            <ProjectCard project={project} />
          ))}
        </div>
        <Footer />
      </section>
    </>
  )
}

export default page
