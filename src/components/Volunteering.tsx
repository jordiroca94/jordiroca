import { useEffect, useState } from "react";
import TypograhpyH1 from "./ui/TypographyH1";
import LinkAnimation from "./LinkAnimation";

type VolunteeringExperience = {
  id: number;
  role: string;
  organization: string;
  organizationUrl: string;
  description: string;
  readMoreUrl: string;
};

const volunteeringExperiences: VolunteeringExperience[] = [
  {
    id: 1,
    role: "Restaurant Manager",
    organization: "Project Armonia",
    organizationUrl: "https://www.projectarmonia.org/",
    description:
      "Manager of a social restaurant for vulnerable people living in the refugee camp of Samos, Greece",

    readMoreUrl: "https://www.instagram.com/p/CDUYNX2j7V_/?img_index=1",
  },
  {
    id: 2,
    role: "Logistics Manager",
    organization: "Still I Rise NGO",
    organizationUrl: "https://stillirisengo.org/",
    description:
      "Logistics Manager of a non-formal school to provide education for unaccompanied minors living in the refugee camp of Samos, Greece",

    readMoreUrl: "https://www.instagram.com/p/CL6tC_gjJXR/",
  },
];
export default function Volunteering() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="max-w-4xl mx-auto min-h-screen p-6 space-y-8 -my-16 pt-32">
      <div
        className={`transition-all duration-800 ease-out ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <TypograhpyH1 label="Involved with Human Rights" />
      </div>
      <p
        className={`transition-all duration-800 ease-out ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        On 2020 I was volunteering for a year in Greece involved with the
        refugee crisis in Europe. Few weeks before covid pandemic started I
        moved to Samos, a small island in Greece 2km far from Turkey, the second
        island with the biggest refugee camp in Europe. With a refugee camp
        holding over 8.000 asylum seekers I started volunteering as a restaurant
        manager on a free restaurant for vulnerable people called Project
        Armonia. After 6 months, I started volunteering in Still I Rise, a non
        formal school as a logistics manager.
      </p>
      <div className="space-y-8">
        {volunteeringExperiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`transition-all duration-700 ease-out flex justify-between ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-12"
            }`}
            style={{
              transitionDelay: `${(index + 1) * 150}ms`,
            }}
          >
            <div className="w-4/5">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {experience.role}
                </h3>
                <a
                  href={experience.organizationUrl}
                  target="_blank"
                  className="text-gray-600 font-medium"
                >
                  <LinkAnimation
                    label={experience.organization}
                    lineColor="bg-black"
                  />
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  {experience.description}
                </p>
              </div>
            </div>
            <div className="w-1/5 flex items-center justify-end h-16">
              <a
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                href={experience.readMoreUrl}
                target="_blank"
                className="relative px-8 py-3 text-gray-900 font-medium group"
              >
                <span>Read More</span>
                <div
                  className={`
                  absolute top-0 left-0 h-px bg-gray-900 transition-all duration-300 ease-out
                  ${hoveredButton === index ? "w-full" : "w-0"}
                `}
                />
                <div
                  className={`
                  absolute top-0 right-0 w-px bg-gray-900 transition-all duration-300 ease-out delay-75
                  ${hoveredButton === index ? "h-full" : "h-0"}
                `}
                />
                <div
                  className={`
                  absolute bottom-0 right-0 h-px bg-gray-900 transition-all duration-300 ease-out delay-150
                  ${hoveredButton === index ? "w-full" : "w-0"}
                `}
                />
                <div
                  className={`
                  absolute bottom-0 left-0 w-px bg-gray-900 transition-all duration-300 ease-out delay-225
                  ${hoveredButton === index ? "h-full" : "h-0"}
                `}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
