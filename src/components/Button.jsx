const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-40 bg-primary cursor-pointer text-white h-12"
    >
      {label}
    </button>
  );
};

export default Button;
