import { AppContext } from "@/AppProvider";
import Banner from "@/components/Banner";
import BeforeFooter from "@/components/BeforeFooter";
import { speakersShowcase } from "@/components/imports";
import ShopLinks from "@/components/ShopLinks";
import ShowCase from "@/components/ShowCase";
import { useContext } from "react";

const Speakers = () => {
  const { products } = useContext(AppContext);
  const speaker = products?.filter((product) => product.category === "speaker");
  return (
    <>
      <Banner name={"speakers"} />
      <ShowCase itemsArray={speaker} />
      <ShopLinks />
      <BeforeFooter />
    </>
  );
};

export default Speakers;
