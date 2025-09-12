import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";
import Button from "@mui/material/Button";
import fashion1 from "../../assets/images/fashion1.jpg"; // Fixed typo
import Product from "./Product";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ProductItem = () => {
  const scrollRef = useRef();

  const products = [
    { name: "Women Wide Leg High-Rise", brand: "Flying Machine", price: 999.0, originalPrice: 1200.0, discount: 8, rating: 4, image: fashion1 },
    { name: "collar printed", brand: "#Diva mandarin", price: 999.0, originalPrice: 1300.0, discount: 8, rating: 5, image: fashion1 },
    { name: "Men Opaque Casual Shirt", brand: "CLAFOUTIS", price: 785.0, originalPrice: 1000.0, discount: 10, rating: 4, image: fashion1 },
    { name: "Men Comfort Cuban Collar", brand: "Campus Sutra", price: 1450.0, originalPrice: 1800.0, discount: 14, rating: 5, image: fashion1 },
    { name: "Men Pure Cotton Striped", brand: "Allen Solly", price: 1800.0, originalPrice: 2000.0, discount: 10, rating: 4, image: fashion1 },
    { name: "Embroidered Satin Saree", brand: "all about you", price: 999.0, originalPrice: 1200.0, discount: 13, rating: 5, image: fashion1 },
    { name: "Embroidered", brand: "Kasee", price: 4785.0, originalPrice: 5000.0, discount: 12, rating: 4, image: fashion1 },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      console.log("Scrolling left"); 
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      console.log("Scrolling right"); 
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="product-item">
      <div className="product-item-header">
        <div className="heading">
          <h2>Popular Products</h2>
          <p className="offer">Do not miss the current offers until the end of March</p>
        </div>
        <ul className="links-tab">
          {["FASHION", "ELECTRONICS", "FOOTWEAR", "GROCERIES", "BEAUTY", "WELLNESS", "JEWELLERY"].map((item) => (
            <li key={item}>
              <Link>
                <Button variant="text" className="nav-link">
                  {item}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="products" style={{ position: "relative" }}>
        {/* Left Button */}
        <button className="scroll-btns left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        {/* Scrollable Container */}
        <div className="product-slider-container" ref={scrollRef}>
          {products.map((p) => (
            <Product
              key={p.name}
              image={p.image}
              discount={p.discount}
              brand={p.brand}
              name={p.name}
              rating={p.rating}
              originalPrice={p.originalPrice}
              price={p.price}
            />
          ))}
        </div>

        {/* Right Button */}
        <button className="scroll-btns right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;