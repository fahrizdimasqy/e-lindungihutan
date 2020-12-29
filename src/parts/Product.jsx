import React from "react";
import ImageProduct from "assets/images/mtmf-robin-emmons.jpg";

function Product() {
  return (
    <div id="product">
      <div className="container">
        <h2 className="display-6 text-center">Produk</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={ImageProduct} class="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">Special to Try</h1>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <p className="text-price">Rp. 150000</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={ImageProduct} class="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">Special to Try</h1>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <p className="text-price">Rp. 150000</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={ImageProduct} class="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">Special to Try</h1>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <p className="text-price">Rp. 150000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
