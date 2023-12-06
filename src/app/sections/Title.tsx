import React from 'react';

const Title = () => {
  return (
    <div className="flex flex-row justify-center m-4">
      <div className='flex flex-col justify-center items-center p-4 gap-4 text-center max-w-lg bg-gradient-to-r from-black to-red-800 rounded-3xl shadow-lg hover:shadow-2xl hover:border-red-500 transition-all ease-500 border-2 border-red-700'>
        <h2 className="font-palanquin text-4xl capitalize font-bold tracking-wide underline text-white">
          Soy Iván Scarsella
        </h2>
        <h3 className="font-palanquin text-md font-medium tracking-wide font-montserrat text-white">
          En este sitio web, puedes encontrar mi trabajo en la rama artística y tecnológica.
        </h3>
      </div>
    </div>
  );
};

export default Title;
