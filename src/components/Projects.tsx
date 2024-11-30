import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCodeBranch, FaGithub } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "RoadSpice",
    description:
      "Developed an AI travel planner at UC Berkeley's CalHacks 11.0, using Google Gemini 1.5 and Google Maps API for personalized route and stop recommendations.",
    image: "https://utfs.io/f/QmXsupwvhToEwMarluDIf5tBxsD1qJHNmT4R63y9nc7jzZVS",
    tags: ["React.js", "TypeScript", "Google Maps API", "Gemini 1.5"],
    githubUrl: "https://github.com/RobertGarabetian/RoadSpice",
    liveUrl: "https://roadspice-iota.vercel.app",
  },
  {
    id: 2,
    title: "Cave Explorer",
    description:
      "2D Platformer game created utilizing C#. Unity game engine with tilemaps and external sprite packages.",
    image: "https://utfs.io/f/QmXsupwvhToEvNCsirVHBZkh0nLGJftSsVWMw8zygxlFA7Nu",
    tags: ["C#", "Unity", "TileMaps", "OOP", "Game Design", "External Sprites"],
    githubUrl: "https://github.com/RobertGarabetian/Cave-Explorer",
    liveUrl:
      "https://play.unity.com/en/games/682e26af-005e-4876-8d9b-9acde277b919/cave-explorer",
  },
  {
    id: 3,
    title: "TruckDocs",
    description:
      "Created DOT compliance software to streamline truck drivers' paperwork and compliance, using Next.js, Clerk, and Tailwind CSS for a simplified interface.",
    image: "https://utfs.io/f/QmXsupwvhToEZnAdOMkfGXIz0jp8hOBY2s3RFdwCtgKQDyUf",
    tags: [
      "Next.js",
      "React.js",
      "PostegreSQL",
      "Prisma",
      "API",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/RobertGarabetian/truck-docs-app",
    liveUrl: "https://truck-docs-app.vercel.app/",
  },
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className=" bg-gradient-to-b from-white to-gray-300 text-white p-4 md:px-40">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-200 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="w-6 h-6" />
                  </a>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-orange-500">
                <FaCodeBranch className="w-5 h-5 " />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
