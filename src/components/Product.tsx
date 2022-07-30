import { IProduct } from "../models";
import { useState } from "react";
interface ProductProps {
  product: IProduct;
}
const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  const btnBgClass = details ? "bg-blue-400" : "bg-yellow-400";
  const btnBgClasses = ["py-2 px-4 border", btnBgClass];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p> {product.title} </p>
      <span className="font-bold">{product.price}$</span>
      <button
        className={btnBgClasses.join(" ")}
        onClick={() => setDetails(!details)}
      >
        {details ? " Hide description" : "Show description"}
      </button>
      {details ? (
        <div>
          <p>{product.description}</p>
          <p>
            Rating:{" "}
            <span style={{ fontWeight: "bold" }} >{product?.rating?.rate}</span>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
