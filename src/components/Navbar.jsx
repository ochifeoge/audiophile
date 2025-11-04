import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";
import Cart from "./Cart";
import { FaBars } from "react-icons/fa";

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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const cartCount = state?.cart?.reduce((acc, i) => acc + (i.qty || 0), 0) || 0;

  return (
    <header className="container  text-white  bg-[#000000]">
      <nav className="flex max-w-[1109.83px] mx-auto items-center justify-between  py-8 pb-9 border-b border-offwhite/20 relative">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowMobileMenu((s) => !s)}
            aria-label="Toggle menu"
            className="lg:hidden"
          >
            <FaBars />
          </button>
          <h4>audiophile</h4>
        </div>
        {/* mobile menu overlay */}
        {showMobileMenu && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setShowMobileMenu(false)}
              aria-hidden="true"
            />
            <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white p-6 lg:hidden">
              <ul className="flex flex-col gap-4">
                {nav.map(({ title, link }) => (
                  <li key={link}>
                    <NavLink
                      to={link}
                      className="uppercase block"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <ul className="hidden lg:flex   items-center gap-[34px]">
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
