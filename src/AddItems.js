import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import products from "./products.json";
import { productData } from "./Context";

const AddItems = () => {
  const [data, setdata] = useState(products);
  const { output, setItem } = useContext(productData);
  const [singleProduct, setSingleProduct] = useState(output);

  const removeItem = (item) => {
    const remove = singleProduct?.filter(
      (items) => items[0]?.id !== item[0]?.id
    );
    setSingleProduct(remove);
    setItem(remove);
    localStorage.setItem("Cart", JSON.stringify(remove));
  };

  const length = singleProduct.length;

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

  const handleIncrese = (items) => {
    const b = (items[0].qty += 1);
    setSingleProduct([...singleProduct]);
    localStorage.setItem("Cart", JSON.stringify(singleProduct, b));
  };
  const handleDecrese = (items) => {
    if (items[0].qty > 1) {
      items[0].qty -= 1;
    }

    setSingleProduct([...singleProduct]);
    localStorage.setItem("Cart", JSON.stringify(singleProduct));
  };
  const calculatePrice = (item) => {
    return item[0]?.qty * item[0]?.price;
  };

  const total = singleProduct.reduce((acc, item) => {
    return acc + item[0].qty * item[0].price;
  }, 0);

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
              <li class="nav-item">
                <Link class="nav-link active" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {singleProduct.length === 0 ? (
        <div>
          <img
            className="img"
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          />
          <h4>Your cart is empty!</h4>
          <h6>Add items to it now.</h6>
          <Link
            class=" btn  btn-primary"
            to="/"
            role="button"
            style={{
              width: 300,
              height: 40,
              textAlign: "center",
              marginTop: 5,
            }}
          >
            Shop now
          </Link>
        </div>
      ) : (
        <div className="container" style={{ marginTop: 20 }}>
          <div className="row">
            <div className="col-sm-6">
              <div className="container">
                {singleProduct?.map((items) => (
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={items[0]?.images}
                          class="img-fluid rounded-start"
                          alt="..."
                          style={{ marginRight: 10 }}
                        />
                      </div>
                      <div class="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            {items[0]?.category?.name}
                          </h5>
                          {/* <h6 className="card-text">{item?.title}</h6> */}
                          <p
                            className=" card-text"
                            style={{ textAlign: "left", fontSize: "small" }}
                          >
                            {items[0]?.description}
                          </p>
                          <h3
                            className="card-text"
                            style={{ textAlign: "left" }}
                          >
                            $ {calculatePrice(items)}
                          </h3>
                          <div className="">
                            <div className="row">
                              <div className=" counter  col-sm-6">
                                <button
                                  className="butn "
                                  onClick={() => handleDecrese(items)}
                                >
                                  -
                                </button>
                                <h6>{items[0]?.qty}</h6>

                                <button
                                  className="butn "
                                  onClick={() => handleIncrese(items)}
                                >
                                  +
                                </button>
                              </div>
                              <div className="col-sm-6">
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => removeItem(items)}
                                >
                                  Remove item
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="header">
                <h4>PRICE DETAILS</h4>
                <div className="desc">
                  <div className="row">
                    <div className="descs  col-sm-6">
                      <h6>Price({length} item)</h6>
                      <h6>Discount</h6>
                      <h6>Delivery Charges</h6>
                      <h6 className="total">Total Amount</h6>
                    </div>
                    <div className="col-sm-6">
                      <h6>${total}</h6>
                      <h6>00</h6>
                      <h6>Free</h6>
                      <h6>${total}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItems;
