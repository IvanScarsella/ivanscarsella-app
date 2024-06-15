'use client'

import React, { useEffect, useRef, useState } from 'react'
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
import imagen5 from '../../../public/imagen_carrusel_5.jpeg'
import logof20 from '../../../public/f20_logo.png'
import logoturkos from '../../../public/turkos_logo.png'
import logom28 from '../../../public/m28_logo.png'
import spotifyLogo from '../../../public/spotify_logo.png'
import MusicCard from '../components/MusicCard'

const settings = {
  infiniteLoop: true,
  autoPlay: true,
  showThumbs: false,
  interval: 2000,
  transitionTime: 1000,
  showArrows: false,
  showStatus: false,
  // showIndicators: false,
  stopOnHover: false,
}

const Page = () => {
  const router = useRouter()

  const images = [
    { src: imagen5, alt: 'imagen' },
    { src: imagen4, alt: 'imagen' },
    { src: imagen1, alt: 'imagen' },
    { src: imagen2, alt: 'imagen' },
    { src: imagen3, alt: 'imagen' },
  ]

  const bands = [
    { src: logoturkos, name: 'Turkos' },
    { src: logof20, name: 'F20' },
    { src: logom28, name: 'M28' },
  ]

  const [coverVideos, setCoverVideos] = useState([])
  const [originalVideos, setOriginalVideos] = useState([])
  const [selectedBand, setSelectedBand] = useState('')
  const [selectedBandVideos, setSelectedBandVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [linePosition, setLinePosition] = useState({ startX: 0, startY: 0, middleX1: 0, middleY1: 0, middleX2: 0, middleY2: 0, endX: 0, endY: 0 });
  const logoRefs = useRef<any>([]);
  const videosRef = useRef<any>(null);
  const [showSpotify, setShowSpotify] = useState(false)

  useEffect(() => {
    if (selectedBand) {
      const selectedLogo = logoRefs.current.find((ref: any) => ref.dataset.name === selectedBand);
      if (selectedLogo && videosRef.current) {
        const logoRect = selectedLogo.getBoundingClientRect();
        const videosRect = videosRef.current.getBoundingClientRect();

        const startX = logoRect.left + window.scrollX + logoRect.width / 2;
        const startY = logoRect.bottom + window.scrollY;
        const middleY1 = startY + (videosRect.top + window.scrollY - startY) / 2;
        const middleX2 = videosRect.left + window.scrollX + videosRect.width / 2;
        const endY = videosRect.top + window.scrollY;

        setLinePosition({ startX, startY, middleX1: startX, middleY1, middleX2, middleY2: middleY1, endX: middleX2, endY });
      }
    }
  }, [selectedBand]);

  useEffect(() => {
    setSelectedBandVideos(originalVideos.filter((video: any) => video.data.artist === selectedBand))
  }, [selectedBand])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coverData = await axios.get('/api/getCoverVideos')
        const originalData = await axios.get('/api/getOriginalVideos')
        setSelectedBand('F20')
        setCoverVideos(coverData.data)
        setOriginalVideos(originalData.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (coverVideos.length) setLoading(false)
  }, [coverVideos])

  return (
    <>
      <section className='px-[100px] bg-[#030303] mb-8'>
        <div className='h-22 w-full flex flex-row justify-around items-center'>
          <ArrowLeftIcon className="w-16 h-16 fixed left-24 cursor-pointer hover:scale-125" onClick={() => router.push('/')} />
          <h1 className='font-megrim text-8xl text-[#D9D7D7] mt-[21px]'>MUSICA</h1>
          <div className={`w-[100px] h-[100px] z-10 p-5 hover:p-4 fixed right-24 cursor-pointer shadow-inner-custom rounded-full  hover:grayscale-0 ${showSpotify ? 'grayscale' : 'grayscale-0'}`} onClick={() => setShowSpotify((value) => !value)}>
            <Image src={spotifyLogo} alt='spotify' height={100} width={100} className='container' />
          </div>
          <div className='fixed -right-10 top-20 z-10 mr-10 p-4  max-xl:-z-10   max-xl:mr-auto max-xl:p-14 xl:mt-10' hidden={showSpotify} onMouseLeave={() => setShowSpotify((value) => !value)}>
            <iframe
              className='ease-500 transition-all hover:scale-110 hover:shadow-2xl'
              src='https://open.spotify.com/embed/playlist/1mzf2NhbQTX9o7j9TvieS4?utm_source=generator'
              width='100%'
              height='352'
              frameBorder='0'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
            ></iframe>
          </div>
        </div>
        <div className='flex flex-row w-full gap-5 mt-7'>
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
        <div className="flex flex-row mt-[93px] gap-[63px]">
          {bands.map((band, index) => (
            <div
              key={band.name}
              className={`w-96 h-96 border border-[#BD1717] p-4 hover:scale-110 cursor-pointer ${selectedBand === band.name ? 'scale-110' : null}`}
              onClick={() => setSelectedBand(band.name)}
              ref={el => (logoRefs.current[index] = el)}
              data-name={band.name}
            >
              <Image
                className="container"
                src={band.src}
                alt={band.name}
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
        {selectedBand && (
          <div
            className="absolute"
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            {/* Primer segmento: Vertical desde el div del logo */}
            <div
              className="absolute border-l-[1px] border-[#BD1717]"
              style={{
                top: `${linePosition.startY}px`,
                left: `${linePosition.startX}px`,
                height: `${linePosition.middleY1 - linePosition.startY}px`,
              }}
            ></div>
            {/* Segundo segmento: Horizontal */}
            <div
              className="absolute border-t-[1px] border-[#BD1717]"
              style={{
                top: `${linePosition.middleY1}px`,
                left: `${Math.min(linePosition.middleX1, linePosition.middleX2)}px`,
                width: `${Math.abs(linePosition.middleX1 - linePosition.middleX2)}px`,
              }}
            ></div>
            {/* Tercer segmento: Vertical */}
            <div
              className="absolute border-l-[1px] border-[#BD1717]"
              style={{
                top: `${linePosition.middleY1}px`,
                left: `${linePosition.middleX2}px`,
                height: `${linePosition.endY - linePosition.middleY1}px`,
              }}
            ></div>
          </div>
        )}
        <div
          ref={videosRef}
          className="flex flex-col gap-[142px] mt-[133px] border border-[#BD1717] py-40 px-20"
        >
          {selectedBandVideos.length && selectedBand !== 'Turkos' ? (
            selectedBandVideos.map((video, index) => <MusicCard key={index} video={video} />)
          ) : selectedBand === 'Turkos' ? (
            <p className="text-8xl font-bold font-mina text-white text-center">Proximamente...</p>
          ) : null}
        </div>
        <h2 className='font-megrim text-8xl text-[#D9D7D7] text-center mt-[133px]'>COVERS</h2>
        <div className='flex flex-col gap-[142px] mt-[133px] items-center'>
          {loading ? (
            <div className='loader'></div>
          ) : (
            coverVideos.map((video: any, index: any) => (
              <MusicCard key={index} video={video} />
            ))
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
