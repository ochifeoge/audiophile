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

  const {
    dispatch,
    state: { cart },
  } = useContext(AppContext);
  function handleAddToCart(product) {
    const productId = product.id || id;
    const { name, image, price } = product;

    // ensure we always add a numeric qty
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        name,
        id: productId,
        image,
        price: Number(price || 0),
        qty: 1,
      },
    });
  }

  function increaseByOne() {
    dispatch({ type: "INCREASE_BY_ONE", payload: { id } });
  }
  function decreaseByOne() {
    dispatch({ type: "DECREASE_BY_ONE", payload: { id } });
  }

  const showCartQuantity = cart.find((cartItem) => cartItem.id === id)?.qty;

  console.log("cart quantity :", showCartQuantity);

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
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-40">
          <div
            className={`bg-offwhite rounded lg:basis-[48%] 
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto object-contain h-[385px] max-h-[385px] scale-[.8]"
            />
          </div>

          <div className="lg:basis-[48%] max-lg:text-center ">
            <h4 className="over-line   text-primary mb-4">{"NEW product"}</h4>
            {/* {subText && (
                )} */}
            <h1 className="mb-8">{product.name}</h1>
            <p className="mb-10">{product.description}</p>
            <p className="mb-[47px]">$ {product.price}</p>
            <div className="flex gap-4 max-lg:justify-center">
              <QuanitityInput
                onIncrease={increaseByOne}
                onDecrease={decreaseByOne}
                cartQuantity={showCartQuantity}
              />
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
        <div className="flex flex-col md:flex-row gap-8 justify-between ">
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
          <div className="flex flex-col md:flex-row items-center gap-[30px] mt-[150px] justify-between">
            <div className="md:w-1/2 flex flex-col gap-[30px]">
              <div className=" h-[174px] md:h-[280px]">
                <img
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src={images[0]}
                  alt="related image"
                />
              </div>
              <div className=" h-[174px] md:h-[280px]">
                <img
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src={images[1]}
                  alt="related image"
                />
              </div>
            </div>

            <div className="md:w-1/2 h-[326px] md:h-[592px] ">
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
