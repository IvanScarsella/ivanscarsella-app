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
import cross from '../../../public/cross.png'
import MusicCard from '../components/MusicCard'
import { MdClose } from 'react-icons/md'

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
    { src: imagen3, alt: 'imagen' },
    { src: imagen2, alt: 'imagen' },
  ]

  const bands = [
    { src: logoturkos, name: 'Turkos' },
    { src: logof20, name: 'F20' },
    { src: logom28, name: 'M28' },
  ]

  const [coverVideos, setCoverVideos] = useState([])
  const [renderCoverVideos, setRenderCoverVideos] = useState([])
  const [originalVideos, setOriginalVideos] = useState([])
  const [selectedBand, setSelectedBand] = useState('')
  const [selectedBandVideos, setSelectedBandVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [linePosition, setLinePosition] = useState({ startX: 0, startY: 0, middleX1: 0, middleY1: 0, middleX2: 0, middleY2: 0, endX: 0, endY: 0 });
  const logoRefs = useRef<any>([]);
  const videosRef = useRef<any>(null);
  const [showSpotify, setShowSpotify] = useState(false)

  const showMoreButton: boolean = coverVideos
    ? renderCoverVideos.length < coverVideos.length
    : false
  const showLessButton: boolean = renderCoverVideos.length > 5

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
        setRenderCoverVideos(coverData.data.slice(0, 5))
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
      <section className='px-[100px] max-xl:px-4 bg-[#030303] '>
        <div className='h-22 w-full flex flex-row justify-around items-center pt-5'>
          <ArrowLeftIcon className="w-16 max-sm:w-10 max-lg:w-14 h-16 max-sm:h-10 max-lg:h-14 absolute left-20 max-sm:left-8 max-lg:left-14 cursor-pointer hover:scale-125 ease-500 transition-all" onClick={() => router.push('/')} />
          <h1 className='font-megrim text-8xl max-xl:text-6xl max-sm:text-4xl text-[#D9D7D7] '>MUSICA</h1>
          <div className={`w-[100px] h-[100px] max-xl:scale-[.7] max-sm:scale-[.6] z-10 p-5 hover:p-4 fixed right-24 max-sm:right-4 max-lg:right-14 cursor-pointer  rounded-full  hover:grayscale-0 ease-500 transition-all ${showSpotify ? 'grayscale shadow-inner-custom' : 'grayscale-0 shadow-inner-custom-2'}`} onClick={() => setShowSpotify((value) => !value)} title='Mostrar/ocultar Lista de Spotify'>
            {showSpotify ?
              <Image src={spotifyLogo} alt='spotify' height={100} width={100} className='container' />
              : <Image src={cross} alt='spotify' height={100} width={100} className='container' />
            }
          </div>
          <div className='fixed -right-10 top-20 z-10 mr-10 p-4   max-xl:mr-auto max-xl:p-14 xl:mt-10' hidden={showSpotify === true} onMouseLeave={() => setShowSpotify((value) => !value)}>
            <iframe
              className='ease-500 transition-all hover:scale-110 hover:shadow-2xl z-20'
              src='https://open.spotify.com/embed/playlist/1mzf2NhbQTX9o7j9TvieS4?utm_source=generator'
              width='100%'
              height='352'
              frameBorder='0'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
            ></iframe>
          </div>
        </div>
        <div className='flex flex-row max-lg:flex-col-reverse w-full gap-5 mt-7'>
          <Carousel

            {...settings}
            className='w-1/2 max-lg:w-full'
          >
            {images.map((image, index) => (
              <div className='w-full h-[331px] max-sm:h-60'>
                <Image src={image.src} alt={image.alt} width={1500} height={1000} className='container w-full h-[331px] max-sm:h-60' />
              </div>
            ))}
          </Carousel>
          <p className='w-1/2 max-lg:w-full text-[29px] max-xl:text-2xl max-sm:text-lg text-justify font-mina tracking-tight'>
            Soy Licenciado y Profesor de Música con orientación en Música Popular, graduado de la Universidad Nacional de La Plata. Como baterista y pianista he participado en varios proyectos en donde he aprendido a desenvolverme en varios géneros musicales como el Rock, Metal, Pop, Música Latinoamericana, etc.
          </p>
        </div>
        <div className="flex flex-row max-md:hidden justify-around items-center mt-[93px] max-md:mt-12 gap-[63px] max-xl:gap-14 max-lg:gap-10 p-10 max-md:px-40 max-sm:px-12">
          {bands.map((band, index) => (
            <div
              key={band.name}
              className={`w-96 h-auto max-md:w-full max-md:h-72  border border-[#BD1717] p-4 max-md:p-2 hover:scale-110 cursor-pointer ${selectedBand === band.name ? 'scale-[1.1] shadow-lg shadow-[#BD1717aa]' : null} ease-500 transition-all`}
              onClick={() => setSelectedBand(band.name)}
              ref={el => (logoRefs.current[index] = el)}
              data-name={band.name}
              title={band.name}
            >
              <Image
                className="container max-md:max-w-full max-md:h-72 max-md:max-h-full my-auto"
                src={band.src}
                alt={band.name}
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
        <Carousel className='md:hidden mt-10 max-sm:px-20 max-[580px]:px-5'>
          {bands.map((band, index) => (
            <div
              key={band.name}
              className={`w-60 h-auto max-md:w-full max-md:h-72   p-8 max-md:p-4  hover:scale-110 cursor-pointer ${selectedBand === band.name ? '' : null} ease-500 transition-all mx-auto px-2`}
              onClick={() => setSelectedBand(band.name)}
              title={band.name}
            >
              <Image
                className={`container max-md:max-w-full max-md:h-72 max-md:max-h-full my-auto ${selectedBand === band.name ? 'scale-[1.1] bg-[#BD1717] bg-opacity-40' : null} p-4`}
                src={band.src}
                alt={band.name}
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </Carousel>
        {selectedBand && (
          <div
            className="absolute max-md:hidden"
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            <div
              className="absolute border-l-[1px] border-[#BD1717]"
              style={{
                top: `${linePosition.startY}px`,
                left: `${linePosition.startX}px`,
                height: `${linePosition.middleY1 - linePosition.startY}px`,
              }}
            ></div>
            <div
              className="absolute border-t-[1px] border-[#BD1717]"
              style={{
                top: `${linePosition.middleY1}px`,
                left: `${Math.min(linePosition.middleX1, linePosition.middleX2)}px`,
                width: `${Math.abs(linePosition.middleX1 - linePosition.middleX2)}px`,
              }}
            ></div>
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
          className="flex flex-col items-center gap-[142px] mt-[133px] max-md:mt-10 border border-[#BD1717] py-40 max-md:py-20 max-sm:py-8 px-20 max-md:px-10 max-sm:px-4"
        >
          {selectedBandVideos.length ? (
            selectedBandVideos.map((video, index) => <MusicCard key={index} video={video} />)
          ) : null}
        </div>
        <h2 className='font-megrim text-8xl text-[#D9D7D7] text-center mt-[133px]'>COVERS</h2>
        <div className='flex flex-col gap-28 mt-[133px] items-center'>
          {loading ? (
            <div className='loader'></div>
          ) : (
            renderCoverVideos.map((video: any, index: any) => (
              <MusicCard key={index} video={video} />
            ))
          )}
        </div>
        <div className='line-clamp-1 flex flex-1 flex-col items-center w-full my-8'>
          {showMoreButton && (
            <button
              onClick={() => setRenderCoverVideos(coverVideos)}
              className='ease-500 rounded-full bg-[#F1EDED] p-3 font-bold text-xl text-[#242323] transition-all hover:scale-110 hover:shadow-2xl  hover:rounded-full max-h-[52px]'
            >
              Ver más...
            </button>
          )}
          {showLessButton && (
            <button
              onClick={() => setRenderCoverVideos(coverVideos.slice(0, 5))}
              className='ease-500 rounded-full bg-[#F1EDED] p-3 font-bold text-xl text-[#242323] transition-all hover:scale-110 hover:shadow-2xl  hover:rounded-full max-h-[52px]'
            >
              Ver menos...
            </button>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page
