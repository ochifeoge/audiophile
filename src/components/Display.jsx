import { earbud, speakerBg } from "./imports";

const Display = () => {
  return (
    <section className="inner-container flex flex-col gap-8">
      <div className="bg-orange-300 h-[500px]"></div>
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
          <button>SEE PRODUCT</button>
        </div>
      </div>
      {/* two cols */}
      <div className="flex justify-between">
        <div className="h-80 basis-[49%]">
          <img src={earbud} alt="new ear buds image" />
        </div>

        <div className="h-80 basis-[49%] bg-offwhite flex items-center">
          <div className="ps-18 space-y-8">
            <h4>YX1 EARPHONES</h4>
            <button>SEE PRODUCT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;
