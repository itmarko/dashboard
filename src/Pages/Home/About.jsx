import { useState } from "react";
import codeImage from "../../assets/bg-6.png";
import planImage from "../../assets/bg-7.png";
import collaborateImage from "../../assets/bg-3.png";
import automateImage from "../../assets/bg-4.png";
import secureImage from "../../assets/bg-5.png";

const About = () => {
  const [activeButton, setActiveButton] = useState("Collaborate");
  const images = {
    Code: codeImage,
    Plan: planImage,
    Collaborate: collaborateImage,
    Automate: automateImage,
    Secure: secureImage,
  };
  const buttons = ["Code", "Plan", "Collaborate", "Automate", "Secure"];

  return (
    <section className="flex flex-col mx-auto ">
      {/* Outer container with absolute positioning at the bottom */}
      <div
        className="bottom-0 w-full max-w-5xl bg-gradient-to-br from-[#8473C3] to-[#A58EFA]
        rounded-t-2xl p-5 border-b-0 shadow-2xl mb-0 border-[1px] border-cyan-50 pb-0 mx-auto"
      >
        {/* Centered Image Container */}
        <div className="w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[550px] max-w-full overflow-hidden rounded-t-md relative border-none mx-auto">
          <img
            src={images[activeButton]}
            alt={activeButton}
            className="object-cover w-full h-full rounded-t-md shadow-lg absolute mb-0"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white via-white/30 to-transparent opacity-0  "></div>
        </div>
      </div>

      {/* Full Width Background for Button Group and Text */}
      <div className="w-full py-6 shadow-lg bg-[#1C1C2E] mt-[-1px]">
        {/* Centered Content Area */}
        <div className="max-w-2xl mx-auto space-y-6 px-4">
          {/* Button Group */}
          <div
            className="flex flex-wrap justify-center space-x-4 bg-transparent 
            border border-gray-600 rounded-full px-4 py-2"
          >
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => setActiveButton(button)}
                className={`px-4 py-2 rounded-full font-semibold transition-all 
                  ${
                    activeButton === button
                      ? "bg-gray-800 text-white border border-white shadow-md"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                  sm:px-6 sm:py-2 text-sm md:text-base
                `}
              >
                {button}
              </button>
            ))}
          </div>
          {/* Description Text */}
          <div className="text-center text-gray-300 text-xs sm:text-sm md:text-base">
            Work easily with your team in real time with GitHub Pull Requests,
            code reviews, and GitHub Discussions.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
