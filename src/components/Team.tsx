import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, Github, Mail } from "lucide-react";
import { teamMembers } from "@/data/teamData";
import Reveal from "@/components/Reveal";
import SectionBg from "@/components/SectionBg";
import SectionParticles from "@/components/SectionParticles";

const Team = () => {

  return (
    <section id="team" className="relative overflow-hidden py-20 bg-background">
      <SectionBg />
      <SectionParticles opacity={0.2} />
      <div className="container mx-auto px-4 section-content">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className=" bg-clip-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Talented professionals dedicated to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Reveal key={index} delayMs={index * 100} className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="relative overflow-hidden h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button variant="secondary" size="icon" className="shadow-medium">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="shadow-medium">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="shadow-medium">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Portfolio
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
