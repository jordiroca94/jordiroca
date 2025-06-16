import { ExternalLink, Github } from "lucide-react";
import TypograhpyH2 from "./ui/TypograhpyH2";

interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Diverbook",
    description: "Fullstack web app to discover and share places for diving.",
    githubUrl: "https://github.com/jordiroca94/diverbook",
    liveUrl: "https://diverbook.vercel.app/",
  },
  {
    id: 2,
    title: "Moviechase",
    description:
      "Fullstack web app to discover movies, tv shows, celebrities and more.",
    githubUrl: "https://github.com/jordiroca94/moviechase",
    liveUrl: "https://moviechase.vercel.app/",
  },
  {
    id: 3,
    title: "Moviechase API",
    description:
      "Rest API to manage favourite movies, watchlist and recommendations through OpenAI. ",
    githubUrl: "https://github.com/jordiroca94/moviechase-api",
    liveUrl: "https://moviechase-api.up.railway.app/routes",
  },

  {
    id: 4,
    title: "Stop All Ansia",
    description: "Music festival website with ticket sales.",
    githubUrl: "https://github.com/jordiroca94/stopallansia",
    liveUrl: "https://stopallansia.vercel.app/",
  },
  {
    id: 5,
    title: "Movie Recommender Script",
    description:
      "A script that uses OpenAI to recommend movies based on user input.",
    githubUrl: "https://github.com/jordiroca94/openai-script",
  },
  {
    id: 6,
    title: "CSV Travel Review Processor",
    description:
      "Script that transforms customer travel reviews into actionable insights using OpenAI.",
    githubUrl: "https://github.com/jordiroca94/csv-processor",
  },
];

export default function ProjectsComponent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 -my-16 pt-32">
      <div className="max-w-4xl mx-auto px-6">
        <section>
          <TypograhpyH2 label="Code & Craft" />
          <section>
            <div className="space-y-2">
              {projects.map((project) => (
                <div>
                  <div className="flex items-start justify-between p-2">
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-medium mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 ml-6">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-1 transform"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-1 transform"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
