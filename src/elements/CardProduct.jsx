import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import image
import ImageProduct from "assets/images/mtmf-robin-emmons.jpg";
import Stars from "assets/images/stars.png";
function CardProduct(props) {
  return (
    <Fragment>
      <div className="col-md-4">
        <Link to="/detail-product" className="card-link">
          <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1 className="card-title text-truncate">{props.name}</h1>
              <div className="wrapping">
                <p className="card-text text-truncate text-nowrap">
                  {props.description}
                </p>
              </div>
              <p className="text-price">Rp. {props.price}</p>
              <img src={Stars} alt="" className="d-block mx-auto stars" />
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}

export default CardProduct;
