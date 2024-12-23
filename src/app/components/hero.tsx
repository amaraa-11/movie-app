const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px]"
      style={{ backgroundImage: "url('/path-to-wicked-wicked.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-start px-10">
        <h1 className="text-5xl font-bold text-white mb-4">Wicked</h1>
        <p className="text-white">A magical adventure in Oz.</p>
      </div>
    </div>
  );
};
export default Hero;
