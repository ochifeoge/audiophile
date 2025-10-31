import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";

const nav = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "headphones",
    link: "/headphones",
  },
  {
    title: "speakers",
    link: "/speakers",
  },
  {
    title: "earphones",
    link: "/earphones",
  },
];

const Navbar = () => {
  return (
    <header className="container  text-white  bg-[#000000]">
      <nav className="flex max-w-[1109.83px] mx-auto items-center justify-between  py-8 pb-9 border-b border-offwhite/20">
        <h4>audiophile</h4>

        <ul className="flex items-center gap-[34px]">
          {nav.map(({ title, link }) => (
            <li key={link}>
              <NavLink className={`uppercase`} to={link}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        <ShoppingCart />
      </nav>
    </header>
  );
};

export default Navbar;
