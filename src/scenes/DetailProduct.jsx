import React, { Component } from "react";
// mengimport component component kecil
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import DetailProductPage from "parts/DetailProductPage";
import BottomNav from "parts/BottomNav";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
const DetailProduct = (props) => {
  return (
    <div>
      {/* memanggil component Header */}
      <Header></Header>
      <DetailProductPage />
      <BottomNav />
      <Footer />
    </div>
  );
};

export default DetailProduct;
