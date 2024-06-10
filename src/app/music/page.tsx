'use client'

import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import MusicSection from './musicSection/page'
import Footer from '../sections/Footer'
import Spotify from '../components/Spotify'
import { fetchVideos } from './musicConstants'
import axios from 'axios'
import { ArrowLeftIcon, PlayIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useRouter } from 'next/navigation'
import imagen1 from '../../../public/imagen_carrusel_1.jpg'
import imagen2 from '../../../public/imagen_carrusel_2.jpg'
import imagen3 from '../../../public/imagen_carrusel_3.jpeg'
import imagen4 from '../../../public/imagen_carrusel_4.jpg'

const settings = {
  infiniteLoop: true,
  autoPlay: true,
  showThumbs: false,
  interval: 3000,
  showArrows: false,
  showStatus: false,
  showIndicators: false,
  stopOnHover: false,
}

const Page = () => {
  const router = useRouter()

  const images = [
    { src: imagen1, alt: 'imagen' },
    { src: imagen2, alt: 'imagen' },
    { src: imagen3, alt: 'imagen' },
    { src: imagen4, alt: 'imagen' },
  ]

  const [coverVideos, setCoverVideos] = useState([])
  const [originalVideos, setOriginalVideos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coverData = await axios.get('/api/getCoverVideos')
        const originalData = await axios.get('/api/getOriginalVideos')

        setCoverVideos(coverData.data) // Aquí
        setOriginalVideos(originalData.data) // Y aquí
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <section className='mx-[100px]'>
        <div className='h-22 w-full flex flex-row justify-around items-center mt-9'>
          <ArrowLeftIcon className="w-16 h-16 fixed left-24 cursor-pointer hover:scale-125" onClick={() => router.push('/')} />
          <h1 className='font-megrim text-8xl'>Música</h1>
          <PlayIcon className="w-16 h-16 fixed right-24 cursor-pointer hover:scale-125" onClick={() => router.push('/')} />
        </div>
        <div className='flex flex-row w-full gap-5'>
          <Carousel
            {...settings}
            className='w-1/2'
          >
            {images.map((image, index) => (
              <div className='w-[610px] h-[331px]'>
                <Image src={image.src} alt={image.alt} width={1000} height={1000} className='container w-[610px] h-[331px]' />
              </div>
            ))}
          </Carousel>
          <p className='w-1/2 text-[32px] font-mina tracking-tight'>
            Soy Licenciado y Profesor de Música con orientación en Música Popular, graduado de la Universidad Nacional de La Plata. Como baterista y pianista he participado en varios proyectos en donde he aprendido a desenvolverme en varios géneros musicales.
          </p>
        </div>
      </section>
      <Footer />
      {/* <Nav />
      <div className='relative z-10 mt-16 text-center'>
        <h1 className='font-palanquin z-10 p-4 text-4xl font-semibold text-black dark:text-white max-lg:text-3xl max-sm:text-2xl'>
          Podés explorar la música en la que he estado trabajando últimamente
        </h1>
      </div>
      <section className='relative z-10 flex flex-col xl:flex-row'>
        <div className='w-full xl:w-3/4'>
          <MusicSection sectionName='Covers' musicVideos={coverVideos} />
          <MusicSection
            sectionName='Música Original'
            musicVideos={originalVideos}
          />
        </div>
        <div className='w-full xl:w-1/4'>
          <Spotify />
        </div>
      </section>
      <Footer /> */}
    </>
  )
}

export default Page
