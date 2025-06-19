"use client";

import { useEffect, useRef, useState } from "react";
import TypograhpyH2 from "./ui/TypograhpyH2";
import LinkAnimation from "./LinkAnimation";
import { t } from "i18next";

type ExperienceType = {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  location: string;
  responsibilities: string[];
};

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const experiences = t("experience", {
    returnObjects: true,
  }) as ExperienceType[];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(index);
              } else {
                newSet.delete(index);
              }
              return newSet;
            });
          });
        },
        {
          threshold: 0.3,
          rootMargin: "-10% 0px -10% 0px",
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <TypograhpyH2 label={t("experienceTitle")} />
        <div className="space-y-12 mt-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <div
                className={`bg-white rounded-xl p-8 border transition-all duration-700 ease-out ${
                  visibleItems.has(index)
                    ? "shadow-xl border-gray-200 transform translate-y-0 opacity-100 scale-100"
                    : "shadow-sm border-gray-100 transform translate-y-8 opacity-70 scale-95"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col">
                    <h2
                      className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${
                        visibleItems.has(index)
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                    >
                      {exp.title}
                    </h2>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      className={`text-lg font-medium mb-2 transition-colors duration-500 ${
                        visibleItems.has(index)
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      <LinkAnimation
                        label={exp.company}
                        lineColor="bg-blue-600"
                      />
                    </a>
                    <p className="text-sm text-gray-600 mb-1 font-medium">
                      {exp.period}
                    </p>
                    <p className="text-sm text-gray-400">{exp.location}</p>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex flex-col text-right">
                      <p className="text-sm text-gray-600 mb-1 font-medium">
                        {exp.period}
                      </p>
                      <p className="text-sm text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className={`leading-relaxed flex items-start transition-all duration-500 ${
                        visibleItems.has(index)
                          ? "text-gray-700 opacity-100 transform translate-x-0"
                          : "text-gray-500 opacity-60 transform translate-x-4"
                      }`}
                      style={{
                        transitionDelay: visibleItems.has(index)
                          ? `${idx * 100 + 200}ms`
                          : `${(exp.responsibilities.length - idx) * 50}ms`,
                      }}
                    >
                      <span
                        className={`inline-block w-2 h-2 rounded-full mr-4 mt-2.5 flex-shrink-0 transition-all duration-400 ${
                          visibleItems.has(index)
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-100"
                            : "bg-gray-300 scale-75"
                        }`}
                        style={{
                          transitionDelay: visibleItems.has(index)
                            ? `${idx * 100 + 300}ms`
                            : `${(exp.responsibilities.length - idx) * 50}ms`,
                        }}
                      ></span>
                      <span className="text-base">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
