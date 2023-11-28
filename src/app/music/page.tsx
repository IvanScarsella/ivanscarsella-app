import Nav from '../components/Nav';
import MusicSection from './musicSection/page';
import Footer from '../sections/Footer';
import Spotify from '../components/Spotify';
import { coverVideos } from './musicConstants';
import { originalVideos } from './musicConstants';


const page = () => {
  return (
    <>
      <Nav />
      <div className="m-8 text-center">
        <h1 className="text-4xl font-palanquin font-semibold">Podés explorar la música en la que he estado trabajando últimamente</h1>
      </div>
      {/* <section>
        <OriginalSection />
      </section> */}
      <section className='flex flex-row'>
        <div className='w-9/12'>
          <MusicSection
            sectionName="Covers"
            musicVideos={coverVideos}
          />
          <MusicSection
            sectionName="Música Original"
            musicVideos={originalVideos}
          />
        </div>
        <Spotify />
      </section>
      <Footer />
    </>
  )
}

export default page