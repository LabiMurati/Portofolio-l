'use client';
import React, { useState, useEffect } from "react";
import AOS from "aos";
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiJquery, SiNextdotjs } from 'react-icons/si';
import "aos/dist/aos.css";
import Image from "next/image";
import devIcon from "../Images/dev.png";
import tailIcon from "../Images/tail.svg";
import githubIcon from "../Images/github.svg";

const StackItem = ({ icon, title, description }) => (
  <div className="stack__item flex flex-col items-center p-4 border-2 border-gray-500 rounded-lg text-center" data-aos="flip-left" data-aos-duration="1000">
    <div className="stack__icon mb-2">{icon}</div>
    <h3 className="stack__item-title text-xl font-medium mb-1">{title}</h3>
    <p className="stack__item-description text-gray-500">{description}</p>
  </div>
);

const Stack = () => {
  const [showAll, setShowAll] = useState(false);

  const stackItems = [
    { icon: <FaHtml5 size={30} />, title: "HTML5", description: "Markup Language" },
    { icon: <FaCss3Alt size={30} />, title: "CSS3", description: "Style Sheet Language" },
    { icon: <FaSass size={30} />, title: "Sass/SCSS", description: "CSS Preprocessor" },
    { icon: <FaBootstrap size={30} />, title: "Bootstrap", description: "CSS Framework" },
    { icon: <Image src={tailIcon} alt="Tailwind CSS Logo" width={30} />, title: "Tailwind CSS", description: "CSS Framework" },
    { icon: <SiJquery size={30} />, title: "jQuery", description: "JavaScript Library" },
    { icon: <FaJs size={30} />, title: "JavaScript", description: "Programming Language" },
    { icon: <FaReact size={30} />, title: "React", description: "JavaScript Library" },
    { icon: <SiNextdotjs size={30} />, title: "Next.js", description: "React Framework" },
    { icon: <FaWordpress size={30} />, title: "WordPress", description: "CMS" },
    { icon: <Image src={githubIcon} alt="GitHub Logo" width={30} />, title: "Git", description: "GitHub" },
    { icon: <FaFigma size={30} />, title: "Figma", description: "Figma UI/UX" },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="stack" className="stack py-12">
      <div className="stack__container container  mx-auto">
        <div className="stack__content flex flex-col items-center">
          <div className="stack__header w-full text-center mb-8 flex flex-col justify-center items-center">
            <Image src={devIcon} width={40} height={40} alt="Developer Icon" />
            <h2 className="stack__title text-2xl font-semibold mb-2 mt-2">Tech Stack</h2>
            <p className="stack__subtitle text-gray-600">Some of the tools I use in my workflow</p>
          </div>
          <div className="stack__grid w-full gap-5 grid grid-cols-3">
            {stackItems.slice(0, showAll ? stackItems.length : 3).map((item, index) => (
              <StackItem key={index} {...item} />
            ))}
          </div>
          {!showAll && (
            <button className="mt-4 bg-transparent border rounded-lg text-white px-4 py-2 hover:bg-white hover:text-black" onClick={() => setShowAll(true)}>
              View All
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stack;
