import Nav from '../components/Nav'
import ProjectsSection from './programmingSections/ProjectsSection'
import Footer from '../sections/Footer'

const page = () => {
  return (
    <>
      <Nav />
      <section>
        <ProjectsSection />
      </section>
      <Footer />
    </>
  )
}

export default page
