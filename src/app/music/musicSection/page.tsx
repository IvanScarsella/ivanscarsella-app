'use client'

import MusicCard from '@/app/components/MusicCard';
import { Button } from '@mui/material';
import { useState } from 'react';

const MusicSection = ({ sectionName, musicVideos }: any) => {
  const [renderVideos, setRenderVideos] = useState(musicVideos.slice(0, 5));

  const showMoreButton = renderVideos.length < musicVideos.length;
  const showLessButton = renderVideos.length > 5;

  return (
    <div className='m-4 flex flex-col border-y-2 border-stone-800 p-8 text-center text-white'>
      <div className='m-8'>
        <h2 className='font-palanquin text-4xl font-semibold'>
          {sectionName}
        </h2>
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
          <Button
            onClick={() => setRenderVideos(musicVideos)}
            className='ease-500 w-1/12 max-w-full overflow-hidden text-ellipsis whitespace-nowrap border-4 border-neutral-500 bg-gray-900 p-2 text-slate-100 transition-all hover:scale-125 hover:bg-gray-700 hover:text-white'
          >
            Ver más...
          </Button>
        )}
        {showLessButton && (
          <Button
            onClick={() => setRenderVideos(musicVideos.slice(0, 5))}
            className='ease-500 w-1/12 max-w-full overflow-hidden text-ellipsis whitespace-nowrap bg-gray-900 p-2 text-slate-100  transition-all hover:scale-125'
          >
            Ver menos...
          </Button>
        )}
      </div>
    </div>
  );
};

export default MusicSection;
