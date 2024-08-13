import { useState, useRef } from 'react';

import img6 from '../../assets/image6.png';
import img7 from '../../assets/image7.png';
import img8 from '../../assets/img8.png';
import img9 from '../../assets/img9.png';

const images = [
  {
    id: 1,
    image: img6,
    title: 'Society Interaction',
    description: 'Basic Level interaction with elder generation peoples for society empowerment.',
    link: '/',
  },
  {
    id: 2,
    image: img7,
    title: 'School & College Meetup',
    description: 'Visiting younger generation to meet their needs and requirements.',
    link: '/',
  },
  {
    id: 3,
    image: img8,
    title: 'End Hunger Program',
    description: 'Stop hunger everyday with hand to hand effect. Day to Day visit to city.',
    link: '/',
  },
  {
    id: 4,
    image: img9,
    title: 'Celebrating leader’s day',
    description: 'Celebrating elder leaders day to empower peoples all over the world.',
    link: '/',
  },
];

const SocialService = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <div className='mt-[60px] lg:mt-[120px] overflow-hidden font-montserrat'>
      <h2 className='text-[#005447] text-xl lg:text-[32px] font-bold leading-normal tracking-[0.64px]'>
        Upcoming Events
      </h2>
      <div className='flex items-center justify-between gap-4 lg:gap-0 pt-6 w-full overflow-x-hidden snap-x snap-mandatory'>
        {images.map((event, index) => (
          <div
            key={event.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className='flex-shrink-0 w-[252px] max-w-full'
          >
            <img
              src={event.image}
              alt={event.title}
              className='w-full h-[168px] rounded-t-xl object-cover'
            />
            <div className='text-sm bg-white text-[#646464] rounded-b-xl p-4'>
              <h3 className='text-base font-bold text-[#111111]'>{event.title}</h3>
              <p className='text-base leading-6 font-normal text-[#646464]'>
                {event.description}
              </p>
              <a
                href={event.link}
                className='text-[#008F78] font-semibold text-base flex pt-4'
              >
                View more
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M8.91016 19.9181L15.4302 13.3981C16.2002 12.6281 16.2002 11.3681 15.4302 10.5981L8.91016 4.07812'
                    stroke='#008F78'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
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

export default SocialService;
