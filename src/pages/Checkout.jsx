import { useNavigate } from "react-router";
import CheckoutForm from "../components/CheckoutForm";
import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import OrderSuccessful from "../components/OrderSuccessful";

const Checkout = () => {
  const navigate = useNavigate();
  const { state, setOrderSuccessful, orderSuccessful, dispatch } =
    useContext(AppContext); // <- include dispatch & orderSuccessful

  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState(null); // <-- receives form data from CheckoutForm

  const subtotal = (state.cart || []).reduce(
    (acc, item) => acc + (item.price || 0) * (item.qty || 1),
    0
  );

  const createOrder = useAction(api.orders.createOrder);

  async function handleCheckout() {
    if (!formData) {
      return;
    }

    const items = (state.cart || []).map((it) => ({
      id: it.id || it.productId || String(it.name),
      name: it.name || it.title,
      price: Number(it.price || 0),
      quantity: Number(it.qty || 1),
    }));

    const orderData = {
      billing: formData.billing,
      shipping: formData.shipping,
      payment: formData.payment,
      items,
      subtotal,
      total: subtotal,
      status: "pending",
    };

    try {
      console.log("ordering");
      const orderId = await createOrder(orderData);
      console.log("Order created:", orderId);

      // show success UI
      setOrderSuccessful(true);

      // clear cart after a short delay and hide success UI
      // setTimeout(() => {
      // dispatch({ type: "EMPTY_CART" });
      // setOrderSuccessful(false);

      // navigate(`/order/${orderId}`);
      // }, 3000); // 3s, adjust as needed
    } catch (error) {
      console.error("Error creating order:", error);
    }
  }

  return (
    <div className="container bg-offwhite">
      {orderSuccessful && (
        <OrderSuccessful
          onClose={() => {
            dispatch({ type: "EMPTY_CART" });
            setOrderSuccessful(false);
            navigate("/");
          }}
        />
      )}

      <div className="inner-container mt-[79px]">
        <button className="text-[15px] mb-[38px]" onClick={() => navigate(-1)}>
          Go Back
        </button>

        <div className="flex gap-[30px]">
          <div className="bg-white basis-[67%] px-0">
            <h3 className="mb-[41px] p-8">checkout</h3>
            <CheckoutForm
              onValidityChange={setIsFormValid}
              onFormChange={setFormData} // <-- pass setter here
            />
          </div>

          <div className="bg-white basis-[31%] p-6">
            <h4 className="mb-6">Order Summary</h4>
            <div className="flex flex-col gap-4">
              {(state.cart || []).length > 0 ? (
                (state.cart || []).map((it, i) => (
                  <div key={i} className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-offwhite">
                      <img
                        src={it.image}
                        alt={it.name || it.title}
                        className="object-cover scale-[0.7] rounded"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="text-sm font-medium">
                        {it.name || it.title}
                      </div>
                      <div className="text-sm text-gray-500">${it.price}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-7 text-center">{it.qty || 1}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-600">
                  Your cart is empty
                </div>
              )}

              <div className="flex items-center justify-between font-bold border-t pt-4 mt-4">
                <div>Subtotal</div>
                <div>${subtotal.toFixed(2)}</div>
              </div>

              <button
                className={`mt-6 w-full py-3 rounded ${
                  isFormValid
                    ? "bg-primary cursor-pointer text-white"
                    : "bg-black/10  text-white/80 cursor-not-allowed"
                }`}
                onClick={handleCheckout} // <- call handleCheckout
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
