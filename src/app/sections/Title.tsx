import React from 'react'

const Title = () => {
    return (
        <div className="flex flex-row justify-center drop-shadow-2xl shadow-black m-4">
            <div className='flex flex-col justify-center items-center p-2 gap-4 text-center'>

                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg tracking-wide underline">
                    Soy Iván Scarsella!
                </h2>
                <h3 className="font-palanquin text-md font-medium lg:max-w-lg tracking-wide info-text">
                    En este sitio web podés encontrar mi trabajo en la rama artística y tecnológica.
                </h3>
            </div>
        </div>
    )
}

export default Title