// SingleProductPage.js

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdLocalShipping } from 'react-icons/md';

import "../styles/singleProductPage.css"; // Import your CSS file

export default function SingleProductPage() {
  const { id } = useParams();
  const initialState = {
    image: "",
    category: "",
    price: "",
    name: ""
  };
  const [singleProduct, setProduct] = useState(initialState);
  const { products } = useSelector(state => state.productReducer);

  useEffect(() => {
    const filteredData = products.filter(el => el.id === +id);
    setProduct(filteredData[0]);
  }, [id, products]);

  const { image, price, category, name } = singleProduct;

  return (
    <div className="container">
      <div className="product-image">
        <img
          src={image}
          alt="product image"
        />
      </div>
      <div className="product-info">
        <header>
          <h1 className="product-name">{name}</h1>
          <p className="product-price">${price} USD</p>
        </header>
        <div className="product-category">
          <p>Category: {category}</p>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
        <div className="delivery-info">
          <MdLocalShipping />
          <p>2-3 business hours delivery</p>
        </div>
      </div>
    </div>
  );
}
