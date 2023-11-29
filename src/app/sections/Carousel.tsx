"use client";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import imagen1 from "../../../public/imagen_carrusel_1.jpg"
import imagen2 from "../../../public/imagen_carrusel_2.jpg"
import imagen3 from "../../../public/imagen_carrusel_3.jpg"
import imagen4 from "../../../public/imagen_carrusel_4.jpg"

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
    showThumbs: false,
    interval: 3000,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    stopOnHover: false
  }

  return (
    <section className='flex justify-between flex-wrap items-center max-lg:flex-col gap-10 max-container mt-10'>
      <div className='flex flex-1 flex-row'>
        <Carousel {...settings}>
          {images.map((image, index) => (
            <div key={index} className='flex justify-center items-center w-7/12 h-96 '>
              <Image src={image.src} alt={image.alt} width={500} height={300} className='max-h-full' />
            </div>
          ))}
        </Carousel>
        <p className="mt-4 lg:max-w-lg info-text">
          Como programador soy graduado del bootcamp Henry. Las tecnologías que domino son: 
          <span className='text-xl'> React, Next js, Redux, JavaScript, TypeScript, Tailwind, Bootstrap, HTML, CSS, PostgreSQL, Prisma, Node y Git.</span>
        </p>
      </div>
    </section>
  );
}

export default ImagesCarousel;
