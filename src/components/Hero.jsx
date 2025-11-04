import { useNavigate } from "react-router";
import Button from "./Button";
import { heroimgBg } from "./imports";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className={` bg-[#0E0E0E] relative h-[720px] md:h-[70dvh] lg:bg-none! lg:h-[80dvh]  `}
      style={{
        backgroundImage: `url(${heroimgBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mx-auto h-full max-w-[379px] max-md:text-center lg:max-w-[1109.83px] ">
        <div className="basis-[48%]z-10 text-white space-y-4">
          <h4 className="over-line opacity-20   ">New Products</h4>
          <h1>XX99 Mark II Headpho</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            label={"See Products"}
            onClick={() => navigate("/headphones")}
          />
        </div>
        <div className="lg:basis-[48%] absolute top-1/2 left-1/2 max-md:-translate-1/2 lg:static h-full hidden lg:block  bg-radial from-offwhite/20   to-[#0E0E0E] to-70%">
          <img
            src={`/heroImg.png`}
            alt="hero image"
            className="object-cover mx-auto   h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
