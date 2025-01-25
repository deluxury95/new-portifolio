import {
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiDjango,
  SiFirebase,
  SiFlask,
  SiGraphql,
  SiJquery,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import React from "react";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 />, level: "Expert", color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, level: "Expert", color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, level: "Intermediate", color: "text-yellow-500" },
  { name: "React", icon: <FaReact />, level: "Intermediate", color: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, level: "Intermediate", color: "text-green-500" },
  { name: "Python", icon: <FaPython />, level: "Intermediate", color: "text-blue-600" },
  { name: "Java", icon: <FaJava />, level: "Beginner", color: "text-red-500" },
  { name: "PHP", icon: <FaPhp />, level: "Beginner", color: "text-indigo-500" },
  { name: "Git", icon: <FaGitAlt />, level: "Expert", color: "text-orange-400" },
  { name: "AWS", icon: <FaAws />, level: "Beginner", color: "text-yellow-600" },
  { name: "Docker", icon: <FaDocker />, level: "Intermediate", color: "text-blue-400" },
  { name: "Database Management", icon: <FaDatabase />, level: "Intermediate", color: "text-green-600" },
  { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate", color: "text-green-500" },
  { name: "Redux", icon: <SiRedux />, level: "Intermediate", color: "text-purple-500" },
  { name: "GraphQL", icon: <SiGraphql />, level: "Beginner", color: "text-pink-500" },
  { name: "Firebase", icon: <SiFirebase />, level: "Intermediate", color: "text-yellow-400" },
  { name: "Kubernetes", icon: <SiKubernetes />, level: "Beginner", color: "text-blue-700" },
  { name: "TypeScript", icon: <SiTypescript />, level: "Intermediate", color: "text-blue-500" },
  { name: "Next.js", icon: <SiNextdotjs />, level: "Intermediate", color: "text-gray-900" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Expert", color: "text-teal-400" },
  { name: "jQuery", icon: <SiJquery />, level: "Intermediate", color: "text-blue-300" },
  { name: "Django", icon: <SiDjango />, level: "Beginner", color: "text-green-700" },
  { name: "Flask", icon: <SiFlask />, level: "Beginner", color: "text-gray-700" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 decoration-fuchsia-300 motion-preset-fade`"
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdV7f5iJVfN3gI5qhCkIeOWIZ9lSjHglXFg&s')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto text-center relative">
        {/* Optional: Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          {/* Spinning Animated Text - Top */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 animate-spin-slow">
              Mastering the Art of Programming
            </h2>
          </div>

          {/* Skills Grid */}
          <h2 className="text-3xl font-bold text-gray-800 relative z-10">Skills</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 relative z-10"
              >
                <div className={`text-5xl ${skill.color} transition-transform duration-300 transform hover:scale-110`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <span className="text-sm font-medium px-2 py-1 rounded bg-blue-100 text-blue-600">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Spinning Animated Text - Bottom */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-100 animate-spin-slow">
              Constantly Evolving & Learning New Skills
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
