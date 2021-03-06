import React, { Component } from "react";
import Axios from "axios";
import ImageDetail from "assets/images/mtmf-robin-emmons.jpg";
import Stars from "assets/images/stars.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  withRouter,
} from "react-router-dom";
class DetailProductPage extends Component {
  state = {
    product: {
      name: "",
      description: "",
      images: "",
      price: "",
    },
  };
  // ketika komponen dibuat ambil data dari API
  componentDidMount() {
    let id = this.props.match.params.id;
    // get api menggunakan axios
    Axios.get(`http://localhost:3000/product/${id}`).then((res) => {
      console.log("result", res);
      // hasil dari pemanggilan API
      let product = res.data;
      this.setState({
        product: {
          name: product.name,
          description: product.description,
          price: product.price,
          image: product.image,
        },
      });
    });
  }
  render() {
    return (
      <div id="detail-product">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                className="img-thumbnail rounded img-fluid mb-5"
                src={this.state.product.image}
                alt=""
                width="750"
              />
            </div>
            <div className="col-md-4">
              {/* memanggil data */}
              <h4 className="name-product">{this.state.product.name}</h4>
              <p className="price-product">{this.state.product.price}</p>
              <img src={Stars} alt="" className="stars-detail" />
              <br />
              <button className="btn btn-success btn-lg mt-5 btn-buy">
                Beli sekarang
              </button>
              <button className="btn btn-danger btn-lg mt-2 mb-3 btn-cart">
                Tambah Ke keranjang
              </button>
            </div>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Description
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Review
              </a>
            </li>
          </ul>
          <p>{this.state.product.description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailProductPage);
