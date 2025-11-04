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
import {AnimatePresence} from "framer-motion";
import Preloader from "@/components/Preloader.tsx";
import {useEffect, useState} from "react";

const Index = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const handleLoaded = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }

        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            addEventListener("load", handleLoaded);
        }

        return () => {
            document.removeEventListener("load", handleLoaded);
        }
    }, []);

    return (
        <div className="min-h-screen">
            <AnimatePresence mode="wait">
                {isLoading && <Preloader/>}
            </AnimatePresence>

            {!isLoading &&
                <>
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
                </>
            }
        </div>

    );
};

export default Index;
