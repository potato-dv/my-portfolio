import React from "react";
import { Github, ExternalLink, Star } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group relative border border-theme hover-border-theme">
    {project.featured && (
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-theme-gradient text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
          <Star size={12} />
          <span>Featured</span>
        </div>
      </div>
    )}

    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-theme-primary">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-emerald-600/20 text-theme-primary text-xs rounded-lg border border-theme"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-3">
        <a
          href={project.github}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
        >
          <Github size={16} />
          <span>Code</span>
        </a>
        <a
          href={project.live}
          className="flex items-center space-x-2 px-4 py-2 bg-theme-gradient rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300"
        >
          <ExternalLink size={16} />
          <span>Live</span>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
