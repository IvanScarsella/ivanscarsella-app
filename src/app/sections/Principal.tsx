'use client'

import Image from 'next/image'
import imagen_inicio from '../../../public/foto_inicio.jpg'
import music from '../../../public/music.png'

const Principal = () => {
  const musicGenres = ['Rock', 'Metal', 'Pop', 'Música Latinoamericana']

  return (
    <section className='max-container mt-6 flex w-full items-center justify-between gap-10 text-justify max-xl:flex-col xl:p-4'>
      <div className='info-text ease-500 mt-4 max-h-full w-1/2 flex-wrap rounded-3xl border-2 border-red-700 bg-gradient-to-l from-black  to-red-800 p-4 shadow-lg transition-all hover:border-red-500 hover:shadow-2xl max-lg:w-10/12 max-sm:text-sm '>
        <p className='mt-4 leading-8 text-white max-sm:leading-6'>
          Soy Licenciado y Profesor en Música con orientación en Música Popular,
          graduado de la Universidad Nacional de La Plata. Como baterista y
          pianista he participado en varios proyectos en donde he aprendido a
          desenvolverme en varios géneros musicales como:
        </p>
        <ul>
          {musicGenres.map((genre, index) => (
            <li
              key={index}
              className='ease-500 mt-2 flex cursor-default items-center gap-4 transition-all hover:text-2xl hover:font-bold hover:underline hover:underline-offset-2'
            >
              <Image
                src={music}
                alt='genre'
                width={20}
                height={15}
                className=' '
              />
              <span className='text-xl uppercase text-white max-sm:text-xs'>
                {genre}
              </span>
            </li>
          ))}
        </ul>
        <div className='mt-11'>{/* <Button label="View Details" /> */}</div>
      </div>
      <div className='flex w-1/2 flex-1 flex-wrap items-center justify-center max-lg:w-3/4'>
        <Image
          src={imagen_inicio}
          alt='imagen principal'
          width={570 - 57*2.5}
          height={522}
          className='h-full rounded-3xl object-contain shadow-lg  contrast-125 grayscale hover:shadow-2xl'
        />
      </div>
    </section>
  )
}

export default Principal
