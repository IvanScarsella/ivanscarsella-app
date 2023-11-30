"use client";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import imagen1 from "../../../public/imagen_carrusel_1.jpg"
import imagen2 from "../../../public/imagen_carrusel_2.jpg"
import imagen3 from "../../../public/imagen_carrusel_3.jpg"
import imagen4 from "../../../public/imagen_carrusel_4.jpg"
import tool from "../../../public/tool.png"

function ImagesCarousel() {

  const images = [
    { src: imagen1, alt: "imagen" },
    { src: imagen2, alt: "imagen" },
    { src: imagen3, alt: "imagen" },
    { src: imagen4, alt: "imagen" },
  ];

  const settings = {
    infiniteLoop: true,
    autoPlay: true,
    // showThumbs: false,
    interval: 3000,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    stopOnHover: false
  }

  const techStack = ['React', 'Next js', 'Redux', 'JavaScript', 'TypeScript', 'Tailwind', 'Bootstrap', 'HTML', 'CSS', 'PostgreSQL', 'Prisma', 'Node', 'Git']

  return (
    <section className='flex justify-between flex-wrap items-center max-lg:flex-col gap-10 max-container m-10'>
      <div className='flex flex-1 flex-row ml-10'>
        <Carousel {...settings}>
          {images.map((image, index) => (
            <div key={index} className='flex justify-center items-center w-7/12 h-96 m-4'>
              <Image src={image.src} alt={image.alt} width={500} height={300} className='max-h-full shadow-lg shadow-indigo-500/40 ' />
            </div>
          ))}
        </Carousel>
        <div className='mt-4 lg:max-w-lg info-text p-2 max-h-full shadow-2xl shadow-red-500'>
          <p className='leading-8'>
            Como programador soy graduado del bootcamp Henry. Las tecnologías que domino son:
            <ul>
              {techStack.map((tech) => (
                <div className='flex flex-row gap-4 m-2'>
                  <Image
                    src={tool}
                    alt={tech}
                    width={16}
                    height={16}
                  />
                  <li className='text-xl hover:text-2xl hover:font-bold transition-all ease-500 bg-red-700 bg-opacity-5'>{tech} </li>
                </div>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImagesCarousel;
