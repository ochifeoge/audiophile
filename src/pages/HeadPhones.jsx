import Banner from "@/components/Banner";
import BeforeFooter from "@/components/BeforeFooter";
import { headPhoneShowcase } from "@/components/imports";
import ShopLinks from "@/components/ShopLinks";
import ShowCase from "@/components/ShowCase";

const HeadPhones = () => {
  return (
    <>
      <Banner name={"HEADPHONES"} />
      <ShowCase itemsArray={headPhoneShowcase} />
      <ShopLinks />
      <BeforeFooter />
    </>
  );
};

export default HeadPhones;
