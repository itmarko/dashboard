import bgImage from "../../assets/download.png"; // Import the PNG image
import ButtonGroup from "./ButtonGroup3"; // Ensure this path is correct

const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center text-white h-screen bg-[#1A1A2E] overflow-hidden">
        {/* Background color and dark overlay behind the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent opacity-60 z-0"></div>

        {/* PNG Image container */}
        <div
          className="absolute inset-0 flex justify-center items-center z-10"
          style={{
            backgroundImage: `url(${bgImage})`, // Set the PNG image as background
            backgroundSize: "contain", // Make sure the image fits properly
            backgroundRepeat: "no-repeat", // Prevent repeating the image
            backgroundPosition: "center", // Position the image at the center
          }}
        ></div>

        {/* Main Content */}
        <div className="relative z-20 max-w-2xl px-4">
          <h1 className="text-xl md:text-4xl font-bold mb-4 text-white">
            Build and ship software on a single, collaborative platform
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white">
            Join the world’s most widely adopted AI-powered developer platform
            where millions of developers, businesses, and the largest open
            source community build software that advances humanity.
          </p>
          <div className="space-x-4">
            <button
              className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100"
              aria-label="Sign up for GitHub"
            >
              Sign up for GitHub
            </button>
            <button
              className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600"
              aria-label="Try GitHub Copilot"
            >
              Try GitHub Copilot
            </button>
          </div>
        </div>
      </section>

      {/* Render the ButtonGroup component directly below without extra space */}
      <ButtonGroup />
    </>
  );
};

export default Hero;