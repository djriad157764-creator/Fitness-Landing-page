import RunImage from "../../assets/run.jpg";

const ExtraRun = () => {
  return (
    <div className="px-5 mb-25">
      <div className="sm:flex items-center page-size bg-[#222222] p-8 rounded-[18px] justify-between">
        <div className="mb-8">
          <h1 className="text-[32px] md:text-4xl  lg:text-5xl font-black mb-3.5">
            Run an Extra <br /> Mile Easily
          </h1>
          <p className="text-white/50 mb-8">
            We believe fitness should be accessible <br className="sm:hidden" />{" "}
            to everyone, <br className="hidden sm:block" /> everywhere,
            regardless of <br className="sm:hidden" /> income or access to a
            gym. With <br className="hidden sm:block" /> hundreds of{" "}
            <br className="sm:hidden" /> professional workouts.
          </p>
          <button className="btn w-full sm:w-fit bg-[#E6533C] rounded-full px-16 py-5">
            Join Now
          </button>
        </div>
        <div className="  ">
          <img
            className="object-cover mx-auto rounded-[18px]"
            src={RunImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraRun;
