import Banner from "@/components/Banner";
import BeforeFooter from "@/components/BeforeFooter";
import { earPhoneShowCase } from "@/components/imports";
import ShopLinks from "@/components/ShopLinks";
import ShowCase from "@/components/ShowCase";

const EarPhones = () => {
  return (
    <>
      <Banner name={"EARPHONES"} />
      <ShowCase itemsArray={earPhoneShowCase} />
      <ShopLinks />
      <BeforeFooter />
    </>
  );
};

export default EarPhones;
