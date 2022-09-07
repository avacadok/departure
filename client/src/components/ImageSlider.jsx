import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.photos.length;

  //reset the img to the first one if the current img is the last one
  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if(!Array.isArray(props.photos) || props.photos.length <= 0) {
    return null;
  }


  return (
    <div className="container-slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>

      {Object.values(props.photos).map((img, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            
            {index === current && <img src={img} alt="product-image" />}

          </div>
        )
      })}
      
    </div>
  )
}

export default ImageSlider;