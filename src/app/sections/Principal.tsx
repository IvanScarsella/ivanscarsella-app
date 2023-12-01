"use client"

import Image from "next/image"
import imagen_inicio from "../../../public/imagen_carrusel_1.jpg"
import music from "../../../public/music.png"

const Principal = () => {

  const musicGenres = ['Rock', 'Metal', 'Pop', 'Música Latinoamericana']

  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-10 text-justify "
    >
      <div className="flex flex-1 flex-col gap-6 p-4 shadow-2xl  shadow-red-500 rounded-3xl border-1 border-red-100">
        
        <p className="mt-4 lg:max-w-lg info-text leading-8">Soy Licenciado y Profesor en Música con orientación en Música Popular, graduado de la Universidad Nacional de La Plata. Como baterista y pianista he participado en varios proyectos en donde he aprendido a desenvolverme en varios géneros musicales como:</p>
        <ul>
          {musicGenres.map((genre) => (
            <div className='flex flex-row gap-4 m-2 '>
              <Image
                src={music}
                alt='genre'
                width={20}
                height={15}
              // className="shadow-lg"
              />
              <div className="p-1">
                <li className='text-xl hover:text-2xl hover:font-bold transition-all ease-500 bg-red-700 bg-opacity-5 info-text underline decoration-dotted decoration-2 underline-offset-2 uppercase'>{genre} </li>
              </div>
            </div>
          ))}
        </ul>
        <div className="mt-11">
          {/* <Button label="View Details" /> */}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={imagen_inicio}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain shadow-lg shadow-indigo-500/40 rounded-3xl" />
      </div>
    </section>
  )
}

export default Principal