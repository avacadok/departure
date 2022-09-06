import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const { id } = useParams();
  const { products } = props;
  const productId = id - 1;

  console.log("products", products[productId])
  console.log("id", id)

  if (!products) {
    return null;
  }

  return (
    <div className="product-info">
      <section className="product-details">
        <div className="product-detail-img">
          <img src={products[productId].list_of_pictures[0]} >
          </img>
        </div>

        <div className="product-detail-info">
          <div className="product-detail-name">
            <h2>{products[productId].name}</h2>
          </div>

          <div className="product-detail-price">
            C ${products[productId].price_cents/100}
          </div>

          <div className="product-detail-color">
            <p><b>Color:</b> {products[productId].color}</p>
            <i className="fa-solid fa-circle"></i>
          </div>

          <div className="product-detail-cart">
            Add to cart
          </div>

          <div className="description">
            {products[productId].description}
          </div>

          <div className="product-detail-material">
            <div>
              <b>Material:</b> {products[productId].material}
            </div>

            <div>
              <b>Size:</b> {products[productId].size}
            </div>
          </div>
{/* 
          <div>
            <b>Size:</b> {products[productId].size}
          </div> */}
        </div>

      </section>

    </div>
  )
}

export default ProductDetail;