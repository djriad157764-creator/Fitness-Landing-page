import ExerciseImage1 from "../../assets/exercise1.jpg";
import ExerciseImage2 from "../../assets/exercise2.png";
import ExerciseImage3 from "../../assets/exercise3.png";
import ExerciseImage4 from "../../assets/exercise4.png";
import ExerciseImage5 from "../../assets/exercise5.jpg";
import ExerciseImage6 from "../../assets/exercise6.jpg";

const TrainingsSection = () => {
  return (
    <div className="page-size px-5 sm:px-7.5  lg:px-2">
      <h2 className="section-title text-[32px] md:text-4xl  lg:text-5xl font-black mb-3.5">
        Trainings and Exercises
      </h2>
      <p className="text-white/50">
        We believe fitness should be accessible to everyone, everywhere,
        regardless of income or <br /> access to a gym.
      </p>
      <div className="mt-14 mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div className=" relative overflow-hidden ">
          <img
            className="object-cover w-full h-full max-h-50 relative"
            src={ExerciseImage1}
            alt=""
          />
          <div className="absolute inset-0 bg-red-900/20 z-10"></div>
          <div className="absolute bottom-5 left-3  z-30 text-[14px]">
            <h2>Lat Pulldown</h2>
            <p>Pull bar to your upper chest.</p>
          </div>
        </div>
        <div className="relative overflow-hidden   sm:col-span-2">
          <img
            className="object-cover w-full  h-full max-h-50"
            src={ExerciseImage2}
            alt=""
          />
          <div className="absolute inset-0 bg-[#FF0000]/30 z-10"></div>
          <div className="absolute top-5 left-5  z-30 text-[14px]">
            <h2>Leg Press</h2>
            <p>Keep back flat. Don't lock knees.</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <img
            className="object-cover w-full h-full max-h-50"
            src={ExerciseImage3}
            alt=""
          />
          <div className="absolute inset-0 bg-[#000000]/50  z-10"></div>
          <div className="absolute bottom-5 left-3  z-30 text-[14px]">
            <h2>Seated Row</h2>
            <p>Pull handle to your lower ribs.</p>
          </div>
        </div>
        <div className="relative overflow-hidden  sm:col-span-2">
          <img
            className="object-cover w-full h-full max-h-50"
            src={ExerciseImage4}
            alt=""
          />
          <div className="absolute inset-0 bg-[#000000]/50 z-10"></div>
          <div className="absolute bottom-7 left-5  text-[14px] z-30 ">
            <h2>Chest Press</h2>
            <p>Control weight. Push through your palms.</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <img
            className="object-cover w-full h-full max-h-50"
            src={ExerciseImage5}
            alt=""
          />
          <div className="absolute inset-0 bg-[#42FF00]/30 z-10"></div>
          <div className="absolute bottom-5  z-30 text-[14px]  left-3">
            <h2>Shoulder Press</h2>
            <p>Keep elbows forward. Don't arch back.</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <img
            className="object-cover  w-full h-full max-h-50"
            src={ExerciseImage6}
            alt=""
          />
          <div className="absolute inset-0 bg-[#0047FF]/30 z-10"></div>
          <div className="absolute bottom-5 left-3 text-[14px]  z-30">
            <h2>Leg Curl</h2>
            <p>Move slowly. Hold for one second.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingsSection;
