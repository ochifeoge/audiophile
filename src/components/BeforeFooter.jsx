import { person, smPerson } from "./imports";

const BeforeFooter = () => {
  return (
    <section className="inner-container gap-6 flex-col-reverse lg:flex-row h-[588px] flex items-center justify-between">
      <div className="space-y-8 lg:basis-[45%] text-center lg:text-left">
        <h2>
          Bringing you the <span className="text-primary ">best</span>{" "}
          <br className="lg:hidden" />
          audio gear
        </h2>
        <p className="opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="lg:basis-[48%] hidden lg:block w-full max-md:h-75 overflow-hidden rounded-xl lg:rounded-2xl">
        <img
          src={person}
          className=" w-full h-full "
          alt="customer listening to music with our product"
        />
      </div>

      {/* for sm screens */}

      <div className="lg:hidden w-full max-md:h-75 overflow-hidden rounded-xl lg:rounded-2xl">
        <img
          src={smPerson}
          className=" w-full h-full "
          alt="customer listening to music with our product"
        />
      </div>
    </section>
  );
};

export default BeforeFooter;
