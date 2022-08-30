import React, { useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Product";

const Bags = () => {
  const [product, SetProduct] = useState({});

  useEffect(() => {
    axios.get('/api/bags')
      .then((result) => {
        SetProduct({ ...result.data })

      })
      .catch((err) => console.log("err", err));
  }, []);
  console.log("bags", product)

  const ProductDetail = Object.values(product).map((product, index) => {
    return (
      <Product
        key={index}
        name={product.name}
        color={product.color}
        material={product.material}
        description={product.description}
        price={product.price_cents}
        photos={product.list_of_pictures} />
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