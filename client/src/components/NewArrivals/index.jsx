import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";

const NewArrivals = (props) => {
  const { newArrivals } = props;

  const newArrivalsDetail = Object.values(newArrivals).map((newArrival, index) => {
    return (
      <Product
        key={index}
        id={newArrival.product_id}
        name={newArrival.name}
        color={newArrival.color}
        material={newArrival.material}
        description={newArrival.description}
        price={newArrival.price_cents}
        photos={newArrival.list_of_pictures} />
    )
  })

  return (
    <>
      <h3 className="page-title">New Arrivals</h3>
      <div className="grid-container">
        {newArrivalsDetail}
      </div>
    </>
  )
}

export default NewArrivals;