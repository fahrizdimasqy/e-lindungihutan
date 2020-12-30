import React, { Component, Fragment } from "react";
// import image
import ImageProduct from "assets/images/mtmf-robin-emmons.jpg";
import Stars from "assets/images/stars.png";
import { Link } from "react-router-dom";
import CardProduct from "elements/CardProduct";
import axios from "axios";

class Product extends Component {
  state = {
    product: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3000/product").then((result) => {
      this.setState({
        product: result.data,
      });
    });
  }
  render() {
    return (
      // bagian product
      <div id="product">
        <div className="container">
          <h2 className="display-6 text-center mb-4">Produk</h2>
          <div className="row">
            {this.state.product.map((product) => {
              return (
                <CardProduct
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
