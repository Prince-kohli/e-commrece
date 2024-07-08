import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import axios from "axios";

const Data = () => {
  const [data, setdata] = useState([]);
  const [current, setCurrent] = useState(1);

  let pageItem = 5.666666666666667
  console.log("dta", data);
  const fetchdata = () => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
      setdata(res.data);
    });
  };
  console.log("length", data.length);

  const totalPages = data.length / pageItem;
  const startIndex = (current - 1) * pageItem;
  const endIndex = startIndex + totalPages;
  const currentItems = data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    const totalPages = Math.floor(data.length / pageItem);
    if (current < totalPages) {
      setCurrent(current + 1);
    }
  };
 


  const handlePrevious = () => {
    if (current < startIndex) {
      setCurrent(current - 1);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [current, pageItem]);

  const handleChange = (e) => {
    const searchdata = e.target.value;
    if (searchdata.length > 2) {
      const filterItem = data?.filter((item) =>
        item.title.includes(searchdata)
      );
      console.log("filter", filterItem);
      setdata(filterItem);
    } else {
      fetchdata();
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
  <>


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">

  <Link to="/">
  <a class="navbar-brand" href="">
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"/>
    </a>
  </Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <form class="d-flex" role="search" style={{marginLeft:30, width:600}}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            onChange={handleChange}
        />
        
      </form>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  style={{marginLeft:40}} to="/">Home</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active" href="#" style={{marginLeft:10}} to='/about'>About</Link>
        </li>
        <li class="nav-item dropdown" style={{marginLeft:10}}>
          <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          category
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" onClick={electronics}>Electronics</a></li>
            <li><a class="dropdown-item" onClick={shoes}>Shoes</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" onClick={Shirts} >Furniture</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" >Login</a>
        </li>
      </ul>
   
    </div>
  </div>
</nav>
      

      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1e513363d2412d0a.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/354cde8026deab5a.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="container">
      <div className="cards">
        {currentItems.length !== 0 ? (
          currentItems?.map((product) => (
            <div className="card1">
              <div className="card" key={product?.id}>
                <img src={product?.images[0]} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product?.category?.name}</h5>
                  <p className="card-text">{product?.title}</p>
                  <p className="card-text">${product?.price}</p>
                  <button className="btn btn-secondary">cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>User not found</h1>
        )}
      </div>

      <div className="pagination">
        <div className="left">
          <i onClick={handlePrevious} class="fa-solid fa-angle-left"></i>
        </div>
        
        <div className="right">
          <i onClick={handleNextPage} class="fa-solid fa-angle-right"></i>
        </div>
      </div>
      </div>
   </>
  );
};

export default Data;
