const HeroSection = () => {
  return (
    <div className="relative w-full h-96">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8"></div>
      <button className="bg-yellow-400 text-black px-4 py-2 mt-4 rounded-lg hover:bg-yellow-600 transition">
        Watch Trailer
      </button>
    </div>
  );
};

export default HeroSection;
