import { Code2, Smartphone, Cloud, Database, Palette, Shield, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
    features: ["React & Next.js", "Full-Stack Solutions", "Progressive Web Apps"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter Development"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["AWS & Azure", "DevOps & CI/CD", "Microservices"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data pipelines and analytics solutions to unlock business insights.",
    features: ["Big Data", "ETL Pipelines", "Real-time Analytics"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with the user at the center.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: Shield,
    title: "Security & Testing",
    description: "Comprehensive security audits and automated testing for peace of mind.",
    features: ["Penetration Testing", "Automated QA", "Security Compliance"],
  },
];
