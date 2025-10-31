import { useEffect, useState } from "react";
import { Linkedin, Github, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full w-12 h-12 shadow-md hover:shadow-lg transition-all hover:animate-bounce"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    Services: [
      { label: "Web Development", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Cloud Solutions", href: "#services" },
      { label: "Consulting", href: "#services" },
    ],
    Resources: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#projects" },
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@braintisa.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Brain<span className="text-primary">t</span>isa
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Transforming businesses through innovative software solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Braintisa. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Braintisa technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterWithScrollToTop = () => (
  <>
    <Footer />
    <ScrollToTopButton />
  </>
);

export default FooterWithScrollToTop;
