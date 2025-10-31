import BeforeFooter from "@/components/BeforeFooter";
import { speaker2 } from "@/components/imports";
import QuanitityInput from "@/components/QuanitityInput";

const Product = () => {
  return (
    <>
      <div className="inner-container">
        <div className="flex items-center justify-between mb-40">
          <div
            className={`bg-offwhite rounded basis-[48%] 
            }`}
          >
            <img
              src={speaker2}
              alt="speaker 1"
              className="mx-auto object-contain max-h-[385px] scale-[.8]"
            />
          </div>

          <div className="basis-[48%]  ">
            <h4 className="over-line   text-primary mb-4">{"NEW product"}</h4>
            {/* {subText && (
                )} */}
            <h1 className="mb-8">{"XX59 Headphones"}</h1>
            <p className="mb-10">
              {
                "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
              }
            </p>
            <p className="mb-[47px]">$ 4334</p>
            <div className="flex">
              <QuanitityInput />
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>

        {/* features */}
        <div className="flex justify-between ">
          <div className="basis-[65%] space-y-8">
            <h3>FEATURES</h3>
            <p>
              Experience unrivalled stereo sound thanks to innovative acoustic
              technology. With improved ergonomics designed for full day
              wearing, these revolutionary earphones have been finely crafted to
              provide you with the perfect fit, delivering complete comfort all
              day long while enjoying exceptional noise isolation and truly
              immersive sound.
            </p>
            <p>
              The YX1 Wireless Earphones features customizable controls for
              volume, music, calls, and voice assistants built into both
              earbuds. The new 7-hour battery life can be extended up to 28
              hours with the charging case, giving you uninterrupted play time.
              Exquisite craftsmanship with a splash resistant design now
              available in an all new white and grey color scheme as well as the
              popular classic black.
            </p>
          </div>

          <div className="space-y-8">
            <h3>in the box</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-[21px]">
                <p className="text-primary">2x</p>
                <p>Earphone unit</p>
              </div>
              <div className="flex items-center gap-[21px]">
                <p className="text-primary">2x</p>
                <p>Earphone unit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[30px] justify-between">
          <div className="w-1/2 flex flex-col gap-[30px]">
            <div className="border-8 border-b h-[280px]"></div>
            <div className="border-8 border-t h-[280px]"></div>
          </div>

          <div className="w-1/2 h-[592px] border-4"></div>
        </div>
      </div>
      <BeforeFooter />
    </>
  );
};

export default Product;
