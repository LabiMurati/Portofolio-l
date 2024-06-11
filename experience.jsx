"use client";

import React, { useState } from "react";

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState("FirstSolution LLC ");

  const experiences = {
    "FirstSolution LLC ": {
      title: "Front-End Engineer @ FirstSolution LLC, Prishtina ",
      date: "07/2023 - 01/2024",
      responsibilities: [
        "Develop modern, high-performance, and maintainable code for a diverse range of client and internal projects",
        "Utilize a variety of languages, platforms, and frameworks including JavaScript, TypeScript, React, WordPress, and Next.js",
        "Collaborate closely with multi-disciplinary teams comprising engineers, designers, producers, and clients to ensure effective communication and project delivery on a daily basis",
      ],
    },
    "Kutia Software Company": {
      title: "Front-End Engineer @ Kutia Software Company, Prishtina",
      date: "01/2021 – 03/2022",
      responsibilities: [
        "Spearheaded the development and upkeep of front-end features within web applications, ensuring seamless functionality and user experience",
        "Implemented optimization techniques to enhance application speed and scalability, ensuring optimal performance",
        "Optimized applications for maximum speed and scalability",
        "Participated in code reviews and team meetings",
      ],
    },
  };

  return (
    <div className="text-white container">
      <div className="experience__title my-12	">
        <h2 className="text-center mb-10 font-semibold text-2xl">
          Working Experience
        </h2>
      </div>
      <h2 className="text-lg font-semibold mb-4">Where I’ve Worked</h2>
      <div className="flex flex-col md:flex-row">
        <div className=" experience md:w-1/3 mb-4 md:mb-0 ">
          <ul className="space-y-2">
            {Object.keys(experiences).map((company) => (
              <li
                key={company}
                className={`pl-4 cursor-pointer ${
                  activeCompany === company
                    ? "text-white border-l-4 border-white"
                    : "text-zinc-400"
                }`}
                onClick={() => setActiveCompany(company)}
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/3 relative top-[-43px]">
          {Object.keys(experiences).map((company) => (
            <div
              key={company}
              className={`transition-opacity duration-300 ease-in-out ${
                activeCompany === company ? "opacity-100" : "opacity-0"
              }`}
            >
              {activeCompany === company && (
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 dark:text-zinc-200">
                    {experiences[company].title}
                  </h3>
                  <p className="text-sm text-zinc-400 dark:text-zinc-300 mb-4">
                    {experiences[company].date}
                  </p>
                  <ul className="space-y-2">
                    {experiences[company].responsibilities.map(
                      (responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-white mr-2">➤</span>
                          <p>{responsibility}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
