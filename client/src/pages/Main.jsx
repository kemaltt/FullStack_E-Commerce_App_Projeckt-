import React from "react";

import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const { products } = useContext(UserContext);

  return (
    <>
      {/* <Navbar /> */}

      <div className="search">
        <input type="text" name="" id="" placeholder="Search " />
        <i class="fa fa-search"> </i>
      </div>
      <div className="main-container">
        <div className="filter-container">
          <div className="filter">
            <h4>Filters</h4>
            <div className="filter-form">
              <label htmlFor="category">Category</label>
              <select name="category" id="category">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <div>
                <label htmlFor="price">Price</label>
                <input type="number" name="number" id="" placeholder="Min" />
                <span>-</span>
                <input type="number" name="number" id="" placeholder="Max" />
              </div>
              <input type="button" value="Search" />
            </div>
          </div>
        </div>
        <div className="product-container">
          {products.map((el) => (
            <ProductCard img={el.img} title={el.title} price={el.price} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
