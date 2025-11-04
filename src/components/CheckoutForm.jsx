import { useState, useContext, useEffect } from "react";
import { AppContext } from "../AppProvider";

const FieldLabel = ({ label, error }) => (
  <div className="flex items-center justify-between mb-2">
    <label className="text-sm font-medium">{label}</label>
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);

const Input = ({ name, value, onChange, error, placeholder }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{ width: 309, height: 56, borderRadius: 8 }}
    className={`px-4 py-2 border ${
      error
        ? "border-red-500 focus:border-red-500 outline-none"
        : "border-gray-300"
    }`}
  />
);

const CheckoutForm = ({ onValidityChange, onFormChange }) => {
  const { state } = useContext(AppContext);

  const [billing, setBilling] = useState({ name: "", email: "", phone: "" });
  const [shipping, setShipping] = useState({
    address: "",
    zip: "",
    city: "",
    country: "",
  });

  const [selected, setSelected] = useState("e-money");
  const [eMoneyDetails, setEMoneyDetails] = useState({
    number: "",
    pin: "",
  });
  const [errors, setErrors] = useState({});

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBilling((s) => ({ ...s, [name]: value }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShipping((s) => ({ ...s, [name]: value }));
  };

  const handleEMoneyDetailsChange = (e) => {
    const { name, value } = e.target;
    setEMoneyDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!billing.name.trim()) err.name = "Required";
    if (!billing.email.trim()) err.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(billing.email))
      err.email = "Invalid email";
    if (!billing.phone.trim()) err.phone = "Required";

    // shipping address optional but address should be present
    if (!shipping.address.trim()) err.address = "Required";
    if (!shipping.city.trim()) err.city = "Required";
    if (!eMoneyDetails.number.trim()) err.number = "Required";
    if (!eMoneyDetails.pin.trim()) err.pin = "Required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // For now just log values. In real app you'd send to server or proceed to payment.
    console.log({ billing, shipping, cart: state.cart });
    alert("Checkout submitted (demo)");
  };

  // compute live validity and inform parent
  useEffect(() => {
    const isEmailValid =
      billing.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(billing.email);
    const basicValid =
      billing.name.trim() &&
      isEmailValid &&
      billing.phone.trim() &&
      shipping.address.trim() &&
      shipping.city.trim();
    const paymentValid =
      selected === "cash" ||
      (eMoneyDetails.number.trim() && eMoneyDetails.pin.trim());
    const isValid = Boolean(basicValid && paymentValid);
    if (typeof onValidityChange === "function") onValidityChange(isValid);
  }, [billing, shipping, selected, eMoneyDetails, onValidityChange]);

  // report current form data to parent whenever it changes
  useEffect(() => {
    if (typeof onFormChange === "function") {
      onFormChange({
        billing: { ...billing },
        shipping: { ...shipping },
        payment:
          selected === "e-money"
            ? { method: "e-money", ...eMoneyDetails }
            : { method: selected },
      });
    }
  }, [billing, shipping, selected, eMoneyDetails, onFormChange]);

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <section className="mb-8">
        <h4 className="mb-6 sub-title text-pretty text-primary">
          Billing Address
        </h4>

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col" style={{ flexBasis: "48%" }}>
            <FieldLabel label="Name" error={errors.name} />
            <Input
              name="name"
              value={billing.name}
              onChange={handleBillingChange}
              error={errors.name}
              placeholder="Full name"
            />
          </div>

          <div className="flex flex-col" style={{ flexBasis: "48%" }}>
            <FieldLabel label="Email Address" error={errors.email} />
            <Input
              name="email"
              value={billing.email}
              onChange={handleBillingChange}
              error={errors.email}
              placeholder="email@example.com"
            />
          </div>

          <div className="flex flex-col" style={{ flexBasis: "48%" }}>
            <FieldLabel label="Phone Number" error={errors.phone} />
            <Input
              name="phone"
              value={billing.phone}
              onChange={handleBillingChange}
              error={errors.phone}
              placeholder="Phone number"
            />
          </div>
        </div>
      </section>

      <section className="mb-[61px]">
        <h4 className="mb-6 sub-title  text-primary">Shipping Info</h4>

        <div className="flex flex-col gap-4">
          <div>
            <FieldLabel label="Address" error={errors.address} />
            <input
              name="address"
              value={shipping.address}
              onChange={handleShippingChange}
              placeholder="Street address"
              style={{ width: "100%", height: 56, borderRadius: 8 }}
              className={`px-4 py-2 border ${
                errors.address
                  ? "border-red-500 focus:border-red-500 outline-none"
                  : "border-gray-300"
              }`}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div style={{ flexBasis: "48%" }}>
              <FieldLabel label="ZIP Code" />
              <input
                name="zip"
                value={shipping.zip}
                onChange={handleShippingChange}
                placeholder="ZIP code"
                style={{ width: 309, height: 56, borderRadius: 8 }}
                className="px-4 py-2 border border-gray-300"
              />
            </div>
            <div style={{ flexBasis: "48%" }}>
              <FieldLabel label="City" />
              <input
                name="city"
                value={shipping.city}
                onChange={handleShippingChange}
                placeholder="city"
                style={{ width: 309, height: 56, borderRadius: 8 }}
                className="px-4 py-2 border border-gray-300"
              />
            </div>

            <div style={{ flexBasis: "48%" }}>
              <FieldLabel label="Country" />
              <input
                name="country"
                value={shipping.country}
                onChange={handleShippingChange}
                placeholder="Country"
                style={{ width: 309, height: 56, borderRadius: 8 }}
                className="px-4 py-2 border border-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h4 className="sub-title mb-4 text-primary"> payment details</h4>

        <div className="flex justify-between">
          <p className="text-sm  ">Payment Method</p>
          <div className="space-y-4">
            {/* e-money */}
            <button
              onClick={() => setSelected("e-money")}
              className={`w-[309px] flex items-center gap-4 h-14 cursor-pointer transition duration-150 ps-4 rounded-xl border
          ${
            selected === "e-money" ? "border-primary" : "hover:border-primary"
          }`}
            >
              <span
                className={`relative w-5 h-5 rounded-full border-2 flex items-center justify-center 
            ${selected === "e-money" ? "border-offwhite" : ""}`}
              >
                {selected === "e-money" && (
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                )}
              </span>
              <p className="text-sm font-bold">e-money</p>
            </button>

            {/* Cash on Delivery */}
            <button
              onClick={() => setSelected("cash")}
              className={`w-[309px] flex items-center gap-4 h-14 cursor-pointer transition duration-150 ps-4 rounded-xl border
          ${selected === "cash" ? "border-primary" : "hover:border-primary"}`}
            >
              <span
                className={`relative w-5 h-5 rounded-full border-2 flex items-center justify-center 
            ${selected === "cash" ? "border-offwhite" : ""}`}
              >
                {selected === "cash" && (
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                )}
              </span>
              <p className="text-sm font-bold">Cash on Delivery</p>
            </button>
          </div>
        </div>
      </section>
      {selected === "e-money" ? (
        <div className="flex flex-wrap gap-4 mt-20">
          <div className="flex flex-col" style={{ flexBasis: "48%" }}>
            <FieldLabel label="e-Money Number" error={errors.number} />
            <Input
              name="number"
              value={eMoneyDetails.number}
              onChange={handleEMoneyDetailsChange}
              error={errors.number}
              placeholder="2627218262"
              type="text"
            />
          </div>

          <div className="flex flex-col" style={{ flexBasis: "48%" }}>
            <FieldLabel label="e-Money PIN" error={errors.pin} />
            <Input
              name="pin"
              value={eMoneyDetails.pin}
              onChange={handleEMoneyDetailsChange}
              error={errors.pin}
              placeholder="8674"
              type="text"
            />
          </div>
        </div>
      ) : (
        <footer className="flex 8 mt-20 justify-between">
          <div className="h-10 w-10 border "></div>
          <p className="opacity-50 basis-[90%]">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </footer>
      )}
    </form>
  );
};

export default CheckoutForm;
