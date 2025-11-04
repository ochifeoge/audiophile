const QuanitityInput = ({ onIncrease, onDecrease, cartQuantity }) => {
  return (
    <div className="relative w-[120px] bg-offwhite h-12">
      <button
        className="absolute top-1/2 left-[15.5px] -translate-y-1/2 opacity-25 z-30 cursor-pointer"
        onClick={() => onDecrease()}
      >
        -
      </button>
      <input
        className="absolute w-[50%]  h-full top-1/2 left-1/2 -translate-1/2 "
        value={cartQuantity}
      />
      <button
        className="absolute top-1/2 right-[15.5px] flex-items-center justify-center -translate-y-1/2 opacity-25 z-30 cursor-pointer"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuanitityInput;
