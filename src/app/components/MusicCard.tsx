'use client'

import Link from 'next/link'
import Button from '../components/Button'
import YoutubeVideo from './YoutubeVideo'
import { useState, useEffect } from 'react'
const MusicCard = ({ video }: any) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (video && Object.keys(video).length > 0) {
      setLoading(false)
    }
  }, [video])

  return (
    <>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <div className='ease-500 flex w-10/12 flex-row flex-wrap items-center justify-between rounded-3xl border-4 border-black bg-opacity-10 bg-gradient-to-r from-red-800 to-white p-4 transition-all hover:scale-110 hover:shadow-2xl dark:border-neutral-500 dark:from-black dark:to-red-800 max-xl:w-full max-xl:flex-col'>
          <div className='ease-500 ml-24 rounded-3xl bg-gradient-to-l from-red-800 to-white transition-all hover:scale-110 hover:shadow-2xl dark:from-black dark:to-red-800 max-2xl:ml-0 max-xl:w-10/12'>
            <YoutubeVideo key={video.data} src={video.src.toString()} />
          </div>

          <div className='flex w-1/2 flex-1 flex-col flex-wrap items-center justify-around max-2xl:pt-4'>
            <div className='font-palanquin text-md info-text flex flex-1 flex-col items-center justify-around gap-6 font-medium tracking-wide max-xl:max-w-lg'>
              <h2 className='flex text-xl font-bold max-xl:text-base'>
                {' '}
                Artista: &nbsp;
              </h2>
              <span className='text-4xl font-bold text-black hover:scale-125 dark:text-slate-100 max-xl:text-2xl'>
                {video.data.artist}
              </span>
              <h2 className='flex text-xl font-bold max-xl:text-base'>
                {' '}
                Canción: &nbsp;
              </h2>
              <span className='text-3xl font-bold text-black hover:scale-125 dark:text-slate-100 max-xl:text-2xl'>
                "{video.data.song}"
              </span>
              <h3 className='flex text-center text-xl text-black dark:text-slate-200 max-xl:text-base'>
                {video.data.genre}
              </h3>
              <Button
                text='Ver en YouTube'
                href={video.data.link}
                target='_blank'
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MusicCard
