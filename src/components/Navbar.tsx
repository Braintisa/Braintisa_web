import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Moon, Sun, Menu, X} from "lucide-react";
import {useTheme} from "@/components/ThemeProvider";
import {Link} from "react-scroll";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {theme, setTheme} = useTheme();
    const [isPastHero, setIsPastHero] = useState(false);

    useEffect(() => {
        const hero = document.getElementById("home");
        if (!hero) {
            const onScroll = () => setIsPastHero(window.scrollY > 80);
            onScroll();
            window.addEventListener("scroll", onScroll, {passive: true});
            return () => window.removeEventListener("scroll", onScroll);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsPastHero(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
                rootMargin: "-72px 0px 0px 0px",
            }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const navLinks = [
        // {href: "home", label: "Home"},
        {href: "about", label: "About"},
        {href: "services", label: "Services"},
        {href: "projects", label: "Projects"},
        {href: "team", label: "Team"},
        {href: "testimonials", label: "Testimonials"},
        {href: "contact", label: "Contact"},
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur
      ${isPastHero ? "bg-card/85 border-b border-border shadow-soft" : "bg-card/0 border-b border-transparent shadow-none"}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link
                        to="home"
                        smooth={true}
                        offset={-75}
                        duration={500}
                        className="text-2xl font-bold cursor-pointer">
                        Brain<span className="text-primary">t</span>isa
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="ml-4"
                        >
                            {theme === "light" ? (
                                <Moon className="h-5 w-5"/>
                            ) : (
                                <Sun className="h-5 w-5"/>
                            )}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                        >
                            {theme === "light" ? (
                                <Moon className="h-5 w-5"/>
                            ) : (
                                <Sun className="h-5 w-5"/>
                            )}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6"/>
                            ) : (
                                <Menu className="h-6 w-6"/>
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}
                                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
