import Banner from "@/components/Banner";
import BeforeFooter from "@/components/BeforeFooter";
import { speakersShowcase } from "@/components/imports";
import ShopLinks from "@/components/ShopLinks";
import ShowCase from "@/components/ShowCase";

const Speakers = () => {
  return (
    <>
      <Banner name={"speakers"} />
      <ShowCase itemsArray={speakersShowcase} />
      <ShopLinks />
      <BeforeFooter />
    </>
  );
};

export default Speakers;
