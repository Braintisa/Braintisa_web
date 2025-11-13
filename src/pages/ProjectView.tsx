import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {AnimatePresence} from "framer-motion";
import Preloader from "@/components/Preloader.tsx";
import Footer from "@/components/Footer.tsx";
import SectionBg from "@/components/SectionBg.tsx";
import SectionParticles from "@/components/SectionParticles.tsx";
import {ProjectProp, projects} from "@/data/projectsData.ts";
import {Button} from "@/components/ui/button.tsx";
import {ExternalLink, Github} from "lucide-react";
import {GoCheckCircleFill} from "react-icons/go";
import Navbar from "@/components/Navbar.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, EffectFade } from "swiper/modules";
import {IoLogoGooglePlaystore} from "react-icons/io5";

const ProjectView = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [project, setProject] = useState<ProjectProp>(null);
    const {id} = useParams();

    useEffect(() => {
        const handleLoaded = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }

        if (document.readyState === "complete") {
            setIsLoading(false);
            setProject(projects.filter((project) => project.id === id).pop());
        } else {
            addEventListener("load", handleLoaded);
        }

        return () => {
            document.removeEventListener("load", handleLoaded);
        }
    }, []);

    return (
        <div>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader/>}
            </AnimatePresence>

            {!isLoading &&
                <>
                    <Navbar type={2}/>
                    <section className="relative overflow-hidden py-20 gradient-subtle">
                        <SectionBg/>
                        <SectionParticles opacity={1}/>
                        <div className="container mx-auto px-4 section-content">
                            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                                <h2 className="text-4xl md:text-5xl font-bold mt-10 mb-16">
                                    {project.title}
                                </h2>
                                <div
                                    className="bg-card rounded-lg overflow-hidden shadow-xl">
                                    <div className="relative overflow-hidden h-72 md:h-96">
                                        <Swiper
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            effect={"fade"}
                                            loop={true}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: false,
                                            }}
                                            modules={[Autoplay, EffectFade]}
                                            className="w-full h-full"
                                        >
                                            {project.images.map((slide, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                        src={`.${slide}`}
                                                        alt={`${project.title} screenshot ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <div
                                            className="absolute inset-0 flex items-end">
                                            <div className="bg-gradient-to-t from-card to-transparent opacity-100 z-50 h-[10%] w-full"/>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        {project.description.desc.map((item, idx) => (
                                            <p className="dark:text-gray-300 mb-4 text-start" key={idx}>
                                                {item}
                                            </p>
                                        ))}

                                        {project.description.features.length > 0 &&
                                            <ul className="dark:text-gray-300 text-start mb-4">
                                                <li className="text-black dark:text-white font-medium">Key Features</li>
                                                {project.description.features.map((item, idx) => (
                                                    <li key={idx} className="ml-2 flex items-center gap-x-3 mb-1">
                                                        <GoCheckCircleFill className="text-primary"/>
                                                        <span className="max-w-72 md:max-w-2xl">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        }

                                        {project.description.footer &&
                                            <p className="dark:text-gray-300 mb-4 text-start">
                                                {project.description.footer}
                                            </p>
                                        }

                                        <h3 className="text-black dark:text-white font-medium text-start mb-2">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            {project.demoUrl &&
                                                <Button variant="outline-primary" size="sm" className="flex-1 cursor-pointer" asChild>
                                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4 mr-2"/>
                                                        View Demo
                                                    </a>
                                                </Button>
                                            }
                                            {project.githubUrl &&
                                                <Button variant="ghost" size="sm" className="flex-1 cursor-pointer" asChild>
                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                        <Github className="w-4 h-4 mr-2"/>
                                                        View GitHub Code
                                                    </a>
                                                </Button>
                                            }
                                            {project.playStoreUrl &&
                                                <Button variant="secondary" size="sm" className="flex-1 cursor-pointer" asChild>
                                                    <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                                                        <IoLogoGooglePlaystore className="w-4 h-4 mr-2"/>
                                                        View on Google PlayStore
                                                    </a>
                                                </Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer/>
                </>
            }
        </div>
    );
};

export default ProjectView;