'use client'

import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import MusicSection from './musicSection/page'
import Footer from '../sections/Footer'
import Spotify from '../components/Spotify'
import { fetchVideos } from './musicConstants'
import axios from 'axios'

const Page = () => {
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
      <Nav />
      <div className='m-8 text-center'>
        <h1 className='font-palanquin text-4xl font-semibold text-white'>
          Podés explorar la música en la que he estado trabajando últimamente
        </h1>
      </div>
      <section className='flex flex-col xl:flex-row'>
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
      <Footer />
    </>
  )
}

export default Page
