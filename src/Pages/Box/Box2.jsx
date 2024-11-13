const Box2 = () => {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100">
        {/* Dark overlay for background */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Outer glowing effect and box */}
        <div className="relative w-[800px] h-[500px] rounded-2xl border border-purple-300 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-2xl">
          {/* Soft glow effect */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-purple-400 via-indigo-300 to-blue-400 opacity-30 blur-xl"></div>

          {/* Content placeholder */}
          <div className="relative z-10 w-full h-full p-6">
            {/* Add content here if needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Box2;
