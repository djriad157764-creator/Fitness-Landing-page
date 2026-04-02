import MovementImage from "../../assets/image3.png";
import timeImage from "../../assets/image2.png";
import practiceImage from "../../assets/image4.png";
import weightLossImage from "../../assets/image5.png";

const HabitsSection = () => {
  return (
    <div className="page-size  ">
      <div className="text-center">
        <h1 className="text-[32px] md:text-4xl lg:text-5xl font-black mb-3.5">
          Change Your Habits
        </h1>
        <p>
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or <br /> access to a gym.
        </p>
      </div>
      <div className="grid grid-cols-1 mb-25 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-14">
        <div className="">
          <img
            className="rounded-full mx-auto mb-7.5 object-cover border-4 border-red-500"
            src={MovementImage}
            alt=""
          />

          <h2 className="font-semibold text-lg text-center">Movement</h2>
          <p className="text-white/50 text-lg mt-2 text-center">
            We believe fitness should be <br /> accessible to everyone
          </p>
        </div>
        <div className="">
          <img
            className="rounded-full mx-auto mb-7.5 object-cover border-4 border-red-500"
            src={timeImage}
            alt=""
          />

          <h2 className="font-semibold text-lg text-center">Time</h2>
          <p className="text-white/50 text-lg mt-2 text-center">
            We believe fitness should be <br /> accessible to everyone
          </p>
        </div>
        <div className="">
          <img
            className="rounded-full mx-auto mb-7.5 object-cover border-4 border-red-500"
            src={practiceImage}
            alt=""
          />

          <h2 className="font-semibold text-lg text-center">Practice</h2>
          <p className="text-white/50 text-lg mt-2 text-center">
            We believe fitness should be <br /> accessible to everyone
          </p>
        </div>
        <div className="">
          <img
            className="rounded-full mx-auto mb-7.5 object-cover border-4 border-red-500"
            src={weightLossImage}
            alt=""
          />

          <h2 className="font-semibold text-lg text-center">Weight Loss</h2>
          <p className="text-white/50 text-lg mt-2 text-center">
            We believe fitness should be <br /> accessible to everyone
          </p>
        </div>
      </div>
    </div>
  );
};

export default HabitsSection;
