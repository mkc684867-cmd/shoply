import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@mui/material/Button";

import adv1 from "../../assets/images/adv1.jpg";
import adv2 from "../../assets/images/adv2.jpg";
import adv3 from "../../assets/images/adv3.jpg";
import adv44 from "../../assets/images/adv44.jpg";
import adv5 from "../../assets/images/adv5.jpg";
import adv6 from "../../assets/images/adv6.jpg";
import adv8 from "../../assets/images/adv8.jpg";
import headphone from "../../assets/images/headphone.jpg";
import addidasback from "../../assets/images/addidasback.jpg";
import whatch from "../../assets/images/whatch.jpg";
import airbods from "../../assets/images/airbods.jpg";
import shoes from "../../assets/images/shoes.jpg";
import iphone from "../../assets/images/iphone.jpg";

import "./AddSlider.css";

const AddSlider = () => {
  const slides = [
    { id: 1, title: "Samsung 55-inch 4K Smart TV", subtitle: "Dashain Tihar Offer", price: "₹45,000.00", image: adv1 },
    { id: 2, title: "Nike Air Max Shoes - Black", subtitle: "Dashain Tihar Offer", price: "₹8,500.00", image: adv3 },
    { id: 3, title: "Levi's Slim Fit Jeans - Blue", subtitle: "Dashain Tihar Offer", price: "₹3,200.00", image: adv8 },
    { id: 4, title: "Sony Wireless Headphones", subtitle: "Dashain Tihar Offer", price: "₹12,000.00", image: headphone },
    { id: 5, title: "Ray-Ban Aviator Sunglasses", subtitle: "Dashain Tihar Offer", price: "₹9,800.00", image: adv44 },
    { id: 6, title: "KitchenAid Stand Mixer - Red", subtitle: "Dashain Tihar Offer", price: "₹25,000.00", image: adv5 },
    { id: 7, title: "Adidas Sports Backpack", subtitle: "Dashain Tihar Offer", price: "₹4,500.00", image: addidasback },
    { id: 8, title: "Dyson V10 Vacuum Cleaner", subtitle: "Dashain Tihar Offer", price: "₹35,000.00", image: adv6 },
    { id: 9, title: "Tissot Gentleman Watch", subtitle: "Dashain Tihar Offer", price: "₹18,000.00", image: whatch },
    { id: 10, title: "Philips Air Fryer - 4.5L", subtitle: "Dashain Tihar Offer", price: "₹7,500.00", image: airbods },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="promo-flex">
      {/* Left slider */}
      <div className="slider">
        <div className="slider-content">
          <img className="slider-content-img" src={slides[currentIndex].image} alt={slides[currentIndex].title} />
          <div className="slider-text">
            <p className="slider-subtitle">{slides[currentIndex].subtitle}</p>
            <p className="slider-title">{slides[currentIndex].title}</p>
            <p className="slider-price">{`Starting at only ${slides[currentIndex].price}`}</p>
            <Button variant="outlined" className="shop-btn">Shop Now</Button>
          </div>
        </div>

        <button className="arrowww left" onClick={prevSlide}><FaChevronLeft /></button>
        <button className="arrowww right" onClick={nextSlide}><FaChevronRight /></button>
      </div>

      {/* Right stacked ads */}
      <div className="ads">
        <div className="ad-card blue">
          <div>
            <h3>Buy Men's Footwear with low price</h3>
            <p className="price">₹1500</p>
            <button className="link-btn">Shop Now</button>
          </div>
          <img src={shoes} alt="Footwear" />
        </div>

        <div className="ad-card green">
          <div>
            <h3>Buy Apple iPhone</h3>
            <p className="price">₹75,000</p>
            <button className="link-btn">Shop Now</button>
          </div>
          <img src={iphone} alt="iPhone" />
        </div>
      </div>
    </div>
  );
};

export default AddSlider;
