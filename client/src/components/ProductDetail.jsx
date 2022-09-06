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
    <>
    <section className="product-detail">

    </section>
      <h3>{products[productId].name}</h3>

    </>
  )
}

export default ProductDetail;