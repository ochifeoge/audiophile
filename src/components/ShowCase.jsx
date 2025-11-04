import { useNavigate } from "react-router";
import Button from "./Button";

const ShowCase = ({ itemsArray }) => {
  const navigate = useNavigate();
  return (
    <div className="inner-container">
      {itemsArray?.map(({ name, _id, description, isNew, imageUrl }, index) => (
        <div
          className="flex flex-col lg:flex-row items-center justify-between mb-40"
          key={index}
        >
          <div
            className={`bg-offwhite rounded basis-[48%] ${
              (index + 1) % 2 === 0 ? "order-1" : ""
            }`}
          >
            <img
              src={imageUrl}
              alt="speaker 1"
              className="mx-auto object-contain h-[385px] max-h-[385px] scale-[.8]"
            />
          </div>

          <div className="basis-[48%] max-md:text-center  ">
            {isNew && (
              <h4 className="over-line   text-primary mb-4">{"NEW PRODUCT"}</h4>
            )}
            <h1 className="mb-8">{name}</h1>
            <p className="mb-10">{description}</p>
            <Button
              onClick={() => navigate(`/product/${_id}`)}
              label={"See Products"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
