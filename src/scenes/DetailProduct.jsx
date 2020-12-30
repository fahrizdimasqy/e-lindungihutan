import React from "react";
// mengimport component component kecil
import Header from "../parts/Header";
import Product from "../parts/Product";
import Footer from "../parts/Footer";

function DetailProduct() {
  return (
    <div>
      {/* memanggil component Header */}
      <Header></Header>
      <Product />
      <Footer />
    </div>
  );
}

export default DetailProduct;
