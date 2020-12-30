import React from "react";
import ImageHero from "assets/images/d71c95911c070b7c1f0dbf6ec47bd775.jpg";

function Hero() {
  return (
    //   ini adalah component hero
    <div id="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h3 className="display-6 text-start">
              Hal sederhana, jadi lebih bermakna bersama LindungiHutan.
            </h3>
            <p>
              When you eat something that cooked by yourself, <br /> the
              happiness is priceless.
            </p>
            <a href="" className="btn btn-primary btn-lg">
              Buat Kampanye Alam
            </a>
          </div>
          <div className="col-md-5">
            <img
              src={ImageHero}
              alt=""
              width="400"
              className="image-hero img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
