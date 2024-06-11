"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import sliderOne from "../Images/pan.png";
import sliderTwo from "../Images/bankproject.png";
import sliderFour from "../Images/ask.png";
import sliderThree from "../Images/ictwebsite.png";
import forwardIcon from "../Images/icons8-forward-48.png";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const slides = [
    { image: sliderOne, link: "https://kies.at/" },
    { image: sliderTwo, link: "https://www.credit-now.ch" },
    { image: sliderThree, link: "https://kosict.com/" },
    { image: sliderFour, link: "https://askosova.org/" },
  ];

  return (
<div class="embla w-full h-full pt-8 pb-8 p-10 sm:pt-0 sm:pb-0 sm:p-0 md:pt-0 md:pb-0 md:p-0">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container  flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide relative w-full h-64 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Link href={slide.link} legacyBehavior passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      className="rounded-lg"
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="buttons flex justify-center mt-4">
        <button
          className="embla__prev mx-2 p-2 border-solid border-2 border-white-500 rounded-full"
          onClick={scrollPrev}
        >
          <Image
            className="rounded-full rotate-[180deg]"
            src={forwardIcon}
            width={40}
            height={40}
            alt="Previous Slide"
          />
        </button>

        <button
          className="embla__next mx-2 p-2 border-solid border-2 border-white-500 rounded-full"
          onClick={scrollNext}
        >
          <Image
            className="rounded-full"
            src={forwardIcon}
            width={30}
            height={30}
            alt="Next Slide"
          />
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
