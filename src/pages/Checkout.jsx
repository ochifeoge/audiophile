import { useNavigate } from "react-router";
import CheckoutForm from "../components/CheckoutForm";
import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const [isFormValid, setIsFormValid] = useState(false);

  const subtotal = (state.cart || []).reduce(
    (acc, item) => acc + (item.price || 0) * (item.qty || 1),
    0
  );

  return (
    <div className="container bg-offwhite">
      <div className="inner-container mt-[79px]">
        <button className="text-[15px] mb-[38px]" onClick={() => navigate(-1)}>
          Go Back
        </button>

        <div className="flex gap-[30px]">
          <div className="bg-white basis-[67%] px-0">
            <h3 className="mb-[41px] p-8">checkout</h3>
            <CheckoutForm onValidityChange={setIsFormValid} />
          </div>

          <div className="bg-white basis-[31%] p-6">
            <h4 className="mb-6">Order Summary</h4>
            <div className="flex flex-col gap-4">
              {(state.cart || []).map((it, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="text-sm">{it.name || it.title}</div>
                  <div className="text-sm">
                    ${((it.price || 0) * (it.qty || 1)).toFixed(2)}
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between font-bold border-t pt-4 mt-4">
                <div>Subtotal</div>
                <div>${subtotal.toFixed(2)}</div>
              </div>

              <button
                className={`mt-6 w-full py-3 rounded ${
                  isFormValid
                    ? "bg-black text-white"
                    : "bg-black/40 text-white/80 cursor-not-allowed"
                }`}
                onClick={() => alert("oge")}
                disabled={!isFormValid}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
