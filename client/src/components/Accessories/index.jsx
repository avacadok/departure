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

  const AccessoriesDetail = Object.values(accessories).map((accessories, index) => {
    return (
      <Product
        key={index}
        name={accessories.name}
        color={accessories.color}
        material={accessories.material}
        description={accessories.description}
        price={accessories.price_cents}
        photos={accessories.list_of_pictures} />
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