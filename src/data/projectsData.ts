export interface ProjectProp {
    id: string;
    title: string;
    short_description: string;
    description: {
        desc: string[];
        features: string[];
        footer?: string;
    };
    tech: string[];
    images: string[];
    demoUrl?: string;
    githubUrl?: string;
    playStoreUrl?: string;
    sortKey: "web" | "mobile" | "desktop" | "iot" | "demo"
}

export const projects: ProjectProp[] = [
    {
        id: "project-01-q-free-client",
        title: "Q-Free",
        short_description: "A smart token and queue management app that helps customers book, track, and manage queues without waiting in line.",
        description: {
            desc: [
                "Q-Free is a smart and efficient token management solution designed to eliminate long queues and unnecessary waiting. With Q-Free, customers can join queues remotely, track their live token progress, and receive real-time notifications—allowing them to arrive only when it’s their turn.",
                "The app provides a smooth, convenient, and stress-free experience for customers who want to save time and avoid crowded waiting areas. Whether you're visiting banks, clinics, government offices, or any busy service center, Q-Free ensures a faster and more organized service experience.",
            ],
            features: [
                "Join Queues Remotely - Get a token without physically being there.",
                "Real-Time Updates - Track token progress live.",
                "Smart Notifications - Get alerts when your turn is near.",
                "Time-Saving Experience - Avoid long waits and crowded spaces."
            ],
            footer: "Q-Free makes queueing simple, contactless, and efficient for everyone."
        },
        tech: ["Android", "Firebase"],
        images: [
            "./assets/images/projects/q-free-client-img-1.jpg",
            "./assets/images/projects/q-free-client-img-2.jpg"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=lk.qfree.customer",
        sortKey: "mobile",
    },
    {
        id: "project-02-q-free-service",
        title: "Q-Free Service",
        short_description: "A simple and powerful queue management app for service providers to create tokens, manage queues, and control service availability.",
        description: {
            desc: [
                "Q-Free Service is a powerful queue management solution designed exclusively for service providers. The app helps businesses efficiently manage customer flow by generating tokens, calling the next customer, and controlling service availability at any time.",
                "With an easy-to-use interface, Q-Free Service helps reduce congestion, streamline operations, and deliver a smooth, organized service experience. It’s the perfect tool for businesses that handle daily queues and want to improve service efficiency."
            ],
            features: [
                "Token Generation - Create and assign queue tokens instantly.",
                "Next Token Control - Move through the queue with a single tap.",
                "Service Control - Open or close your service when needed.",
                "Improved Customer Flow - Reduce waiting times and manage queues better."
            ],
            footer: "Ideal for banks, clinics, salons, government offices, and any service center that manages customer queues."
        },
        tech: ["Android", "Firebase"],
        images: [
            "./assets/images/projects/q-free-service-img-1.jpg",
            "./assets/images/projects/q-free-service-img-2.jpg"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=lk.qfree.service",
        sortKey: "mobile",
    },
    {
        id: "project-03-mirror-wall",
        title: "Mirror Wall",
        short_description: "Social Walls is a dynamic micro-community platform that empowers users to create and join focused digital 'walls' for specific locations, events, or groups, enabling authentic, real-time sharing of stories, memories, and feedback.",
        description: {
            desc: [
                "Social Walls introduces a revolutionary way to experience social interaction by creating context-specific digital communities. Instead of relying on generic social feeds, Social Walls focuses on building meaningful connections centered around a specific place, event, or interest.",
                "With Social Walls, users can join or create interactive “Walls” that bring people together within shared contexts—whether it’s an exclusive event, a business location, or a popular public space. Each wall offers a dynamic and relevant environment for users to share content, express ideas, and engage with others who truly belong to that community."
            ],
            features: [
                "Private Walls - Create exclusive, password-protected event spaces.",
                "Public Walls - Build open community walls for places or brands.",
                "Location Based Discovery - Find walls near you or by interest.",
                "Categorized Posts - Share stories, lyrics, memories, and thoughts.",
                "Focused Engagement - Connect through meaningful, context-driven content."
            ],
            footer: "Social Walls is the perfect solution for event organizers, businesses, and local communities seeking to build genuine, high-quality interactions within a defined and engaging social space."
        },
        tech: ["Next.JS", "Tailwind CSS", "Chakra UI", "Prisma"],
        images: [
            "./assets/images/projects/mirror-wall-img-1.jpg"
        ],
        sortKey: "web",
    },
];
