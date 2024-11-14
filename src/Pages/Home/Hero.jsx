import { About } from "../../Widget/import/PublicImport";
import bgImage from "../../assets/download.png";
const Hero = () => {
  return (
    <div className="text-white bg-gradient-to-b from-[#1a1a6e] to-[#2C2B55]">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center text-white h-screen bg-gradient-to-b from-[#1a1a6e] to-[#2C2B55] overflow-hidden">
        {/* Background color and dark overlay behind the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent opacity-0 z-0"></div>
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
        {/* Main Contant */}
        <div className="relative z-20 max-w-2xl ">
          <h1 className="text-xl md:text-5xl font-bold text-white mb-4 ">
            Hello ! Well Come To Genius
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white">
            Unleash your potential on the leading AI-powered platform where
            developers, innovators, and the global tech community collaborate to
            create software that shapes the future. Join millions of minds
            pushing boundaries and advancing what&apos;s possible.
          </p>
          <div className="flex flex-row space-x-1">
            <div className="flex items-center bg-white rounded-lg shadow-md p-1 max-w-md ml-16">
              {/* Input Box */}
              <input
                type="text"
                className="flex-1 rounded-lg px-6 py-2 outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              {/* Sign Up Button */}
              <button
                className="bg-green-600 text-white font-semibold px-3 py-2 rounded-lg hover:bg-green-800 transition-all"
                aria-label="Sign up for Genius"
              >
                Sign up for Genius
              </button>
            </div>
            {/* Try Genius Button */}
            <button
              className="bg-[#200859] text-white font-semibold px-8 py-2 rounded-lg hover:bg-[#3c1384] border-2 border-gray-100"
              aria-label="Try Genius"
            >
              Try Genius
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex items-center relative justify-center ">
        <div className="w-full relative text-center item-center ">
          <About />
        </div>
      </section>
    </div>
  );
};

export default Hero;
