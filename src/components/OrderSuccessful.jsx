import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import { AppContext } from "@/AppProvider";

const OrderSuccessful = ({ onClose }) => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const firstCartItem = cart[0];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.6)]">
      <div
        className="bg-white text-black w-[540px] rounded p-12"
        role="dialog"
        aria-modal="true"
      >
        <div className="space-y-6">
          <span className="w-16 h-16 rounded-full bg-primary text-lg text-white flex items-center justify-center">
            <FaCheck />
          </span>
          <h3>
            THANK YOU <br /> FOR YOUR ORDER
          </h3>
          <p>You will receive an email confirmation shortly.</p>

          <div className="flex rounded-xl ">
            <div className=" basis-[52%] bg-offwhite p-6">
              <div className="flex items-center justify-between gap-[9px] border-b border-b-black/10 pb-[21px]">
                <img
                  src={firstCartItem.image}
                  className="w-7 h-8"
                  alt={firstCartItem.name}
                />
                <div className="text-center">
                  <p>{firstCartItem.name}</p>
                  <p className="opacity-50"> $ {firstCartItem.price}</p>
                </div>
                <p>X {firstCartItem.qty}</p>
              </div>
              {cart.length > 1 && (
                <p className="opacity-50">and {cart.length} other item(s)</p>
              )}
            </div>
            <div className="p-6 flex basis-[48%] bg-black text-white flex-col justify-center">
              <p className="opacity-50">GRAND TOTAL</p>
              <h6>$ 4363</h6>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="w-full text-white h-12 bg-primary cursor-pointer"
              onClick={onClose}
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessful;
