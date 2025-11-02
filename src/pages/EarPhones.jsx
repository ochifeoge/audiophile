import { AppContext } from "@/AppProvider";
import Banner from "@/components/Banner";
import BeforeFooter from "@/components/BeforeFooter";
import { earPhoneShowCase } from "@/components/imports";
import ShopLinks from "@/components/ShopLinks";
import ShowCase from "@/components/ShowCase";
import { useContext } from "react";

const EarPhones = () => {
  const { products } = useContext(AppContext);
  const earPhones = products?.filter(
    (product) => product.category === "earphone"
  );
  return (
    <>
      <Banner name={"EARPHONES"} />
      <ShowCase itemsArray={earPhones} />
      <ShopLinks />
      <BeforeFooter />
    </>
  );
};

export default EarPhones;
