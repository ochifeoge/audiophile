import { AppContext } from "@/AppProvider";
import Banner from "@/components/Banner";
import BeforeFooter from "@/components/BeforeFooter";
import ShopLinks from "@/components/ShopLinks";
import ShowCase from "@/components/ShowCase";
import { useContext } from "react";

const HeadPhones = () => {
  const { products } = useContext(AppContext);

  const headPhones = products?.filter(
    (product) => product.category === "headphone"
  );
  return (
    <>
      <Banner name={"HEADPHONES"} />
      <ShowCase itemsArray={headPhones} />
      <ShopLinks />
      <BeforeFooter />
    </>
  );
};

export default HeadPhones;
