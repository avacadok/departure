import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";

const Accessories = (props) => {
  const {accessories} = props;

  const AccessoriesDetail = Object.values(accessories).map((accessory, index) => {
    return (
      <Product
        key={index}
        name={accessory.name}
        id={accessory.product_id}
        color={accessory.color}
        price={accessory.price_cents}
        photos={accessory.list_of_pictures} />
    )
  })

  return (
    <>
      <h3 className="page-title">Accessories</h3>
      <div className="grid-container">
      {AccessoriesDetail}
      </div>
    </>
  )
}

export default Accessories;