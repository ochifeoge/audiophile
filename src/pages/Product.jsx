import BeforeFooter from "@/components/BeforeFooter";
import { speaker2 } from "@/components/imports";
import QuanitityInput from "@/components/QuanitityInput";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "react-router";
import Button from "@/components/Button";
import { useContext } from "react";
import { AppContext } from "@/AppProvider";

const Product = () => {
  const { id } = useParams();

  const { dispatch } = useContext(AppContext);
  function handleAddToCart(product) {
    const { name, image, price } = product;

    console.log("cart: ", { name, id, image, price });
    dispatch({
      type: "ADD_TO_CART",
      payload: { name, id, image, price },
    });
  }

  // Fetch single product
  const product = useQuery(api.products.getProductById, {
    productId: id,
  });

  if (!product)
    return (
      <div className="inner-container">
        <p>Loading product...</p>
      </div>
    );

  const images = product.extraImages;
  return (
    <>
      <div className="inner-container">
        <div className="flex items-center justify-between mb-40">
          <div
            className={`bg-offwhite rounded basis-[48%] 
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto object-contain h-[385px] max-h-[385px] scale-[.8]"
            />
          </div>

          <div className="basis-[48%]  ">
            <h4 className="over-line   text-primary mb-4">{"NEW product"}</h4>
            {/* {subText && (
                )} */}
            <h1 className="mb-8">{product.name}</h1>
            <p className="mb-10">{product.description}</p>
            <p className="mb-[47px]">$ {product.price}</p>
            <div className="flex">
              <QuanitityInput />
              <Button
                label={"ADD TO CART"}
                onClick={() => {
                  handleAddToCart(product);
                }}
              />
            </div>
          </div>
        </div>

        {/* features */}
        <div className="flex justify-between ">
          <div className="basis-[65%] space-y-8">
            <h3>FEATURES</h3>
            <p className="opacity-50">{product.features}</p>
          </div>

          <div className="space-y-8">
            <h3>in the box</h3>
            <div className="space-y-2">
              {product?.inTheBox?.map((item, index) => (
                <div className="flex items-center gap-[21px]" key={index}>
                  <p className="text-primary">1</p>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* related images */}
        {images.length && (
          <div className="flex items-center gap-[30px] mt-[150px] justify-between">
            <div className="w-1/2 flex flex-col gap-[30px]">
              <div className=" h-[280px]">
                <img
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src={images[0]}
                  alt="related image"
                />
              </div>
              <div className=" h-[280px]">
                <img
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src={images[1]}
                  alt="related image"
                />
              </div>
            </div>

            <div className="w-1/2 h-[592px] ">
              <img
                loading="lazy"
                className="object-cover w-full h-full"
                src={images[2]}
                alt="related image"
              />
            </div>
          </div>
        )}
      </div>
      <BeforeFooter />
    </>
  );
};

export default Product;
