import { heroImg } from "./imports";

const Hero = () => {
  return (
    <div className=" bg-[#0E0E0E] h-[80dvh] ">
      <div className="flex items-center justify-between mx-auto h-full  max-w-[1109.83px] ">
        <div className="basis-[48%] text-white space-y-4">
          <h4 className="over-line opacity-20   ">New Products</h4>
          <h1>XX99 Mark II Headpho</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>See Products</button>
        </div>
        <div className="basis-[48%] h-full  ">
          <img
            src={heroImg}
            alt="hero image"
            className="object-cover rounded-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
