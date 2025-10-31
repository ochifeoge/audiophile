import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
import Cart from "./Cart";

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
  const { showCart, setShowCart, state } = useContext(AppContext);

  const cartCount = state?.cart?.reduce((acc, i) => acc + (i.qty || 0), 0) || 0;

  return (
    <header className="container  text-white  bg-[#000000]">
      <nav className="flex max-w-[1109.83px] mx-auto items-center justify-between  py-8 pb-9 border-b border-offwhite/20 relative">
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

        <div className="relative">
          <button
            onClick={() => setShowCart(!showCart)}
            aria-label="Toggle cart"
            className="relative"
          >
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-white text-black rounded-full w-5 h-5 text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {showCart && <Cart />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
