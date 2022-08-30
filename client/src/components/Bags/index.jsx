import React, { useEffect, useState } from "react";
import axios from 'axios';
import Product from "../Product";

const Bags = (props) => {
  const { bags } = props;

  const ProductDetail = Object.values(bags).map((bag, index) => {
    return (
      <Product
        key={index}
        name={bag.name}
        color={bag.color}
        material={bag.material}
        description={bag.description}
        price={bag.price_cents}
        photos={bag.list_of_pictures} />
    )
  })

  return (
    <>
      <h3 className="page-title">Bags</h3>
      <div className="grid-container">
        {ProductDetail}
      </div>
    </>
  )
}

export default Bags;