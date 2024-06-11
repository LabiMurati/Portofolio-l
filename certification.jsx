import React from "react";
import Image from "next/image";
import askImage from "../Images/Beetroot.jpg";
import ictImage from "../Images/ict.jpeg";

const Certification = () => {
  const CertificationItem = ({ title, content, award, src, alt }) => (
    <div  id="certification" className="certification-item my-8">
      <div className="certification__space flex justify-center">
        <div className="certification-item__holder flex flex-col text-white border-4 border-colorBorder  rounded-[24px] w-full md:w-[600px]">
          <div className="certification-item__image">
            <Image
              className="object-cover shadow-lg border-[5px] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-lg rounded-br-lg border-black"
              src={src}
              alt={alt}
            />
          </div>
          <div className="certification-item__content py-5 px-5">
            <div className="certification-item__title">
              <h5 className="certification-item__title-text mb-3 text-2xl font-bold text-center flex flex-col">
                {title}
                <span className="text-sm text-center w-full color- text-gray-600 font-normal font-sans ">{award}</span>
              </h5>
            </div>
            <p className="certification-item__text">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="certification">
      <div className="container">
        <div className="certification__header text-center">
          <h2 className="certification__title mb-4 text-4xl font-extrabold leading-none">
            Certification
          </h2>
          <p className="certification__description">
            Projects I'm currently building.
          </p>
        </div>
        <div className="certification__items">
          <CertificationItem
            title="Web Application in Professional Development  from Europian Union"
            content="I am honored to have been awarded by the Minister of Technology as one of the
            top students in a prestigious training program endorsed by the European Union
            to fortify Kosovo's ICT sector. This comprehensive 280-hour program equipped me
            with a diverse skill set encompassing cutting-edge development techniques. The
            curriculum covered HTML, CSS, SEO, Bootstrap5, JavaScript, jQuery, Adobe
            Photoshop, and WordPress, providing me with a robust foundation in web
            development."
            src={ictImage}
            award="Best student ceremony award"
            alt="Peko Image"
          />
          <CertificationItem
            title="Frontend Developer Professional Certificate Beetroot Academy Kosovo"
            content="Under the guidance of Beetroot Academy in Pristina, operated by Kutia, I gained
            comprehensive knowledge and hands-on experience in HTML, CSS, JavaScript,
            and the fundamentals of ReactJs. My dedication and commitment to excellence
            were recognized when I was selected as the top-performing student within my
            cohort.."
            src={askImage}
            award="Best student ceremony award"
            alt="Beetroot Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Certification;
