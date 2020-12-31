import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import CardProduct from "elements/CardProduct";
import axios from "axios";

class Product extends Component {
  // state
  state = {
    product: [],
  };
  // method mengambil data dari server berupa json
  getPostAPI() {
    axios
      .get("http://localhost:3000/product?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          product: result.data,
        });
      });
  }
  // ketika component dipasang
  componentDidMount() {
    this.getPostAPI();
  }

  handleDetail = (id) => {
    this.props.history.push(`/detail-product/${id}`);
  };

  render() {
    return (
      // bagian product
      <Fragment>
        <div id="product">
          <div className="container">
            <h2 className="display-6 text-center mb-4">Produk</h2>
            <div className="row">
              {/* melooping data pada api */}
              {this.state.product.map((product) => {
                return (
                  // mengirimkan props
                  <CardProduct
                    key={product.id}
                    data={product}
                    goDetail={this.handleDetail}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Product);
