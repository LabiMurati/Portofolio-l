import React from 'react';
import Image from 'next/image';
import cvIcon from "../Images/cv.png";

const Mycv = () => {
  const handleDownload = () => {
    const downloadUrl = '/LabinotMurati_CV.pdf';
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    
    link.download = 'LabinotMurati_CV.pdf';
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
  };

  return (
    <div>
      <button className='border p-2 rounded-lg flex gap-3 items-center' onClick={handleDownload}>
        <Image src={cvIcon} width={30} height={30} alt="MyCV"/>
        Download CV
      </button>
    </div>
  );
};

export default Mycv;
