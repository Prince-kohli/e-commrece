import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import products from "./products.json";
// import axios from "axios";

const About = () => {
  const [data, setdata] = useState(products);

  const handleChange = (e) => {
    const searchdata = e.target.value;
    if (searchdata.length > 2) {
      const filterItem = data?.filter((item) =>
        item.title.includes(searchdata)
      );
      console.log("filter", filterItem);
      setdata(filterItem);
    } else {
      setdata(products);
    }
  };

  const electronics = () => {
    const filters = data.filter((item) => item.category.name === "Electronics");

    setdata(filters);
  };

  const shoes = () => {
    const filters = data.filter((item) => item.category.name === "Shoes");
    setdata(filters);
  };

  const Shirts = () => {
    const filters = data.filter((item) => item.category.name === "Furniture");
    setdata(filters);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <Link to="/">
            <a class="navbar-brand" href="">
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
            </a>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <form
            class="d-flex"
            role="search"
            style={{ marginLeft: 30, width: 600 }}
          >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
            />
          </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  style={{ marginLeft: 40 }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  href="#"
                  style={{ marginLeft: 10 }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item dropdown" style={{ marginLeft: 10 }}>
                <a
                  class="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  category
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#" class="dropdown-item" onClick={electronics}>
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item" onClick={shoes}>
                      Shoes
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a href="#" class="dropdown-item" onClick={Shirts}>
                      Furniture
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1>About </h1>

      <div className="container-fluid footer" style={{ marginTop: 200 }}>
        <div className="row ">
          <div className="col-sm-2">
            <h6 style={{ marginTop: 20 }}>ABOUT</h6>
            <div className="iner">
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Careers</p>
              <p>Flipkart Stories</p>
              <p>Press</p>
              <p>Corporate Information</p>
            </div>
          </div>
          <div className="col-sm-2 container  ">
            <h6 style={{ marginTop: 20 }}>GROUP COMPANIES </h6>
            <div className="iner">
              <p>Myntra</p>
              <p>ClearTrip</p>
              <p>Shopsy</p>
            </div>
          </div>
          <div className="col-sm-2 container  ">
            <h6 style={{ marginTop: 20 }}>HELP</h6>
            <div className="iner">
              <p>Payments</p>
              <p>Shipping</p>
              <p>Cancellation & Return</p>
              <p>FAQ</p>
              <p>Report Infringement</p>
            </div>
          </div>
          <div className="col-sm-2 container  ">
            <h6 style={{ marginTop: 20 }}>CONSUMER POLICY</h6>
            <div className="iner">
              <p>Cancellation & Return</p>
              <p>Security</p>
              <p>Privacy</p>
              <p>Sitemap</p>
              <p>Grievance Redressal</p>
              <p>ERP Compliance</p>
            </div>
          </div>
          <div className="col-sm-2 container  ">
            <h6 style={{ marginTop: 20 }}>Mail Us</h6>
            <div className="iner-1">
              <p>Flipkart Internet Private Limited</p>
              <p>Buildings Alyssa, Begonia & Colve Embassy Tech Village, </p>
              <p>Outer Ring Road, Devarabeesannahalli Village,</p>
              <p>Bengaluru, 560103</p>
              <p>Krnatka, India</p>
              <p>Social :</p>
            </div>
            <div className="icon">
              <div className="row">
                <div className="col-sm-4">
                  <i
                    class="fa-brands fa-instagram"
                    style={{ color: "#f7f7f7" }}
                  ></i>
                </div>
                <div className="col-sm-4">
                  <i
                    class="fa-brands fa-x-twitter fa-rotate-90"
                    style={{ color: "#f7f7f7" }}
                  ></i>
                </div>
                <div className="col-sm-4">
                  <i
                    class="fa-brands fa-youtube"
                    style={{ color: "#f7f7f7" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2 container ">
            <h6 style={{ marginTop: 20 }}>Registered Office Address</h6>
            <div className="iner-1">
              <p>Flipkart Internet Private Limited</p>
              <p>Buildings Alyssa, Begonia & Colve Embassy Tech Village, </p>
              <p>Outer Ring Road, Devarabeesannahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Krnatka, India</p>
              <p>CIN : U515546652CSD64</p>
              <p>Telephone: 044-456147700 / 044-67415800 </p>
            </div>
          </div>
          <hr className="hr"></hr>
          <div className="footerEnd">
            <div className="row">
              <div className="col-sm-12">
                <h6>Copyright (c) 2024 Flipkart</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
