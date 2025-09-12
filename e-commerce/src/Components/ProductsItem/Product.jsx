import Button from "@mui/material/Button";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Product = ({
  image,
  discount,
  brand,
  name,
  rating,
  price,
  originalPrice,
}) => {
  return (
    <div className="product-list">
      <img className="product-img" src={image} alt={name} />
      <div className="discount">{discount}% OFF</div>
      <div className="product-details">
        <p>{brand}</p>
        <h3>{name}</h3>
        <div className="rating">
          {"★".repeat(rating)} ({rating}/5)
        </div>
        <div className="price-container">
          <div className="original-price">Rs{originalPrice}</div>
          <div className="discounted-price">Rs{price}</div>
        </div>
        <div className="add-cart">
          <Button variant="outlined" className="add-to-cart">
            <MdOutlineShoppingCart /> ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;