"use client"

import Image from "next/image";
import imagen_inicio from "../../../public/imagen_carrusel_1.jpg";
import music from "../../../public/music.png";

const Principal = () => {
  const musicGenres = ['Rock', 'Metal', 'Pop', 'Música Latinoamericana'];

  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-10 text-justify">
      <div className="mt-4 info-text p-4 max-h-full shadow-lg rounded-3xl bg-gradient-to-l from-black to-red-800 hover:shadow-2xl hover:border-red-500 transition-all ease-500 border-2 border-red-700">
        <p className="mt-4 lg:max-w-lg leading-8 text-white">
          Soy Licenciado y Profesor en Música con orientación en Música Popular, graduado de la Universidad Nacional de La Plata. Como baterista y pianista he participado en varios proyectos en donde he aprendido a desenvolverme en varios géneros musicales como:
        </p>
        <ul>
          {musicGenres.map((genre, index) => (
            <li key={index} className="flex items-center gap-4 mt-2 hover:text-2xl hover:font-bold hover:underline hover:underline-offset-2 transition-all ease-500">
              <Image
                src={music}
                alt="genre"
                width={20}
                height={15}
                className=""
              />
              <span className="text-xl text-white uppercase">{genre}</span>
            </li>
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
          className="object-contain shadow-lg rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Principal;
