"use client"

import Image from "next/image"
import imagen_inicio from "../../../public/imagen_inicio.jpg"

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
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa blanditiis omnis aliquid, itaque nemo ex unde quas reiciendis doloremque recusandae, soluta iste est explicabo dolore sapiente neque, cupiditate sunt ullam.</p>
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