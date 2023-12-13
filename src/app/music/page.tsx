import Nav from '../components/Nav';
import MusicSection from './musicSection/page';
import Footer from '../sections/Footer';
import Spotify from '../components/Spotify';
import { coverVideos } from './musicConstants';
import { originalVideos } from './musicConstants';

const Page = () => {
  return (
    <>
      <Nav />
      <div className='m-8 text-center'>
        <h1 className='font-palanquin text-4xl font-semibold text-white'>
          Podés explorar la música en la que he estado trabajando últimamente
        </h1>
      </div>
      <section className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-3/4'>
          <MusicSection sectionName='Covers' musicVideos={coverVideos} />
          <MusicSection
            sectionName='Música Original'
            musicVideos={originalVideos}
          />
        </div>
        <div className='w-full lg:w-1/4'>
          <Spotify />

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
