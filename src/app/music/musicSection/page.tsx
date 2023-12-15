'use client'

import MusicCard from '@/app/components/MusicCard'
// import { Button } from '@mui/material'
import { useState, useEffect } from 'react'

const MusicSection = ({ sectionName, musicVideos }: any) => {
  const [renderVideos, setRenderVideos] = useState([])

  useEffect(() => {
    if (musicVideos) {
      setRenderVideos(musicVideos.slice(0, 5))
    }
  }, [musicVideos])

  const showMoreButton:boolean = musicVideos ? renderVideos.length < musicVideos.length : false
  const showLessButton:boolean = renderVideos.length > 5

  return (
    <div className='m-4 flex flex-col border-y-2 border-stone-800 p-8 text-center text-white'>
      <div className='m-8'>
        <h2 className='font-palanquin text-4xl font-semibold'>{sectionName}</h2>
      </div>
      <ul className='flex flex-1 flex-col items-center gap-12 p-10'>
        {renderVideos.map((video: any, index: any) => (
          <MusicCard key={index} video={video} />
        ))}
        <p className='italic'>
          Mostrando {renderVideos.length} de {musicVideos.length}
        </p>
      </ul>
      <div className='line-clamp-1 flex flex-1 flex-col items-center'>
        {showMoreButton && (
          <button
            onClick={() => setRenderVideos(musicVideos)}
            className='ease-500 rounded-md bg-red-700 p-3 text-xl transition-all hover:scale-125 hover:shadow-2xl'
          >
            Ver más...
          </button>
        )}
        {showLessButton && (
          <button
            onClick={() => setRenderVideos(musicVideos.slice(0, 5))}
            className='ease-500 rounded-md bg-red-700 p-3 text-xl transition-all hover:scale-125 hover:shadow-2xl'
          >
            Ver menos...
          </button>
        )}
      </div>
    </div>
  )
}

export default MusicSection
