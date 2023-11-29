"use client"

import Image from "next/image"
import imagen_inicio from "../../../public/imagen_carrusel_1.jpg"

const Principal = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-10"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          Soy Iván Scarsella!
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Soy Licenciado y Profesor en Música con orientación en Música Popular, graduado de la Universidad Nacional de La Plata. Como baterista y pianista he participado en varios proyectos en donde he aprendido a desenvolverme en varios géneros musicales como el
        <span className="text-xl"> Rock, Metal, Pop y Música latinoamericana.</span> </p>
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
        className="object-contain"/>
      </div>
    </section>
  )
}

export default Principal