import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
                    <Navbar type={1}/>
                    <Hero/>
                    <About/>
                    <Services/>
                    <Projects/>
                    <Team/>
                    <Testimonials/>
                    <Contact/>
                    <Footer/>
                </>
            }
        </div>

    );
};

export default Index;
