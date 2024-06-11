"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import serviceIcon from "../Images/services.svg";
import bookingIcon from "../Images/person.png";
import AOS from "aos";
import "aos/dist/aos.css";

const handleButtonClick = () => {
  window.location.href = 'mailto:labimurati25@gmail.com';
};


const Service = ({ title, description, buttonText1 }) => (
  <div id="service" className="section">
    <div className="service__icon flex  justify-start items-center pb-3">
      <div className="service__modal bg-customBackground p-3 rounded-lg">
        <Image src={bookingIcon} width={30} height={30} alt="Booking Icon" />
      </div>
    </div>
    <div className="service__information">
      <div className="service__information-content">
        <h2 className="service__title text-lg">{title}</h2>
        <p className="service__description text-sm text-customColor">
          {description}
        </p>
      </div>
      <div className="service__buttons flex gap-5 pt-4">
        <button
          className="service__button-primary bg-customButtonbg p-3 rounded-lg"
          onClick={handleButtonClick}
        >
          {buttonText1}
        </button>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div
    id="service"
    className="services"
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
  >
    <div className="services__holder mt-8 mb-8 flex justify-center flex-col items-center container">
      <div className="services__header w-full flex flex-col items-center text-center">
        <div className="services__header-icon mt-10">
          <Image src={serviceIcon} width={40} height={40} alt="Light Icon" />
        </div>
        <div className="services__header-title">
          <h2 className="text-xl">Services</h2>
        </div>
      </div>
      <div className="services__box-holder">
        <div className="services__box mt-5 bg-customBackground p-[20px] rounded-lg md:w-[600px]">
          <Service
            title="Frontend Engineer"
            description="I specialize in creating visually appealing and user-friendly web interfaces. My work focuses on delivering seamless, responsive user experiences using various tools and frameworks. With a strong design foundation and keen eye for detail, I ensure every project functions flawlessly and provides an enjoyable user experience."
            buttonText1="Contact Me"
          />
        </div>
      </div>
    </div>
  </div>
);

const ServicesWithAOS = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Services />;
};

export default ServicesWithAOS;
