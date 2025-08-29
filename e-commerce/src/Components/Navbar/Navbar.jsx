import React from "react";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
// import { IoRocketOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="short-by">
          <Button className="nav-btn icon text" variant="text">
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
            <li><Link  to="/"className="nav-link">Home</Link></li>
            <li><Link to="/" className="nav-link">Fashion</Link></li>
            <li><Link to ="/"className="nav-link">Electronics</Link></li>
            <li><Link to ="/"className="nav-link">Bags</Link></li>
            <li><Link to ="/"className="nav-link">Beauty</Link></li>
            <li><Link to ="/" className="nav-link">Wellness</Link></li>
            <li><Link to ="/"className="nav-link"> Jewellary</Link></li>
            <li><Link  to ="/"className="nav-link">Footwear</Link></li>
          </ul>
        </div>

        <div className="delivery">
          <Button variant="text" className="nav-btn text">
            {/* <IoRocketOutline /> */}
            <span className="menu"><CiDeliveryTruck />
</span>

            All Over Nepal Delivery
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
