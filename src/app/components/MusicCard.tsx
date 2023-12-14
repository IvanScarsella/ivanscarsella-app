import Link from 'next/link'
import Button from '../components/Button'
import YoutubeVideo from './ProgrammingProject'

const MusicCard = ({ video }: any) => {
  return (
    <div className='ease-500 flex w-10/12 flex-row flex-wrap items-center justify-between rounded-3xl border-4 border-neutral-500 bg-opacity-10 bg-gradient-to-r from-black to-red-800 p-4 transition-all hover:scale-110 hover:shadow-2xl max-xl:w-full max-xl:flex-col'>
      <div className='ease-500 ml-24 rounded-3xl bg-gradient-to-l from-black to-red-800 transition-all hover:scale-110 hover:shadow-2xl max-2xl:ml-0'>
        <YoutubeVideo key={video.data} src={video.src.toString()} />
      </div>

      <div className='flex w-1/2 flex-1 flex-col flex-wrap items-center justify-around max-2xl:pt-4'>
        <div className='font-palanquin text-md info-text flex flex-1 flex-col items-center justify-around gap-6 font-medium tracking-wide max-xl:max-w-lg'>
          <h2 className='flex text-xl font-bold max-xl:text-base'>
            {' '}
            Artista: &nbsp;
          </h2>
          <span className='text-4xl font-bold text-slate-100 hover:scale-125 max-xl:text-2xl'>
            {video.data.artist}
          </span>
          <h2 className='flex text-xl font-bold max-xl:text-base'>
            {' '}
            Canción: &nbsp;
          </h2>
          <span className='text-3xl font-bold text-slate-100 hover:scale-125 max-xl:text-2xl'>
            "{video.data.song}"
          </span>
          <h3 className='flex text-center text-xl text-slate-200 max-xl:text-base'>
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
  )
}

export default MusicCard
