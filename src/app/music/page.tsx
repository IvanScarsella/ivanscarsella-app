import Nav from '../components/Nav';
import CoversSection from './musicSections/CoversSection';
import Footer from '../sections/Footer';

const page = () => {
  return (
    <>
      <Nav />
      <section>
        <CoversSection />
      </section>
      <Footer />
    </>
  )
}

export default page