import Nav from "./components/Nav"
import Footer from "./sections/Footer"
import Carousel from "./sections/Carousel"
import Contact from "./sections/Contact"
import Principal from "./sections/Principal"

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Principal />
      </section>
      <section>
        <Carousel />
      </section>
      <section className="flex justify-center">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}
