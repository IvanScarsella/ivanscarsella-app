import Nav from "./components/Nav"
import Footer from "./sections/Footer"
import Carousel from "./sections/Carousel"
import Contact from "./sections/Contact"
import Principal from "./sections/Principal"

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Principal />
      </section>
      <section>
        <Carousel />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}
