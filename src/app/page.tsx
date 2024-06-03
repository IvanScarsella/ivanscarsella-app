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
    <main className='relative flex h-full w-full flex-row items-center'>
      <h1 className="absolute top-[70px] left-0 right-0 flex items-center justify-center font-outfit text-[64px]">Iván Scarsella</h1>
      <div className={`music-background-default flex flex-col items-center ${isHovered ? 'hover:bg-music' : ''}`}>
        <div
          className='h-[330px] w-[330px] rounded-full border border-[#BFBBBB] flex flex-row items-center my-auto cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => router.push('/music')}
        >
          <p className='font-megrim text-[64px] mx-auto'>Música</p>
        </div>
      </div>
      <div className={`music-background-default flex flex-col items-center ${isHovered ? 'hover:bg-programming' : ''}`}>
        <div
          className='h-[330px] w-[330px] rounded-full border border-[#BFBBBB] flex flex-row items-center my-auto cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => router.push('/programming')}
        >
          <p className='font-mina text-[45px] mx-auto'>Programación</p>
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
