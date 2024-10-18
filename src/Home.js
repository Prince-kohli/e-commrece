import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "./products.json";
import Pagination from "./Pagination";
import { productData } from "./Context";

const Home = () => {
  const [data, setdata] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const { item, setItem, cartItemlenght } = useContext(productData);

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e) => {
    const searchdata = e.target.value;
    if (searchdata.length > 2) {
      const filterItem = data?.filter((item) =>
        item?.title.toLowerCase().includes(searchdata)
      );

      setdata(filterItem);
    } else {
      setdata(products);
    }
  };

  const electronics = () => {
    const electronics = products?.filter(
      (item) => item.category.name === "Electronics"
    );

    setdata(electronics);
  };

  const shoes = () => {
    const shoes = products?.filter((item) => item.category.name === "Shoes");
    setdata(shoes);
  };

  const Shirts = () => {
    const furniture = products?.filter(
      (item) => item.category.name === "Furniture"
    );
    setdata(furniture);
  };

  const handleCart = (product) => {
    // const singleProduct = data.filter((num) => num.id === product.id);
    const updatedItems = [...item, product];
    setItem(updatedItems);
  };

  return (
    <>
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
            style={{ marginLeft: 30, width: 550 }}
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
                  style={{ marginLeft: 10 }}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link active"
                  href="#"
                  style={{ marginLeft: 5 }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item dropdown" style={{ marginLeft: 2 }}>
                <a
                  class="nav-link dropdown-toggle"
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

              <li class="nav-item" style={{ marginTop: 10, marginLeft: 5 }}>
                <Link to="/addCart">
                  {" "}
                  {cartItemlenght === 0 ? (
                    <i class="fa-solid fa-cart-shopping"> </i>
                  ) : (
                    <>
                      <i class="fa-solid fa-cart-shopping"> </i>
                      <span class="badge badge-warning" id="lblCartCount">
                        {cartItemlenght}
                      </span>
                    </>
                  )}
                </Link>
              </li>
              <li class="nav-item" style={{ marginTop: 10, marginLeft: 0 }}>
                <p>Cart</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1e513363d2412d0a.jpg?q=20"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/354cde8026deab5a.jpg?q=20"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bdd9bb733f1c0b71.jpg?q=20"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid">
        <div className="cards">
          {currentProducts?.length !== 0 ? (
            currentProducts?.map((product) => (
              <div className="card1">
                <div className="card" key={product?.id}>
                  <img
                    src={product?.images[0]}
                    class="card-img-top"
                    alt="..."
                    height={266}
                    width={266}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product?.category?.name}</h5>

                    <p className="card-text">{product?.title}</p>
                    <div className="row footr">
                      <div className="col-sm-6">
                        <p className="text1 card-text">${product?.price}</p>
                      </div>
                      <div className="col-sm-6">
                        <button
                          className="btn btn-warning"
                          onClick={() => handleCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>User not found</h1>
          )}
        </div>

        <div className="pagination">
          <div className="row">
            <div className="left col-sm-6"></div>
            <Pagination
              productsPerPage={productsPerPage}
              totalProduct={data.length}
              paginate={paginate}
              activePage={currentPage}
            />
            <div className="right col-sm-6"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer ">
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
    </>
  );
};

export default Home;
