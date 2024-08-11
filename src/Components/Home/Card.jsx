import { useState, useRef } from 'react';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';

const Card = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  const images = [img1, img2, img3, img4];

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    // Ensure scrollIntoView affects only the card container
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className='mt-[60px] lg:mt-[120px] overflow-hidden font-sans'>
      <h2 className='text-[#005447] text-xl lg:text-[32px] font-bold'>Global Accreditations</h2>
      <p className='pt-4 lg:py-3 text-sm text-justify lg:text-base font-medium lg:font-normal text-[#646464]'>
        Accreditation is a formal, independent verification that a program or institution meets established quality standards and is competent to carry out specific conformity assessment tasks.
      </p>

      {/* Card Container */}
      <div className='mt-6 flex gap-[14px] w-full max-w-[365px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-full lg:gap-6 overflow-x-hidden snap-x snap-mandatory'>
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`bg-white rounded-xl p-6 min-w-[252px] ${
              activeIndex === index ? 'sm:ring-2 sm:ring-[#005447] md:ring-2 md:ring-[#005447] lg:ring-0' : ''
            } pl-[36px] pr-[37px] pt-9 py-[37px] snap-center`}
          >
            <img src={image} alt={`img${index + 1}`} className='l' />
          </div>
        ))}
      </div>

      {/* Indicator Buttons (Only visible on mobile) */}
      <div className='mt-4 flex justify-center w-full lg:hidden'>
        <div className="flex justify-center w-full max-w-xs space-x-[6px]">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                activeIndex === index ? 'bg-[#005447]' : 'bg-gray-300'
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Card;
