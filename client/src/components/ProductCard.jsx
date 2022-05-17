import React from "react";

export default function ProductCard({ img, title, price }) {
  return (
    <div className="card">
      <img src={img} alt="card-img" />
      <i class="far fa-heart"></i>
      <div className="card-body">
        <p>{title}</p>
        <div className="card-footer">
          <span>{price} $</span>
          <input type="button" value="Buy" />
        </div>
      </div>
    </div>
  );
}
