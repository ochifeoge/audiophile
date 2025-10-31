import { useContext } from "react";
import { AppContext } from "../AppProvider";

const Cart = () => {
  const { state, dispatch, setShowCart } = useContext(AppContext);

  const total = (state.cart || []).reduce(
    (acc, item) => acc + (item.price || 0) * (item.qty || 1),
    0
  );

  return (
    <>
      {/* dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-40"
        onClick={() => setShowCart(false)}
        aria-hidden="true"
      />

      {/* cart popup */}
      <div
        className="fixed z-50 bg-white text-black shadow-lg"
        style={{
          width: "377px",
          height: "488px",
          top: "129px",
          right: "24px",
          borderRadius: "8px",
        }}
        onClick={(e) => e.stopPropagation()} // prevent backdrop click when interacting with cart
      >
        <div className="p-[33px] flex flex-col gap-8 h-full">
          <div className="flex items-center justify-between mb-6">
            <h6 className="">Cart ({state.cart?.length || 0})</h6>
            <button>
              <p className="opacity-50">Remove All</p>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {state.cart && state.cart.length > 0 ? (
              state.cart.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image || item.img || "/public/heroimg.png"}
                    alt={item.name || item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium">
                      {item.name || item.title}
                    </div>
                    <div className="text-sm text-gray-500">${item.price}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREASE_BY_ONE", payload: item })
                      }
                      className="w-7 h-7 border"
                    >
                      -
                    </button>
                    <div className="w-7 text-center">{item.qty}</div>
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE_BY_ONE", payload: item })
                      }
                      className="w-7 h-7 border"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-600">
                Your cart is empty
              </div>
            )}
          </div>

          <div className="">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Total</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => {
                dispatch({ type: "EMPTY_CART" });
              }}
              className="w-full bg-black text-white py-3 rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
