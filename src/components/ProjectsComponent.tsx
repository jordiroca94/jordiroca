"use client";

import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import TypograhpyH1 from "./ui/TypographyH1";
import { useTranslation } from "react-i18next";

interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectsComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const projects = t("projects", {
    returnObjects: true,
  }) as Project[];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 md:-my-16 md:pt-32 md:min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-6 md:py-0">
        <section>
          <div
            className={`transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <TypograhpyH1 label="Code & Craft" />
          </div>
          <section className="space-y-2 mt-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-12"
                }`}
                style={{
                  transitionDelay: `${(index + 1) * 150}ms`,
                }}
              >
                <div className="flex items-start justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                  <div className="flex-1">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
          </section>
        </section>
      </div>
    </div>
  );
}
