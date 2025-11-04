import React from "react";
import { NavLink } from "react-router";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaTwitter } from "react-icons/fa";

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
const Footer = () => {
  return (
    <footer className="container  text-white  bg-[#0E0E0E]">
      <nav className="space-y-9 inner-container my-0! mx-auto    py-8">
        <div className="flex items-center gap-8 justify-between flex-col lg:flex-row">
          <h4>audiophile</h4>

          <ul className="flex flex-col md:flex-row items-center gap-[34px]">
            {nav.map(({ title, link }) => (
              <li key={link}>
                <NavLink className={`uppercase`} to={link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 2nd part */}
        <div className="flex justify-between flex-wrap items-end">
          <p className="basis-full lg:basis-[49%] opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div className="lg:flex hidden  gap-[2.25px] text-2xl items-center">
            <IoLogoFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        {/* copy right */}
        <div className="mt-14 flex items-center flex-col md:flex-row gap-[47px] justify-between">
          <p className=" opacity-50">Copyright 2021. All Rights Reserved</p>
          <div className="flex lg:hidden  gap-[2.25px] text-2xl items-center">
            <IoLogoFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
