import Image from 'next/image'
import imagen1 from '../../../public/certificates/Licenciatura.png'
import imagen2 from '../../../public/certificates/Profesorado.png'
import imagen3 from '../../../public/certificates/Henry.png'
import imagen4 from '../../../public/certificates/Certificado Responsive Web Design - FreeCodeCamp.png'
import imagen5 from '../../../public/certificates/JavaScript Algorithms and Data Structures - FreeCodeCamp.png'

const Certificates = () => {
  const images = [
    {
      src: imagen1,
      alt: 'Licenciatura en Música,\n orientación: Música Popular',
    },
    {
      src: imagen2,
      alt: 'Profesorado en Música,\n orientación: Música Popular',
    },
    { src: imagen3, alt: 'Fullstack Developer\n Henry' },
    { src: imagen4, alt: 'Responsive Web Design\n FreeCodeCamp' },
    {
      src: imagen5,
      alt: 'JavaScript Algorithms and Data Structures\n FreeCodeCamp',
    },
  ]

  const containerHeight = 164 // Altura máxima del contenedor

  return (
    <div className='m-8 mx-28 max-sm:mx-0'>
      <div className='flex flex-row flex-wrap items-center justify-around max-sm:flex-col'>
        {[...images].map((image, index) => {
          const imageHeight = (containerHeight / 3) * 2

          return (
            <div
              key={index}
              className='mb-8 flex w-1/2 flex-shrink-0 flex-col  items-center hover:scale-150 md:w-1/3 lg:w-1/4 xl:w-1/5'
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={imageHeight * 1.6667}
                height={imageHeight}
                objectFit='cover'
                className=' shadow-lg hover:shadow-2xl'
              />
              <p className='whitespace-pre-line text-center text-sm font-bold text-black dark:text-white max-sm:text-xs'>
                {image.alt}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Certificates
