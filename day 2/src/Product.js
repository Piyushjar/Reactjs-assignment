import React from "react";
import "./Product.css";
function Product() {
  const list = ["Headphones", "Mobiles", "Laptops", "Keyboards"];
  return (
    <div>
      <h2>Our Products</h2>
      <div>
        {list.map((product) => (
          <h4 className="product">{product}</h4>
        ))}
      </div>
    </div>
  );
}
export default Product;
