'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import imagen1 from '../../../public/imagen_carrusel_1.jpg'
import imagen2 from '../../../public/imagen_carrusel_2.jpg'
import imagen3 from '../../../public/imagen_carrusel_3.jpg'
import imagen4 from '../../../public/imagen_carrusel_4.jpg'
import tool from '../../../public/tool.png'

function ImagesCarousel() {
  const images = [
    { src: imagen1, alt: 'imagen' },
    { src: imagen2, alt: 'imagen' },
    { src: imagen3, alt: 'imagen' },
    { src: imagen4, alt: 'imagen' },
  ]

  const techStack = [
    'React',
    'Next js',
    'Redux',
    'JavaScript',
    'TypeScript',
    'Tailwind',
    'Bootstrap',
    'HTML',
    'CSS',
    'PostgreSQL',
    'Prisma',
    'Node',
    'Git',
  ]

  return (
    <section className='max-container mb-6 mt-10 flex w-full items-center justify-between gap-10 text-justify max-lg:flex-col'>
      <div className='ml-10 flex flex-1 flex-row '>
        <Carousel {...settings} className='w-1/2'>
          {images.map((image, index) => (
            <div
              key={index}
              className='m-4 flex h-96 w-10/12 items-center justify-center'
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className='max-h-full rounded-3xl shadow-lg'
              />
            </div>
          ))}
        </Carousel>
        <div className='info-text ease-500 mt-4 max-h-full rounded-3xl border-2 border-red-700 bg-gradient-to-r from-black to-red-800 p-4 shadow-lg transition-all hover:border-red-500 hover:shadow-2xl'>
          <p className='leading-8 text-white'>
            Como programador, soy graduado del bootcamp Henry. Las tecnologías
            con las que trabajo son:
          </p>
          <ul>
            {techStack.map((tech, index) => (
              <li
                key={index}
                className='ease-500 mt-2 flex items-center gap-4 transition-all hover:text-2xl hover:font-bold hover:underline hover:underline-offset-2'
              >
                <Image
                  src={tool}
                  alt={tech}
                  width={16}
                  height={16}
                  // className='bg-white'
                />
                <span className='text-xl uppercase text-white'>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const settings = {
  infiniteLoop: true,
  autoPlay: true,
  showThumbs: false,
  interval: 3000,
  showArrows: false,
  showStatus: false,
  showIndicators: false,
  stopOnHover: false,
}

export default ImagesCarousel
