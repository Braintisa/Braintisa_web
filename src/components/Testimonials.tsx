import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonialsData";
import Reveal from "@/components/Reveal";
import SectionBg from "@/components/SectionBg";
import SectionParticles from "@/components/SectionParticles";

const Testimonials = () => {

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 gradient-subtle">
      <SectionBg />
      <SectionParticles opacity={1} />
      <div className="container mx-auto px-4 section-content">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className=" bg-clip-text">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delayMs={index * 100} className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic">{testimonial.content}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
