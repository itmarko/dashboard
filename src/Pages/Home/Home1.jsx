import bgImage from "../../assets/download.png"; // Import the background image
import ButtonGroup from "./ButtonGroup3";

const Hero = () => {
  return (
    <>
    
      <section className="relative flex flex-col items-center justify-center text-center text-white h-screen overflow-hidden">
        {/* Div holding the background image with automatic light effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`, // Set the background image inside the div
          }}
        >
          {/* Dark overlay with gradient for a subtle light effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent opacity-60"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-2xl px-4 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Build and ship software on a single, collaborative platform
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white">
            Join the world’s most widely adopted AI-powered developer platform
            where millions of developers, businesses, and the largest open
            source community build software that advances humanity.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100">
              Sign up for Genius
            </button>
            <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600">
              Try Genius Copilot
            </button>
          </div>
        </div>
      </section>

      {/* Render the ButtonGroup component below */}
      <div className="pt-0 mt-0">
        <ButtonGroup />
      </div>
    </>
  );
};

export default Hero;
