const Spotify = () => {
  return (
    <div className='mr-10 p-4 max-xl:-z-10 max-xl:mr-auto  max-xl:p-14'>
      <iframe
        // style="border-radius:12px"
        className='ease-500 transition-all hover:scale-110 hover:shadow-2xl'
        src='https://open.spotify.com/embed/playlist/1mzf2NhbQTX9o7j9TvieS4?utm_source=generator'
        width='100%'
        height='352'
        frameBorder='0'
        // allowfullscreen=""
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </div>
  )
}

export default Spotify
