const ShowCase = ({ itemsArray }) => {
  return (
    <div className="inner-container">
      {itemsArray.map(({ title, text, subText, img }, index) => (
        <div className="flex items-center justify-between mb-40" key={index}>
          <div
            className={`bg-offwhite rounded basis-[48%] ${
              (index + 1) % 2 === 0 ? "order-1" : ""
            }`}
          >
            <img
              src={img}
              alt="speaker 1"
              className="mx-auto object-contain max-h-[385px] scale-[.8]"
            />
          </div>

          <div className="basis-[48%]  ">
            {subText && (
              <h4 className="over-line   text-primary mb-4">{subText}</h4>
            )}
            <h1 className="mb-8">{title}</h1>
            <p className="mb-10">{text}</p>
            <button>See Products</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
