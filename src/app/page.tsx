import Nav from "./components/Nav"
import Footer from "./sections/Footer"
import Carousel from "./sections/Carousel"
import Contact from "./sections/Contact"
import Principal from "./sections/Principal"

export default function Home() {
  return (
    <main className="bg-slate-200 dark:bg-slate-700">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
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
