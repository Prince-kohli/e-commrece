import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import products from "./products.json";
import { productData } from "./Context";

const AddItems = () => {
  const [data, setdata] = useState(products);

  const product = useContext(productData);
  console.log("Products", product);
  const singleProducts = product.Provider[0];
  const [singleProduct, setSingleProduct] = useState(singleProducts);
  const removeItem = (item) => {
    const remove = singleProduct.filter((items) => items.id !== item.id);
    setSingleProduct(remove);
  };

  const length = singleProduct.length;
  const totalprice = product.Provider[1];

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

      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-sm-6">
            <div className="container">
              {singleProduct.length === 0 ? (
                <h1> Add Product</h1>
              ) : (
                singleProduct?.map((item) => (
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={item?.images}
                          class="img-fluid rounded-start"
                          alt="..."
                          style={{ marginRight: 10 }}
                        />
                      </div>
                      <div class="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item?.category?.name}</h5>
                          {/* <h6 className="card-text">{item?.title}</h6> */}
                          <p
                            className=" card-text"
                            style={{ textAlign: "left", fontSize: "small" }}
                          >
                            {item?.description}
                          </p>
                          <h3
                            className="card-text"
                            style={{ textAlign: "left" }}
                          >
                            ${item?.price}
                          </h3>
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => removeItem(item)}
                          >
                            Remove item
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
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
                    <h6>${totalprice}</h6>
                    <h6>00</h6>
                    <h6>Free</h6>
                    <h6>${totalprice}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
