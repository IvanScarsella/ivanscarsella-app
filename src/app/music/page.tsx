import Nav from '../components/Nav';
import CoversSection from './musicSections/CoversSection';
import Footer from '../sections/Footer';
import Spotify from '../components/Spotify';

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
        <CoversSection />
        </div>
        <Spotify />
      </section>
      <Footer />
    </>
  )
}

export default page