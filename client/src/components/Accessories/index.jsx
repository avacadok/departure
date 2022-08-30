import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";

const Accessories = () => {
  const [accessories, setAccessories] = useState({});

  useEffect(() => {
    axios.get('/api/accessories')
      .then((result) => {
        setAccessories({ ...result.data });
      })
      .catch((err) => console.log("err", err));
  }, []);
  console.log("accessories", accessories)

  const AccessoriesDetail = Object.values(accessories).map((accessory, index) => {
    return (
      <Product
        key={index}
        name={accessory.name}
        color={accessory.color}
        material={accessory.material}
        description={accessory.description}
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