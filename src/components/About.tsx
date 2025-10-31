import { Target, Lightbulb, Award, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionBg from "@/components/SectionBg";
import SectionParticles from "@/components/SectionParticles";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering solutions that make a real impact on your business success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Constantly exploring new technologies and methodologies to stay ahead of the curve.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every line of code, every design element is crafted with meticulous attention to detail.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We don't just work for you, we work with you as true partners in your success.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 gradient-subtle">
      <SectionBg />
      <SectionParticles opacity={0.28} />
      <div className="container mx-auto px-4 section-content">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className=" bg-clip-text ">Braintisa</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded on the principles of innovation and excellence, Braintisa is a leading software 
            development company dedicated to transforming businesses through technology. Our team of 
            expert developers, designers, and strategists work together to create solutions that 
            not only meet but exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Reveal key={index} delayMs={index * 100} className="glass-effect p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
