import {Button} from "@/components/ui/button";
import {useEffect, useRef} from "react";
import {ArrowRight, Code2, Sparkles} from "lucide-react";
import heroBanner from "../../public/assets/images/hero-banner.jpg";
import {companyInfo} from "@/data/companyData";
import {Link} from "react-scroll";
import {motion} from "framer-motion";

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const mouse = {x: 0, y: 0, active: false};
        let time = 0; // for automatic attractor motion

        const resize = () => {
            const {width, height} = canvas.getBoundingClientRect();
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        };

        // Ensure correct initial size
        resize();
        window.addEventListener("resize", resize);

        // Mouse tracking (attract particles toward cursor)
        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        };
        const onMouseLeave = () => {
            mouse.active = false;
        };
        window.addEventListener("mousemove", onMouseMove, {passive: true});
        window.addEventListener("mouseout", onMouseLeave, {passive: true});
        window.addEventListener("blur", onMouseLeave, {passive: true});

        const particleCount = Math.max(90, Math.min(160, Math.floor(window.innerWidth / 10)));
        const particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number;
            a: number;
            l: number;
            tx?: number;
            ty?: number
        }[] = [];
        const rand = (min: number, max: number) => Math.random() * (max - min) + min;

        const init = () => {
            particles.length = 0;
            const {width, height} = canvas.getBoundingClientRect();
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: rand(0, width),
                    y: rand(0, height),
                    vx: rand(-0.25, 0.25),
                    vy: rand(-0.2, 0.2),
                    r: rand(1.2, 3.2),
                    a: rand(0.35, 0.7),
                    l: rand(47, 59),
                });
            }
        };
        init();

        // Build text targets for an initial "morph into Braintisa" effect
        const buildTextTargets = () => {
            const rect = canvas.getBoundingClientRect();
            const w = Math.floor(rect.width);
            const h = Math.floor(rect.height);
            const off = document.createElement("canvas");
            off.width = w;
            off.height = h;
            const octx = off.getContext("2d");
            if (!octx) return [] as { x: number; y: number }[];

            octx.clearRect(0, 0, w, h);
            const fontSize = Math.max(48, Math.min(180, Math.floor(w * 0.18)));
            octx.fillStyle = "#000";
            octx.textAlign = "center";
            octx.textBaseline = "middle";
            octx.font = `700 ${fontSize}px Inter, ui-sans-serif, system-ui, -apple-system`;
            octx.fillText("Braintisa", w / 2, h / 2);

            const img = octx.getImageData(0, 0, w, h).data;
            const points: { x: number; y: number }[] = [];
            const step = Math.max(4, Math.floor(w / 220));
            for (let y = 0; y < h; y += step) {
                for (let x = 0; x < w; x += step) {
                    const idx = (y * w + x) * 4 + 3; // alpha channel
                    if (img[idx] > 128) {
                        points.push({x, y});
                    }
                }
            }
            return points;
        };

        let forming = true;
        const formingEndAt = performance.now() + 2600;
        const targets = buildTextTargets();
        if (targets.length) {
            // Shuffle particles and assign targets evenly across detected points
            const shuffled = [...particles].sort(() => Math.random() - 0.5);
            for (let i = 0; i < shuffled.length; i++) {
                const t = targets[Math.floor((i / shuffled.length) * targets.length)];
                shuffled[i].tx = t.x;
                shuffled[i].ty = t.y;
            }
        }

        const step = () => {
            const {width, height} = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, width, height);
            time += 0.015;

            // Automatic attractor moves in a smooth Lissajous-like path
            const radius = Math.min(width, height) * 0.34;
            const autoAx = width / 2 + Math.cos(time * 0.9) * radius;
            const autoAy = height / 2 + Math.sin(time * 1.1) * radius;

            for (const p of particles) {
                // Phase 1: form the text
                if (forming && p.tx !== undefined && p.ty !== undefined) {
                    const dx = p.tx - p.x;
                    const dy = p.ty - p.y;
                    const dist = Math.hypot(dx, dy) || 1;
                    const accel = 0.22; // strong pull to target
                    p.vx += (dx / dist) * accel;
                    p.vy += (dy / dist) * accel;
                }
                // Always apply a gentle auto attraction
                {
                    const dx = autoAx - p.x;
                    const dy = autoAy - p.y;
                    const dist = Math.hypot(dx, dy) || 1;
                    const influence = 280;
                    if (dist < influence) {
                        const t = 1 - dist / influence;
                        const accel = 0.06 * t;
                        p.vx += (dx / dist) * accel;
                        p.vy += (dy / dist) * accel;
                    }
                }

                // If mouse is active, add stronger attraction on top
                if (mouse.active) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.hypot(dx, dy) || 1;
                    const influence = 200;
                    if (dist < influence) {
                        const t = 1 - dist / influence;
                        const accel = 0.1 * t;
                        p.vx += (dx / dist) * accel;
                        p.vy += (dy / dist) * accel;
                    }
                }

                p.x += p.vx;
                p.y += p.vy;

                // Velocity damping and clamping for smoothness
                p.vx *= forming ? 0.985 : 0.995;
                p.vy *= forming ? 0.985 : 0.995;
                const maxSpeed = forming ? 2.4 : 1.2;
                if (p.vx > maxSpeed) p.vx = maxSpeed;
                if (p.vx < -maxSpeed) p.vx = -maxSpeed;
                if (p.vy > maxSpeed) p.vy = maxSpeed;
                if (p.vy < -maxSpeed) p.vy = -maxSpeed;

                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;

                // Draw particle in brand yellow with soft alpha
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = `hsla(45, 99%, ${p.l}%, ${p.a})`;
                ctx.shadowColor = `hsla(45, 99%, 53%, 0.25)`;
                ctx.shadowBlur = 8;
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            // Draw connecting lines between nearby particles (limited for performance)
            const maxDistance = forming ? 70 : 110;
            for (let i = 0; i < particles.length; i++) {
                // Only check a small neighborhood to keep it fast
                for (let j = i + 1; j < Math.min(i + 18, particles.length); j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < maxDistance) {
                        const t = 1 - dist / maxDistance;
                        ctx.strokeStyle = `hsla(45, 99%, 53%, ${0.16 * t})`;
                        ctx.lineWidth = 1 * t;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            // End forming phase after deadline
            if (forming && performance.now() > formingEndAt) {
                forming = false;
                for (const p of particles) {
                    delete p.tx;
                    delete p.ty;
                }
            }

            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove as EventListener);
            window.removeEventListener("mouseout", onMouseLeave as EventListener);
            window.removeEventListener("blur", onMouseLeave as EventListener);
        };
    }, []);
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroBanner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // opacity: "0.15",
                }}
            />

            {/* Particles Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full z-[3] pointer-events-none opacity-95"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 gradient-subtle opacity-20 dark:opacity-50 z-[2]"/>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 animate-scale-in">
                        <Sparkles className="w-4 h-4 text-accent"/>
                        <span className="text-sm font-medium">Innovation Meets Excellence</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        {companyInfo.tagline.split('Cutting-Edge Software')[0]}
                        <span className="bg-clip-text">Cutting-Edge Software</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-100 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                        {companyInfo.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            variant="hero"
                            size="lg"
                            className="group"
                            onClick={() => scrollTo('about')}
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollTo('projects')}
                        >
                            <Code2 className="mr-2 h-5 w-5"/>
                            View Our Work
                        </Button>
                    </div>

                    {/* Floating Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
                        {companyInfo.stats.map((stat, index) => (
                            <div
                                key={index}
                                className="glass-effect p-4 rounded-lg animate-scale-in"
                                style={{animationDelay: `${index * 100}ms`}}
                            >
                                <div className="text-3xl font-bold bg-clip-text">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            <motion.div
                className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Link
                    className="w-6 h-10 border-2 border-primary rounded-full flex justify-center cursor-pointer"
                    to="about"
                    smooth={true}
                    offset={-75}
                    duration={500}
                >
                    <motion.div
                        className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
                        animate={{
                            y: [0, 16, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </Link>
            </motion.div>
            </div>
        </section>
    );
};

export default Hero;
