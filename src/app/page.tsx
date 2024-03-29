import Nav from './components/Nav'
import Footer from './sections/Footer'
import Carousel from './sections/Carousel'
// import Contact from "./contact/contactForm/Contact"
import Principal from './sections/Principal'
import Title from './sections/Title'
import Certificates from './sections/Certificates'

export default function Home() {
  return (
    <main className='relative z-10'>
      <Nav />
      <section className='flex justify-center'>
        <Title />
      </section>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Principal />
      </section>
      <section>
        <Carousel />
      </section>
      <section className=''>
        <Certificates />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}
