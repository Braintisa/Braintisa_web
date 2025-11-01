import { services } from "@/data/servicesData";
import Reveal from "@/components/Reveal";
import SectionBg from "@/components/SectionBg";
import SectionParticles from "@/components/SectionParticles";

const Services = () => {

  return (
    <section id="services" className="relative overflow-hidden py-20 bg-background">
      <SectionBg />
      <SectionParticles opacity={1} />
      <div className="container mx-auto px-4 section-content">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-clip-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive software development services tailored to your unique business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delayMs={index * 100} className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border group">
              <div className="w-14 h-14 rounded-lg gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
