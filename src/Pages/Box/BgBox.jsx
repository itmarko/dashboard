const BgBox = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#2C2B55] to-[#9175FD]">
          <div className="relative w-96 h-64 bg-gradient-to-br from-[#8473C3] to-[#A58EFA] rounded-2xl shadow-xl overflow-hidden border-2 border-[#fdfdfd]">
            {/* Overlay glow effect     from-[#8473C3] to-[#A58EFA] this color is used for div color   */}  
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent rounded-xl pointer-events-none"></div>

            {/* Inner content */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
              abcd
            </div>
          </div>
        </div>
    </>
  );
};

export default BgBox;
