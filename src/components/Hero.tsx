import heroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12 py-8 md:py-12 lg:py-16">

        <div className="space-y-5 sm:space-y-6 lg:space-y-7 text-center md:text-left">

          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="text-[#0F172A]">
              Build Your Ideal{" "}
            </span>

            <span className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-[#0F172A] text-sm sm:text-base md:text-lg leading-6 sm:leading-7 max-w-xl mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-4 lg:pt-6">

            <button className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 text-slate-50 py-2 px-6 sm:px-7 rounded-lg cursor-pointer hover:opacity-90 transition">
              Explore Technologies
            </button>

            <button className="py-2 px-6 sm:px-7 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-100 transition">
              Learn More
            </button>

          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="banner-stack img"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;