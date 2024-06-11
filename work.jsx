import React from "react";
import { FaHome } from 'react-icons/fa';

const Work = () => {
  return (
    <div id="work" className="section work container">
      <div className="work__holder w-ull flex justify-center">
        <div className="flex flex-col justify-center items-start">
          <div className="work__holder--content mt-2 flex flex-col items-center">
           <FaHome size={32}/>
            <p className="text-2xl">Some Things I’ve Built</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
