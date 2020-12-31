import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
// import image
import Stars from "assets/images/stars.png";

function CardProduct(props) {
  return (
    <Fragment>
      <div className="col-md-4">
        {/* memanggil method goDetail ketika di klick */}
        <Link
          onClick={() => props.goDetail(props.data.id)}
          className="card-link"
        >
          <div className="card">
            <img src={props.data.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1 className="card-title text-truncate">{props.data.name}</h1>
              <div className="wrapping">
                <p className="card-text text-truncate text-nowrap">
                  {props.data.description}
                </p>
              </div>
              <p className="text-price">Rp. {props.data.price}</p>
              <img src={Stars} alt="" className="d-block mx-auto stars" />
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}

export default CardProduct;
