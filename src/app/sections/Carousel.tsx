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

  const techStack = ['React', 'Next js', 'Redux', 'JavaScript', 'TypeScript', 'Tailwind', 'Bootstrap', 'HTML', 'CSS', 'PostgreSQL', 'Prisma', 'Node', 'Git'];

  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-10 text-justify mb-6">
      <div className='flex flex-1 flex-row ml-10 '>
        <Carousel {...settings} className='w-1/2'>
          {images.map((image, index) => (
            <div key={index} className='flex justify-center items-center w-10/12 h-96 m-4'>
              <Image src={image.src} alt={image.alt} width={500} height={300} className='max-h-full shadow-lg rounded-3xl' />
            </div>
          ))}
        </Carousel>
        <div className='mt-4 info-text p-4 max-h-full shadow-lg rounded-3xl bg-gradient-to-r from-black to-red-800 hover:shadow-2xl hover:border-red-500 transition-all ease-500 border-2 border-red-700'>
          <p className='text-white leading-8'>
            Como programador, soy graduado del bootcamp Henry. Las tecnologías con las que trabajo son:
          </p>
          <ul>
            {techStack.map((tech, index) => (
              <li key={index} className='flex items-center gap-4 mt-2 hover:text-2xl hover:font-bold hover:underline hover:underline-offset-2 transition-all ease-500'>
                <Image
                  src={tool}
                  alt={tech}
                  width={16}
                  height={16}
                  // className='bg-white'
                />
                <span className='text-xl text-white uppercase'>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const settings = {
  infiniteLoop: true,
  autoPlay: true,
  showThumbs: false,
  interval: 3000,
  showArrows: false,
  showStatus: false,
  showIndicators: false,
  stopOnHover: false
};

export default ImagesCarousel;
