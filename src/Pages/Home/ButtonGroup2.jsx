import { useState } from "react";
import codeImage from "../../assets/code.webp";
import planImage from "../../assets/download.png";
import collaborateImage from "../../assets/code.webp";
import automateImage from "../../assets/code.webp";
import secureImage from "../../assets/code.webp";

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState("Collaborate");

  // Define the images for each button
  const images = {
    Code: codeImage,
    Plan: planImage,
    Collaborate: collaborateImage,
    Automate: automateImage,
    Secure: secureImage,
  };

  // Define the buttons
  const buttons = ["Code", "Plan", "Collaborate", "Automate", "Secure"];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#2C2B55] text-white p-6">
        {/* Outer container with padding, increased height and no margin at bottom */}
        <div className="w-full max-w-5xl min-h-[600px] mb-0 bg-gradient-to-br from-[#8473C3] to-[#A58EFA] rounded-2xl p-4 shadow-2xl relative">
          {/* Inner Image Display Area with padding and increased height */}
          <div className="w-full h-full bg-gradient-to-br from-[#8473C3] to-[#A58EFA] rounded-2xl p-4 relative">
            <img
              src={images[activeButton]}
              alt={activeButton}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white via-white/30 to-transparent opacity-30 blur-lg"></div>
          </div>
        </div>
      </div>

      {/* Full Width Background for Button Group and Text */}
      <div className="w-full bg-[#1C1C2E] py-6 shadow-lg">
        {/* Centered Content Area */}
        <div className="max-w-2xl mx-auto space-y-6 px-4">
          {/* Button Group */}
          <div className="flex justify-center space-x-4 bg-transparent border border-gray-600 rounded-full px-4 py-2 mt-4">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => setActiveButton(button)}
                className={`px-4 py-2 rounded-full font-semibold transition-all  
                  ${
                    activeButton === button
                      ? "bg-[#2C2B55] text-white border border-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }
                `}
              >
                {button}
              </button>
            ))}
          </div>

          {/* Description Text */}
          <div className="text-center text-gray-300 text-sm">
            Work easily with your team in real time with GitHub Pull Requests,
            code reviews, and GitHub Discussions.
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonGroup;
