import QuanitityInput from "./QuanitityInput";

function CartItem() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* img */}
        <div className="h-16 w-16 bg-offwhite rounded"></div>

        <div>
          <p>XX99 MK II</p>
          <p className="over-line">$ 2,999</p>
        </div>
      </div>
      <QuanitityInput />
    </div>
  );
}

export default CartItem;
