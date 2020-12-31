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
              Mencari bahan ramah lingkungan, <br /> bisa didapatkan disini.
            </p>
            <a href="" className="btn btn-primary btn-lg">
              Dapatkan Sekarang
            </a>
          </div>
          <div className="col-md-5">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://www.taspromosiseminar.com/wp-content/uploads/2017/07/jual-tas-go-green-spunbond-murah-500x270.jpg"
                    alt=""
                    width="400"
                    className="image-hero img-fluid"
                  />
                  {/* <img className="d-block w-100" src="..." alt="First slide" /> */}
                </div>
                <div className="carousel-item">
                  <img
                    className="image-hero img-fluid"
                    src="https://cdn-2.tstatic.net/travel/foto/bank/images/sedotan_20180807_150812.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="image-hero img-fluid"
                    src="https://cdn-2.tstatic.net/travel/foto/bank/images/sedotan_20180807_150812.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
