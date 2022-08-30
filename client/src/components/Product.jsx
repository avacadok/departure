import React from "react";

const Product = (props) => {
  const { name, color, material, desciption, price, photos } = props

  return (
    <>
      <section className="product-list">
        <div className="product-img">
          <img src={photos[0]} alt="product-img"></img>
        </div>

        <div className="product-title">{name}</div>
        <div className="product-color">Color: {color}</div>
        <div className="product-price">C ${price/100}</div>

      </section>
    </>
  )
}

export default Product;
