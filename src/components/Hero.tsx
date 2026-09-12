import heroImg from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center mt-7 sm:mt-auto container mx-auto">
      <div className="space-y-7 mx-4">
        <h1 className="font-bold text-4xl sm:text-6xl">
          <span className="text-[#0F172A] ">Build Your Ideal </span>
          <span className="bg-linear-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#0F172A] ">
          Explore frontend, backend, database, and tooling options,
          <br /> compare them side by side, and put together the stack that fits
          your <br /> next project.
        </p>
        <div className="mt-14">
          <button className="bg-linear-to-r from-red-500 via-pink-500 to-purple-500  text-slate-50 py-1.5 px-7 rounded-lg cursor-pointer">
            Explore Technologies
          </button>
          <button className="py-1.5 px-7 border border-slate-300 rounded-lg ml-4 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={heroImg} alt="banner-stack img" />
      </div>
    </div>
  );
};

export default Hero;
