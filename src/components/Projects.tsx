import {ExternalLink, Github} from "lucide-react";
import {Button} from "@/components/ui/button";
import {projects} from "@/data/projectsData";
import Reveal from "@/components/Reveal";
import SectionBg from "@/components/SectionBg";
import SectionParticles from "@/components/SectionParticles";
import {useMemo, useState} from "react";
import {IoLogoGooglePlaystore} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {MdReadMore} from "react-icons/md";
import {FaDesktop} from "react-icons/fa";
import {FaGlobe, FaRobot} from "react-icons/fa6";
import {HiMiniDevicePhoneMobile} from "react-icons/hi2";

const sortKeys = [
    {
        key: "all",
        name: "All",
    },
    {
        key: "web",
        name: "Web Applications"
    },
    {
        key: "mobile",
        name: "Mobile Applications"
    },
    {
        key: "desktop",
        name: "Desktop Applications"
    },
    {
        key: "iot",
        name: "IOT Projects"
    },
    {
        key: "demo",
        name: "Demo Available"
    },
];

const Projects = () => {
    const navigate = useNavigate();
    const [selectedSortKey, setSelectedSortKey] = useState<string>("all");

    const displayedProjects = useMemo(() => {
        if (selectedSortKey === "all") {
            return projects;
        }

        return projects.filter(
            (project) => project.sortKey === selectedSortKey
        );
    }, [selectedSortKey]);

    return (
        <section id="projects" className="relative overflow-hidden py-20 gradient-subtle">
            <SectionBg/>
            <SectionParticles opacity={1}/>
            <div className="container mx-auto px-4 section-content">
                <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className=" bg-clip-text">Projects</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Explore our portfolio of successful projects that showcase our expertise and innovation
                    </p>
                </div>

                <div className="mb-10 flex flex-wrap justify-center gap-4">
                    {sortKeys.map((sortKey) => (
                        <button
                            key={sortKey.key}
                            className="bg-accent/10 text-accent hover:bg-accent/15 transition-all duration-300 hover:-translate-y-1 px-5 py-0.5 rounded-xl text-sm cursor-pointer"
                            onClick={() => {
                                setSelectedSortKey(sortKey.key);
                            }}
                        >
                            {sortKey.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.slice(0, 5).map((project, index) => (
                        <Reveal key={index} delayMs={index * 100}
                                className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 group">
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold mb-3 flex-1">{project.title}</h3>
                                    {project.sortKey === "web" && <FaGlobe size={18}/>}
                                    {project.sortKey === "mobile" && <HiMiniDevicePhoneMobile size={24}/>}
                                    {project.sortKey === "desktop" && <FaDesktop size={24}/>}
                                    {project.sortKey === "iot" && <FaRobot size={24}/>}
                                </div>
                                <p className="text-muted-foreground mb-4">{project.short_description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
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
                                        <Button variant="outline-primary" size="sm" className="flex-1 cursor-pointer"
                                                asChild>
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2"/>
                                                Demo
                                            </a>
                                        </Button>
                                    }
                                    {project.githubUrl &&
                                        <Button variant="ghost" size="sm" className="flex-1 cursor-pointer" asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2"/>
                                                Code
                                            </a>
                                        </Button>
                                    }
                                    {project.playStoreUrl &&
                                        <Button variant="secondary" size="sm" className="flex-1 cursor-pointer" asChild>
                                            <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                                                <IoLogoGooglePlaystore className="w-4 h-4 mr-2"/>
                                                View
                                            </a>
                                        </Button>
                                    }
                                </div>
                                <div className="flex mt-3">
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="flex-1 cursor-pointer"
                                        onClick={() => {
                                            navigate(`/project/${project.id}`);
                                        }}>
                                        <MdReadMore className="w-4 h-4 mr-2"/>
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
