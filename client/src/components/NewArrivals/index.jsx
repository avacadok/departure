import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState({});

  useEffect(() => {
    axios.get('/api/new-arrivals')
      .then((result) => {
        setNewArrivals({ ...result.data });
      })
      .catch((err) => console.log("err", err));
  }, []);

  const newArrivalsDetail = Object.values(newArrivals).map((newArrival, index) => {
    return (
      <Product
        key={index}
        name={newArrival.name}
        color={newArrival.color}
        material={newArrival.material}
        description={newArrival.description}
        price={newArrival.price_cents}
        photos={newArrival.list_of_pictures} />
    )
  })

  return(
    <>
    <h3 className="page-title">New Arrivals</h3>
    <div className="grid-container">
      {newArrivalsDetail}
      </div>
    </>
  )
}

export default NewArrivals;