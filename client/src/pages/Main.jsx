import React from "react";
import ProductCard from "../components/ProductCard";
import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [page, setPage] = useState(1);
  const [products1, setProducts1] = useState([]);
  const inputRef = useRef({
    keyword: "",
    min_price: "",
    max_price: "",
    taxonomy_id: "",
  });

  const getProducts = () => {
    const payload = {
      keyword: inputRef.current.keyword,
      min_price: inputRef.current.min_price,
      max_price: inputRef.current.max_price,
      taxonomy_id: inputRef.current.taxonomy_id,
    };
    axios
      .post("http://localhost:8000/product", payload)
      .then((res) => {
        setProducts1(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  // const increasePage = () => {
  //   setPage(page + 1);
  // };
  // const decreasePage = () => {
  //   setPage(page - 1);
  // };

  const navigate = useNavigate();
  const { products } = useContext(UserContext);

  return (
    <>
      <div className="search">
        <input type="text" name="" id="" placeholder="Search " />
        <i class="fa fa-search"> </i>
      </div>
      <div className="main-container">
        <div className="filter-container">
          <div className="filter">
            <h4> Filters </h4>
            <div className="filter-form">
              <label htmlFor="category"> Category </label>
              <select name="category" id="category">
                <option value="volvo"> Volvo </option>
                <option value="saab"> Saab </option>
                <option value="mercedes"> Mercedes </option>
                <option value="audi"> Audi </option>
              </select>
              <div>
                <label htmlFor="price"> Price </label>
                <input type="number" name="number" id="" placeholder="Min" />
                <span> - </span>
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
      <div className="page_btn">
        <button>ileri</button>

        <button>geri</button>
      </div>
    </>
  );
};

export default Main;
