import { useNavigate } from "react-router";
import Button from "./Button";
import { earbud, speakerBg } from "./imports";

const Display = () => {
  const navigate = useNavigate();
  return (
    <section className="inner-container flex flex-col gap-8">
      <div className="bg-primary h-150 lg:h-[500px] items-center lg:justify-center gap-16 lg:items-end flex flex-col lg:flex-row">
        <div className="relative">
          <span className="w-70 lg:w-160 -translate-1/2 top-1/2 left-1/2 h-70 lg:h-160  absolute z-10 border border-white/20 rounded-full"></span>
          <span className="lg:w-120 w-60 h-60 top-1/2 -translate-1/2 left-1/2 lg:h-120  absolute z-10 border border-white/20 rounded-full"></span>
          <span className="w-100 -translate-1/2 top-1/2 left-1/2 h-100  absolute z-10 border border-white/20 rounded-full"></span>
          <img
            src="/speaker1.png"
            alt="speaker product"
            className="hidden lg:block z-100 "
          />
          <img
            src="/speaker.png"
            alt="speaker product"
            className=" lg:hidden z-100 "
          />
        </div>
        <div className="lg:basis-[38%] max-md:max-w-[349px] max-md:text-center lg:self-center  text-white space-y-4">
          <h4 className="over-line opacity-20   ">New Products</h4>
          <h1>XX99 Mark II Headpho</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            onClick={() => navigate("/speakers")}
            className="w-40 uppercase bg-[#4C4C4C] cursor-pointer text-white h-12"
          >
            See Productt
          </button>
        </div>
      </div>
      {/* speaker bg */}
      <div
        className="flex items-center  h-80 "
        style={{
          backgroundImage: `url(${speakerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ps-18 space-y-8">
          <h4>ZX7 SPEAKER</h4>
          <Button label={"SEE PRODUCT"} onClick={() => navigate("/speakers")} />
        </div>
      </div>
      {/* two cols */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="h-80 lg:basis-[49%]">
          <img src={earbud} alt="new ear buds image" />
        </div>

        <div className="h-80 lg:basis-[49%] bg-offwhite flex items-center">
          <div className="ps-18 space-y-8">
            <h4>YX1 EARPHONES</h4>
            <Button
              label={"SEE PRODUCT"}
              onClick={() => navigate("/earphones")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;
