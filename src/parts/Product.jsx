import React from "react";
// import image
import ImageProduct from "assets/images/mtmf-robin-emmons.jpg";
import Stars from "assets/images/stars.png";

function Product() {
  return (
    // bagian product
    <div id="product">
      <div className="container">
        <h2 className="display-6 text-center">Produk</h2>
        <div className="row">
          <div className="col-md-4">
            <a href="" className="card-link">
              <div className="card">
                <img src={ImageProduct} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">Special to Try</h1>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                  <p className="text-price">Rp. 150000</p>
                  <img src={Stars} alt="" className="d-block mx-auto stars" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="" className="card-link">
              <div className="card">
                <img src={ImageProduct} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">Special to Try</h1>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                  <p className="text-price">Rp. 150000</p>
                  <img src={Stars} alt="" className="d-block mx-auto stars" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="" className="card-link">
              <div className="card">
                <img src={ImageProduct} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">Special to Try</h1>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                  <p className="text-price">Rp. 150000</p>
                  <img src={Stars} alt="" className="d-block mx-auto stars" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
