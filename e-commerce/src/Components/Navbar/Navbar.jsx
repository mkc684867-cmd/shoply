import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [catIndex, setCatIndex] = useState(null);
  const categories = [
    {
      name: "Fashion",
      subcategories: ["Men", "Women", "Kids", "Boys", "Girls", "Accessories"],
    },
    {
      name: "Electronics",
      subcategories: ["TVs", "Audio", "Cameras", "Gaming", "Accessories"],
    },
    {
      name: "Mobile",
      subcategories: ["Smartphones", "Tablets", "Wearables", "Accessories"],
    },
    {
      name: "Laptops",
      subcategories: ["Gaming", "Business", "Ultrabooks", "Accessories"],
    },
    {
      name: "Smart Watch",
      subcategories: ["Fitness", "Luxury", "Sports", "Basic"],
    },
    {
      name: "Chargers",
      subcategories: [
        "Wireless",
        "Fast Charging",
        "Car Chargers",
        "Power Banks",
      ],
    },
    {
      name: "Bags",
      subcategories: ["Backpacks", "Handbags", "Travel", "Laptop Bags"],
    },
    {
      name: "Footwear",
      subcategories: ["Sports", "Casual", "Formal", "Sandals"],
    },
  ];

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleCategory = (index) => {
    if (catIndex === index) {
      setCatIndex(null);
    } else {
      setCatIndex(index);
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="short-by">
          <Button
            className="nav-btn icon text"
            onClick={toggleSidebar}
            variant="text"
          >
            <span className="menu icon">
              <IoIosMenu />
            </span>
            Shop by Category
            <span className="arrow icon">
              {" "}
              <IoIosArrowDown />
            </span>
          </Button>
        </div>

        <div className="nav-bar">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/" className="nav-link">
                Fashion
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/" className="nav-link">
                    <Button variant="text" className="nav-btn">
                      Men
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    <Button variant="text" className="nav-btn">
                      Women
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    <Button variant="text" className="nav-btn">
                      Girls
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    <Button variant="text" className="nav-btn">
                      Kids
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    <Button variant="text" className="nav-btn">
                      Boys
                    </Button>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/" className="nav-link">
                Electronics
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/"} className="nav-link">
                  <Button variant="text" className="nav-btn">TVs</Button>
                  </Link>
                  </li>
                <li>
                  <Link to={"/"} className="nav-link">
                  <Button variant="text" className="nav-btn">Audio</Button>
                  </Link>
                  </li>
                <li>
                  <Link>
                  <Button variant="text" className="nav-btn">Cameras</Button>
                  </Link>
                  </li>
                <li>
                  <Link >
                  <Button variant="text" className="nav-btn">Gaming</Button>
                  </Link>
                  </li>
                <li>Accessories</li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/" className="nav-link">
                Bags
              </Link>
              <ul className="dropdown-menu">
                <li>Men</li>
                <li>Women</li>
              </ul>
            </li>
            <li>
              <Link to="/" className="nav-link">
                Beauty
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                Wellness
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                {" "}
                Jewellary
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/" className="nav-link">
                Footwear
              </Link>
              <ul className="dropdown-menu">
                <li>Men Footwear</li>

                <li>Women Footwear</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="delivery">
          <Button variant="text" className="nav-btn text">
            <span className="arrow icon">
              <CiDeliveryTruck />
            </span>
            All Over Nepal Delivery
          </Button>
        </div>
      </div>
      <div className={sidebar ? "sidebar-active" : "sidebar"}>
        <div className="logo-container">
          <h2 className="logo">SHOPLY</h2>
          <h4 className="mart">Big Mega Mart </h4>
        </div>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              <div
                className="categorys-items"
                onClick={() => toggleCategory(index)}
              >
                <span className="category-name">{category.name}</span>
                <span className="arrow">
                  <IoIosArrowDown />
                </span>
              </div>

              {/* Subcategories */}
              <ul
                className={`subcategory-list ${
                  catIndex === index ? "expanded" : ""
                }`}
              >
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex} className="subcategory-item">
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
