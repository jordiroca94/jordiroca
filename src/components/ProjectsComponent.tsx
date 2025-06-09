import { ExternalLink, Github } from "lucide-react";

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
    title: "Movie Recommender AI",
    description:
      "A script that uses OpenAI to recommend movies based on user input.",
    githubUrl: "https://github.com/jordiroca94/openai-script",
  },
];

export default function ProjectsComponent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 -my-16 pt-32">
      <div className="max-w-4xl mx-auto px-6 ">
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            Code & Craft
          </h2>
          <section>
            <div className="space-y-8">
              {projects.map((project) => (
                <div key={project.id} className="group">
                  <div className="flex items-start justify-between">
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
                          className="text-gray-400 hover:text-gray-900 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors"
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
