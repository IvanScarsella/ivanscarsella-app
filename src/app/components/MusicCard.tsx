'use client'

import Link from 'next/link'
import { Button } from '@mui/material'
import { red } from '@mui/material/colors'
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
        <div className='flex flex-row h-[351px] w-[1059px] border-2 border-[#D3CFCF] rounded-2xl'>
          <div className='ease-500  rounded-3xl transition-all  '>
            <iframe
              width={624}
              height={347}
              src={video.src}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              className='mb-4 rounded-l-2xl max-xl:w-full'
              allowFullScreen
            ></iframe>
          </div>
          <div className='flex flex-col items-center my-5 mx-auto'>
            <p className='font-mina text-[40px]'>Artista:</p>
            <p className='font-mina text-[50px] font-bold'>{video.data.artist}</p>
            <p className='font-mina text-[40px]'>Canción:</p>
            <p className='font-mina text-[40px] font-bold'>"{video.data.song}"</p>
            <a target='_blank'
              href='https://www.youtube.com/channel/UC7kHGbpDf0goDHH7cQfF92A?sub_confirmation=1'>
              <button
                color='primary'
                style={{ backgroundColor: '#F1EDED', color: '#242323', fontSize: 30, fontWeight: 'bold', }}
                className='ease-500 transition-all hover:scale-125 mt-5, rounded-full px-7 py-0.5'
              >
                Suscribirse
              </button>
            </a>
          </div>
        </div>
        // <div className='ease-500 flex w-10/12 flex-row flex-wrap items-center justify-between rounded-3xl border-4 border-black bg-opacity-10 bg-gradient-to-r from-red-800 to-white p-4 transition-all hover:scale-110 hover:shadow-2xl dark:border-neutral-500 dark:from-black dark:to-red-800 max-xl:w-full max-xl:flex-col'>
        //   <div className='ease-500 ml-24 rounded-3xl bg-gradient-to-l from-red-800 to-white transition-all hover:scale-110 hover:shadow-2xl dark:from-black dark:to-red-800 max-2xl:ml-0 max-xl:w-10/12'>
        //     <YoutubeVideo key={video.data} src={video.src.toString()} />
        //   </div>

        //   <div className='flex w-1/2 flex-1 flex-col flex-wrap items-center justify-around max-2xl:pt-4'>
        //     <div className='font-palanquin text-md info-text flex flex-1 flex-col items-center justify-around gap-6 font-medium tracking-wide max-xl:max-w-lg'>
        //       <h2 className='flex text-xl font-bold max-xl:text-base'>
        //         {' '}
        //         Artista: &nbsp;
        //       </h2>
        //       <span className='text-4xl font-bold text-black hover:scale-125 dark:text-slate-100 max-xl:text-2xl'>
        //         {video.data.artist}
        //       </span>
        //       <h2 className='flex text-xl font-bold max-xl:text-base'>
        //         {' '}
        //         Canción: &nbsp;
        //       </h2>
        //       <span className='text-3xl font-bold text-black hover:scale-125 dark:text-slate-100 max-xl:text-2xl'>
        //         "{video.data.song}"
        //       </span>
        //       <h3 className='flex text-center text-xl text-black dark:text-slate-200 max-xl:text-base'>
        //         {video.data.genre}
        //       </h3>
        //       <Button
        //         text='Ver en YouTube'
        //         href={video.data.link}
        //         target='_blank'
        //       />
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  )
}

export default MusicCard
