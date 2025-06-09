export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Acai Travel",
      period: "Oct 2024 - Present",
      location: "Barcelona, Spain",
      responsibilities: [
        "Developed front-end features using Next.js, Tailwind CSS, and React Query",
        "Created and managed scheduled tasks (CRONs) and webhooks for automation",
        "Maintained and extended backend services and APIs in Go across a modular platform",
        "Designed prompts and integrated LLM API calls for various use cases",
        "Built web scrapers and data extraction workflows with Apify",
      ],
    },
    {
      title: "Front End Developer",
      company: "Dallonses",
      period: "Aug 2022 - Sep 2024",
      location: "Barcelona, Spain",
      responsibilities: [
        "Developed graphical user interfaces and maintained scalable web apps for various clients through Agile methodology",
        "Communicated with the UX/UI and back-end teams to ensure a consistent user experience",
        "Implemented UI components with Next.js and TypeScript, styled with Tailwind",
      ],
    },
    {
      title: "Front End Developer",
      company: "ClowID",
      period: "Mar 2022 - June 2022",
      location: "Sweden (Remote)",
      responsibilities: [
        "Developed statistical modules and profile modules",
        "Implemented UI components with Angular and TypeScript, styled using Tailwind and Angular Material",
        "Tested APIs with Postman and PostgreSQL",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            What have I been up to?
          </h1>
          <div className="w-12 h-px bg-gray-300"></div>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group flex flex-col ">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-xl font-medium text-gray-900 mb-1">
                    {exp.title}
                  </h2>
                  <p className="text-gray-600 font-medium mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3 mt-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-gray-700 leading-relaxed">
                    <span className="inline-block w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
