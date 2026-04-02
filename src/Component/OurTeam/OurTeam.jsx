import TrainerImage1 from "../../assets/trainer1.png";
import TrainerImage2 from "../../assets/trainer2.png";
import TrainerImage3 from "../../assets/trainer3.png";
import TrainerImage4 from "../../assets/trainer4.png";
import TrainerImage5 from "../../assets/trainer5.png";
import TrainerImage6 from "../../assets/trainer6.png";

const OurTeam = () => {
  return (
    <div className="page-size ">
      <h2 className="text-[32px] md:text-4xl  lg:text-5xl font-black mb-3.5 text-center">
        Meet Our Team
      </h2>
      <p className="text-white/50 text-center">
        We believe fitness should be accessible to everyone, everywhere,
        regardless of income or <br className="hidden sm:block" /> access to a
        gym.
      </p>

      <div className="mt-14 bg-[#222222] mb-20 grid-cols-1 mx-3 sm:mx-9 md:mx-0 sm:grid-cols-2 grid gap-5 p-5 rounded-2xl md:grid-cols-3">
        <div className="relative">
          <img
            className="rounded-2xl object-cover h-full w-full "
            src={TrainerImage1}
            alt=""
          />
          <div className="absolute bottom-3 left-3">
            <h3 className="text-xl font-black">Jerome Bell</h3>
            <p className="text-white/50">Trainer</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-2xl object-cover h-full w-full "
            src={TrainerImage2}
            alt=""
          />
          <div className="absolute bottom-3 left-3">
            <h3 className="text-xl font-black">Jerome Bell</h3>
            <p className="text-white/50">Trainer</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-2xl object-cover h-full w-full "
            src={TrainerImage3}
            alt=""
          />
          <div className="absolute bottom-3 left-3">
            <h3 className="text-xl font-black">Jerome Bell</h3>
            <p className="text-white/50">Trainer</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-2xl object-cover h-full w-full "
            src={TrainerImage4}
            alt=""
          />
          <div className="absolute bottom-3 left-3">
            <h3 className="text-xl font-black">Jerome Bell</h3>
            <p className="text-white/50">Trainer</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-2xl object-cover h-full w-full "
            src={TrainerImage5}
            alt=""
          />
          <div className="absolute bottom-3 left-3">
            <h3 className="text-xl font-black">Jerome Bell</h3>
            <p className="text-white/50">Trainer</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-2xl object-cover h-full w-full  "
            src={TrainerImage6}
            alt=""
          />
          <div className="absolute bottom-3 left-3">
            <h3 className="text-xl font-black">Jerome Bell</h3>
            <p className="text-white/50">Trainer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
