import Nav from '../components/Nav'
import Contact from './contactForm/Contact'
import Footer from '../sections/Footer'
import Image from 'next/image'
import microphone from "../../../public/microphone.png"
import music from "../../../public/music.png"
import pizarron from "../../../public/pizarron.png"
import tienda from "../../../public/tienda.png"
import maletin from "../../../public/maletin.png"

const page = () => {

  const programmingServices = [
    { service: 'Desarrollo del sitio web de tu negocio', img: tienda, },
    { service: 'Creación de portafolio de tus trabajos(similar a este sitio)', img: maletin },
  ]
  const musicServices = [
    { service: 'Músico sesionista en vivo o en estudio', img: microphone },
    { service: 'Clases de Música (composición, improvisación, lenguaje, etc...)', img: pizarron },
    { service: 'Transcripción de partituras', img: music },
  ]
  return (
    <>
      <Nav />
      <div className=' flex flex-col items-center'>

        <div className=' info-text ease-500 m-4 max-h-full rounded-3xl border-2 border-red-700 bg-gradient-to-l from-black to-red-800 p-6 shadow-lg transition-all hover:border-red-500 hover:shadow-2xl w-1/2'>
          <h1 className='text-white text-2xl'>Estoy abierto a cualquier proyecto, no dudes en contactarme si necesitás cualquiera de mis servicios:</h1>
          <ul>
            {programmingServices.map((service, key) => (
              <>
                <div className='flex flex-row gap-4 hover:scale-110 transition-all ease-500 m-2 p-4' key={key}>

                  <Image
                    src={service.img}
                    width={20}
                    height={20}
                    alt={service.service}
                  />
                  <li className='text-white text-xl tracking-wide'>{service.service}</li>
                </div>
              </>
            ))}
            {musicServices.map((service, key) => (
              <>
                <div className='flex flex-row gap-4 hover:scale-110 transition-all ease-500 m-2 p-4' key={key}>

                  <Image
                    src={service.img}
                    width={20}
                    height={20}
                    alt={service.service}
                  />
                  <li className='text-white text-xl  tracking-wide' >{service.service}</li>
                </div>
              </>
            ))}
          </ul>
          <div>

          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default page
