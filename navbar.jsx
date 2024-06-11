'use client'
import React, { useState, useEffect } from 'react';
import { FaHome,FaBriefcase, FaServicestack, FaCode, FaGraduationCap, FaHeart, FaLayerGroup } from 'react-icons/fa';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 ${isVisible ? 'block' : 'hidden'}`}>
      <div className="flex space-x-6 text-gray-400 border p-3 rounded-lg border-colorShadow bg-transparent backdrop-blur-xl z-50">
        <a href="#home" className="hover:text-white"><FaHome /></a>
        <a href="#work" className="hover:text-white"><FaBriefcase /></a>
        <a href="#service" className="hover:text-white"><FaServicestack /></a>
        <a href="#stack" className="hover:text-white"><FaCode /></a>
        <a href="#certification" className="hover:text-white"><FaGraduationCap /></a>
        <a href="#together" className="hover:text-white"><FaLayerGroup /></a>
      </div>
    </div>
  );
};

export default Navbar;
