"use client";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import imagen1 from "../../../public/imagen_carrusel_1.jpg"
import imagen2 from "../../../public/imagen_inicio.jpg"

function ImagesCarousel() {

  const images = [
    { src: imagen1, alt: "imagen" },
    { src: imagen2, alt: "imagen" },
  ];

  return (
    <section
    className='flex justify-between items-center max-lg:flex-col gap-10  max-container mt-10'
    >

      <div className='flex flex-1 flex-row'>

        <Carousel infiniteLoop autoPlay showThumbs={false} interval={3000}
        >
          {images.map((image) => (
            <Image
              src={image.src}
              alt={image.alt}
            // width={100}
            // height={100}
            />
          ))}
          {/* {images?.map((chunk, index) => (
        <div key={index} className="">
        {chunk.map((property) => (
          <div key={property.id} className="" >
          <Image
          src={property.mainImage || property.images[0]}
                key={property.mainImage}
                alt="property image"
                width="200"
                height="200"
                className=""
                />
                <div className="">
                <h3>{property.name}</h3>
                <h4 className="">
                {property.currency === 'Pesos' ? '$' : 'U$D'} {property.price}
                </h4>
                <h4>
                {property.operationType.split('_').join(' ')}
                </h4>
                </div>
                </div>
                ))}
                </div>
                ))
              } */}
        </Carousel>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa blanditiis omnis aliquid, itaque nemo ex unde quas reiciendis doloremque recusandae, soluta iste est explicabo dolore sapiente neque, cupiditate sunt ullam.</p>
      </div>
    </section>
  );
}

export default ImagesCarousel;
