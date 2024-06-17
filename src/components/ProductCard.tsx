import React from "react";

export type ProductCardPropType = {
  id: number;
  image?: string;
  title?: string;
  description?: string;
  category?: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductCardProp = {
  product: ProductCardPropType;
  newProduct: boolean;
};

const ProductCard: React.FC<ProductCardProp> = ({ product, newProduct }) => {
  const { image, title, category } = product;

  return (
    <div className="card w-full md:w-96 bg-zinc-700 shadow-xl cursor-pointer h-full">
      <figure>
        <img
          src={
            image
              ? image
              : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt={title ? title : "Dummy Image"}
          className="object-cover w-full h-60 md:h-60"
        />
      </figure>
      <div className="card-body p-4 flex flex-col justify-between">
        <h2 className="card-title">
          {title ? title : "Untitled"}
          {newProduct && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <div className="card-actions justify-between items-center">
          {category && <div className="badge badge-outline">{category}</div>}
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
