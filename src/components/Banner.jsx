import React from "react";

const Banner = ({ name }) => {
  return (
    <div className="h-[336px] mb-40 bg-black text-center flex justify-center items-center">
      <h2 className="text-white">{name}</h2>
    </div>
  );
};

export default Banner;
