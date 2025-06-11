import React from "react";
import { Code, Award, Briefcase } from "lucide-react";

const Skills: React.FC = () => {
  const skills = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "TypeScript", level: 80, color: "bg-blue-600" },
    { name: "Node.js", level: 75, color: "bg-green-500" },
    { name: "Python", level: 70, color: "bg-blue-400" },
    { name: "CSS/Tailwind", level: 85, color: "bg-cyan-500" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-400">React, HTML5, CSS3</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-400">Laravel, Python</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <p className="text-gray-400">Git, Docker, AWS, Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
