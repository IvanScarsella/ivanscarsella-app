'use client'

import Link from 'next/link'
import Button from '../components/Button'
import YoutubeVideo from './ProgrammingProject'

const MusicCard = ({ video }: any) => {
  return (
    <div className='ease-500 flex w-10/12 flex-row items-center justify-between rounded-3xl border-4 border-neutral-500 bg-slate-300 bg-opacity-10 p-4 transition-all hover:scale-110 hover:shadow-2xl'>
      <div className=' ease-500 ml-36 rounded-3xl bg-cyan-950 bg-opacity-10 transition-all hover:scale-110 hover:shadow-2xl'>
        <YoutubeVideo key={video.data} src={video.src.toString()} />
      </div>

      <div className='flex w-1/2 flex-1 flex-col flex-wrap items-center  justify-around'>
        <div className='font-palanquin text-md info-text flex flex-1 flex-col items-center justify-around gap-6 font-medium tracking-wide lg:max-w-lg'>
          <h2 className='flex text-xl font-bold'> Artista: &nbsp;</h2>
          <span className='text-4xl font-bold text-slate-400'>
            {' '}
            {video.data.artist}
          </span>
          <h2 className='flex text-xl font-bold'> Canción: &nbsp;</h2>
          <span className='text-3xl font-bold text-slate-400'>
            {' '}
            "{video.data.song}"
          </span>
          <h3 className='flex text-center text-xl'>{video.data.genre}</h3>
          {/* <Link href={video.data.link} target="_blank"> */}
          <Button
            text='Ver en YouTube'
            href={video.data.link}
            target='_blank'
          />
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default MusicCard
