import React from "react";

const Product = (props) => {
  console.log('props', props)
  const { name, color, material, desciption, price, photos } = props

  return (
    <>

      <section className="product-list">
        <div className="product-img">
          <img src={photos[0]} alt="product-img"></img>
        </div>

        <div className="product-title">{name}</div>
        <div>{color}</div>
        <div>${price/100}</div>

      </section>

    </>
  )
}

export default Product;
