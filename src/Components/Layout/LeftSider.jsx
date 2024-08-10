import React, { useState } from 'react';

const LeftToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center h-screen">
      <div className="flex items-center ml-4">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
              checked={isOn}
              onChange={toggleSwitch}
            />
            <div className={`block w-14 h-8 rounded-full ${isOn ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                isOn ? 'transform translate-x-full' : ''
              }`}
            ></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium">{isOn ? 'On' : 'Off'}</div>
        </label>
      </div>
    </div>
  );
};

export default LeftToggle;
