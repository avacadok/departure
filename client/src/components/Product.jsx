import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, id, webname, color, material, desciption, price, photos } = props
  //can make a function to change the picture on hover

  return (
    <>
      <section className="product-list">
        <Link to={`/product/${id}`}>
          <div className="product-img">
            <img src={photos[0]} alt="product-img"
              onMouseEnter={e => e.currentTarget.src = photos[1]}
              onMouseLeave={e => e.currentTarget.src = photos[0]}></img>
          </div>

          <div className="product-title">{name}</div>
          <div className="product-color">Color: {color}</div>
          <div className="product-price">C ${price / 100}</div>
        </Link>
      </section>
    </>
  )
}

export default Product;
