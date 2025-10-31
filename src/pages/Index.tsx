import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {Element} from "react-scroll";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <main>
                <Element name="hero">
                    <Hero/>
                </Element>
                <Element name="about">
                    <About/>
                </Element>
                <Element name="services">
                    <Services/>
                </Element>
                <Element name="projects">
                    <Projects/>
                </Element>
                <Element name="team">
                    <Team/>
                </Element>
                <Element name="testimonials">
                    <Testimonials/>
                </Element>
                <Element name="contact">
                    <Contact/>
                </Element>
            </main>
            <Footer/>
        </div>
    );
};

export default Index;
