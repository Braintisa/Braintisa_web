import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {AnimatePresence} from "framer-motion";
import Preloader from "@/components/Preloader.tsx";
import Footer from "@/components/Footer.tsx";
import SectionBg from "@/components/SectionBg.tsx";
import SectionParticles from "@/components/SectionParticles.tsx";
import {projects} from "@/data/projectsData.ts";
import {Button} from "@/components/ui/button.tsx";
import {ExternalLink, Github} from "lucide-react";

interface Project {
    id: string;
    title: string;
    short_description: string;
    description: string;
    tech: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
}

const ProjectView = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [project, setProject] = useState<Project>(null);
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
                    <navbar></navbar>
                    <section className="relative overflow-hidden py-20 gradient-subtle">
                        <SectionBg/>
                        <SectionParticles opacity={1}/>
                        <div className="container mx-auto px-4 section-content">
                            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                                <h2 className="text-4xl md:text-5xl font-bold mb-10">
                                    {project.title}
                                </h2>
                                <div
                                    className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 group">
                                    <div className="relative overflow-hidden h-72">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-muted-foreground mb-4 text-start">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
                                                >{tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            <Button variant="outline-primary" size="sm" className="flex-1" asChild>
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2"/>
                                                    Demo
                                                </a>
                                            </Button>
                                            <Button variant="ghost" size="sm" className="flex-1" asChild>
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-2"/>
                                                    Code
                                                </a>
                                            </Button>
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