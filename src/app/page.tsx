'use client'

import Nav from './components/Nav'
import Footer from './sections/Footer'
import Carousel from './sections/Carousel'
// import Contact from "./contact/contactForm/Contact"
import Principal from './sections/Principal'
import Title from './sections/Title'
import Certificates from './sections/Certificates'
import { url } from 'inspector'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className='relative flex h-full max-sm:h-screen w-full flex-row max-sm:flex-col items-center bg-[#222222]'>
      <h1 className="absolute top-[70px] max-sm:top-10 left-0 right-0 flex items-center justify-center font-outfit text-[64px] max-sm:text-3xl">Iván Scarsella</h1>
      <div className={`music-background-default w-1/2 max-sm:w-full max-sm:h-1/2 flex flex-col items-center ${isHovered ? 'hover:bg-music' : ''}`}>
        <div
          className='h-[330px] w-[330px] max-md:h-[220px] max-md:w-[220px] max-sm:h-[110px] max-sm:w-[110px] rounded-full border border-[#BFBBBB] flex flex-row items-center my-auto cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => router.push('/music')}
        >
          <p className='font-megrim text-[64px] max-md:text-[42px] max-sm:text-2xl mx-auto'>Música</p>
        </div>
      </div>
      <div className={`music-background-default w-1/2 max-sm:w-full max-sm:h-1/2 flex flex-col items-center ${isHovered ? 'hover:bg-programming' : ''}`}>
        <div
          className='h-[330px] w-[330px] max-md:h-[220px] max-md:w-[220px] max-sm:h-[110px] max-sm:w-[110px] rounded-full border border-[#BFBBBB] flex flex-row items-center my-auto cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => router.push('/programming')}
        >
          <p className='font-mina text-[45px] max-md:text-[30px] max-sm:text-sm mx-auto'>Programación</p>
        </div>
      </div>
    </main>
    // <main className='relative z-10'>
    //   <Nav />
    //   <section className='flex justify-center'>
    //     <Title />
    //   </section>
    //   <section className='xl:padding-1 wide:padding-r padding-b'>
    //     <Principal />
    //   </section>
    //   <section>
    //     <Carousel />
    //   </section>
    //   <section className=''>
    //     <Certificates />
    //   </section>
    //   <section>
    //     <Footer />
    //   </section>
    // </main>
  )
}
