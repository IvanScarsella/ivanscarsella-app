import Nav from "../components/Nav"
import Contact from "./contactForm/Contact"
import Footer from "../sections/Footer"

const page = () => {
    return (
        <>
            <Nav />
            <div className="flex justify-center p-4">
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default page