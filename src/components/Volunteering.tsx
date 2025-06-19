import { useEffect, useState } from "react";
import TypograhpyH1 from "./ui/TypographyH1";
import LinkAnimation from "./LinkAnimation";
import { useTranslation } from "react-i18next";

type VolunteeringType = {
  id: number;
  role: string;
  organization: string;
  organizationUrl: string;
  description: string;
  readMoreUrl: string;
};

export default function Volunteering() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const { t } = useTranslation();
  const volunteerings = t("volunteerings", {
    returnObjects: true,
  }) as VolunteeringType[];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="max-w-4xl mx-auto  p-6 space-y-3 md:-my-16 md:pt-32 md:min-h-screen">
      <div
        className={`transition-all duration-800 ease-out ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <TypograhpyH1 label={t("volunteeringTitle")} />
      </div>
      <p
        className={`transition-all duration-800 ease-out font-light text-justify ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        {t("volunteeringText.1")}
      </p>
      <p
        className={`transition-all duration-800 ease-out font-light text-justify pb-8 ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        {t("volunteeringText.2")}
      </p>
      <div className="space-y-8">
        {volunteerings.map((experience, index) => (
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
                className="relative px-4 py-3 text-gray-900 font-medium group"
              >
                <span> {t("readMore")}</span>
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
