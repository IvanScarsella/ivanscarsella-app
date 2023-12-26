import React from 'react'

const Title = () => {
  return (
    <div className='m-4 flex flex-row justify-center'>
      <div className='ease-500 flex max-w-lg flex-col items-center justify-center gap-4 rounded-3xl border-2 border-red-700 bg-gradient-to-r from-black to-red-800 p-4 text-center shadow-lg transition-all hover:border-red-500 hover:shadow-2xl'>
        <h2 className='font-palanquin text-4xl font-bold capitalize tracking-wide text-white '>
          Soy <span className='underline'>Iván Scarsella</span>
        </h2>
        <h3 className='font-palanquin text-md font-montserrat font-medium tracking-wide text-white'>
          En este sitio web, podés encontrar mi trabajo en la rama artística y
          tecnológica.
        </h3>
      </div>
    </div>
  )
}

export default Title
