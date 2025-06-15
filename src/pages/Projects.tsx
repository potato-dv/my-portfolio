import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      tech: ["Vue.js", "OpenWeather API", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat app with Socket.io and Express",
      tech: ["Socket.io", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Expense Tracker",
      description: "Personal finance management with data visualization",
      tech: ["React", "Chart.js", "LocalStorage"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black/80">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
