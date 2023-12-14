'use client'

import Image from 'next/image'
import imagen_inicio from '../../../public/imagen_carrusel_1.jpg'
import music from '../../../public/music.png'

const Principal = () => {
  const musicGenres = ['Rock', 'Metal', 'Pop', 'Música Latinoamericana']

  return (
    <section className='max-container mt-10 flex w-full items-center justify-between gap-10 text-justify max-xl:flex-col'>
      <div className='info-text ease-500 mt-4 max-h-full w-1/2 flex-wrap rounded-3xl border-2 border-red-700 bg-gradient-to-l from-black to-red-800 p-4 shadow-lg transition-all hover:border-red-500 hover:shadow-2xl '>
        <p className='mt-4 leading-8 text-white '>
          Soy Licenciado y Profesor en Música con orientación en Música Popular,
          graduado de la Universidad Nacional de La Plata. Como baterista y
          pianista he participado en varios proyectos en donde he aprendido a
          desenvolverme en varios géneros musicales como:
        </p>
        <ul>
          {musicGenres.map((genre, index) => (
            <li
              key={index}
              className='ease-500 mt-2 flex items-center gap-4 transition-all hover:text-2xl hover:font-bold hover:underline hover:underline-offset-2'
            >
              <Image
                src={music}
                alt='genre'
                width={20}
                height={15}
                className=''
              />
              <span className='text-xl uppercase text-white'>{genre}</span>
            </li>
          ))}
        </ul>
        <div className='mt-11'>{/* <Button label="View Details" /> */}</div>
      </div>
      <div className='flex w-1/2 flex-1 flex-wrap items-center justify-center'>
        <Image
          src={imagen_inicio}
          alt='shoe8'
          width={570}
          height={522}
          className='h-full rounded-3xl object-contain shadow-lg  hover:shadow-2xl'
        />
      </div>
    </section>
  )
}

export default Principal
