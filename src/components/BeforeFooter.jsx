import { person } from "./imports";

const BeforeFooter = () => {
  return (
    <section className="inner-container h-[588px] flex items-center justify-between">
      <div className="space-y-8 basis-[45%]">
        <h2>
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="basis-[48%] overflow-hidden rounded-2xl">
        <img src={person} alt="customer listening to music with our product" />
      </div>
    </section>
  );
};

export default BeforeFooter;
