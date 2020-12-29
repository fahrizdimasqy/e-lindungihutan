import React from "react";
import ImageHero from "assets/images/d71c95911c070b7c1f0dbf6ec47bd775.jpg";

function Herro() {
  return (
    <div id="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="display-6 text-start">
              Hal sederhana, jadi lebih bermakna bersama LindungiHutan.
            </h3>
            <p>
              When you eat something that cooked by yourself, the happiness is
              priceless.
            </p>
            <a href="" className="btn btn-primary">
              Buat Kampanye Alam
            </a>
          </div>
          <div className="col-md-6">
            <img src={ImageHero} alt="" width="400" className="image-hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herro;
