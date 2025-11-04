import { Link } from "react-router";
import { earphone, headphone, speaker } from "./imports";
import { LucideArrowRight } from "lucide-react";

const shopNav = [
  {
    title: "headphones",
    path: "/headphones",
    img: headphone,
  },
  {
    title: "speakers",
    path: "/speakers",
    img: speaker,
  },
  {
    title: "earphones",
    path: "/earphones",
    img: earphone,
  },
];
const ShopLinks = () => {
  return (
    <nav className="inner-container  flex items-center justify-center flex-col md:flex-row  gap-4">
      {shopNav.map(({ title, path, img }) => (
        <Link to={path} key={path}>
          <div className="w-[223px]  lg:w-[350px] h-[204px] bg-offwhite flex flex-col items-center gap-4 justify-evenly">
            <img
              src={img}
              alt={`${title}-image`}
              className="w-[120px] -mt-25"
            />
            <h6>{title}</h6>
            <div className="flex items-center gap-2">
              <p className="sub-title uppercase">shop</p>
              <LucideArrowRight className="text-primary" />
            </div>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default ShopLinks;
