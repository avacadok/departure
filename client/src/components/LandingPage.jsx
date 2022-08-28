import React from "react";
import {Link} from 'react-router-dom';

const LandingPage = () => {
  return (
    <section className="main-page">
      <img className="main-img" src='https://imgur.com/kny0KIb.png' alt="travel-with-pet"/>

      <div className="card">
        <h1 className="travel">
          TRAVEL WITH YOUR FUR BABY
        </h1>
        <h2 className="mainpage-shop">
          <Link to='/new-arrivals' className="shop-depawture">SHOP DEPAWTURE</Link>
        </h2>
      </div>
    </section>

  )
}

export default LandingPage;