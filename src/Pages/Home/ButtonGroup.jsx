import  { useState } from 'react';

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState('Collaborate');

  const buttons = ['Code', 'Plan', 'Collaborate', 'Automate', 'Secure'];

  return (
    <div className="flex space-x-4 bg-transparent border border-gray-500 rounded-full px-4 py-2">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => setActiveButton(button)}
          className={`px-4 py-2 rounded-full font-semibold transition-all 
            ${activeButton === button ? 'bg-gray-700 text-white border border-gray-500' : 'text-gray-300 hover:text-white'}
          `}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
