import React from "react";
import Image from "next/image";

import profilePic from "../Images/labi.png";
import facebookImage from "../Images/icons8-facebook.svg";
import instagramImage from "../Images/icons8-instagram (1).svg";
import linkedinImage from "../Images/icons8-linkedin.svg";

const Header = () => {
  return (
    <section id="home" className="header container">
      <div className="pt-14">
        <div className="header flex justify-between">
          <div className="header__left__inner flex gap-3">
            <div className="header__left--img">
              <Image
                className="rounded-full"
                src={profilePic}
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <div className="header_left flex flex-col justify-center">
              <h2 className="mr-5 customText">Labinot Murati</h2>
              <p className="customText text-xs">
                Programer, Creator, Football Lover
              </p>
            </div>
          </div>
          <div className="header_right w-[300px]">
            <div className="header__right--inner flex gap-2">
              <ul class=" mob-dev list-disc relative left-[5px]">
                <li className="text-green-500	"></li>
              </ul>

              <p>Available for work</p>

              <div className="social flex gap-2">
                <p>
                  <a
                    href="https://www.facebook.com/labi.muratii/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="rounded-full"
                      src={facebookImage}
                      width={25}
                      height={25}
                      alt="Facebook Logo"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/labimurati/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="rounded-full"
                      src={instagramImage}
                      width={25}
                      height={25}
                      alt="Instagram Logo"
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/labinot-murati/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="rounded-full"
                      src={linkedinImage}
                      width={25}
                      height={25}
                      alt="LinkedIn Logo"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;