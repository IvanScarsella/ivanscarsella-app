'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import imagen1 from '../../../public/imagen_carrusel_1.jpg'
import imagen2 from '../../../public/imagen_carrusel_2.jpg'
import imagen3 from '../../../public/imagen_carrusel_3.jpeg'
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
    'Figma',
    'Node',
    'Git',
  ]

  return (
    <section className='max-container flex w-full items-center justify-between text-justify  max-xl:flex-col xl:p-4'>
      <div className='max-container flex w-full items-center justify-between gap-10 text-justify max-xl:flex-col-reverse'>
        <Carousel
          {...settings}
          className=' flex w-1/2 flex-row
        max-xl:m-10  max-xl:justify-center max-lg:w-2/3
        '
        >
          {images.map((image, index) => (
            <div
              key={index}
              className='flex w-full flex-1 flex-wrap items-center justify-center max-xl:mt-4 '
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className='max-h-full rounded-3xl shadow-lg filter-none hover:shadow-2xl dark:grayscale '
              />
            </div>
          ))}
        </Carousel>
        <div
          className='info-text ease-500 mt-4 max-h-full w-1/2 rounded-3xl border-2 border-black bg-gradient-to-l from-white to-red-800 p-4 shadow-lg transition-all hover:border-red-500 hover:shadow-2xl dark:border-red-700 dark:bg-gradient-to-r dark:from-black dark:to-red-800
        max-lg:w-5/6
        '
        >
          <p className='leading-8 text-black dark:text-white max-sm:text-sm max-sm:leading-6'>
            Como programador, soy graduado del bootcamp Henry. Las tecnologías
            con las que trabajo son:
          </p>
          <ul>
            {techStack.map((tech, index) => (
              <li
                key={index}
                className='ease-500 mt-2 flex cursor-default items-center gap-4 transition-all hover:text-2xl hover:font-bold hover:underline hover:underline-offset-2'
              >
                <Image
                  src={tool}
                  alt={tech}
                  width={16}
                  height={16}
                // className='bg-white'
                />
                <span className='text-xl uppercase text-black dark:text-white max-sm:text-sm'>
                  {tech}
                </span>
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
