import React from "react";
import Button from "elements/Button";
import Header from "../parts/Header";
import Herro from "../parts/Herro";
import Product from "../parts/Product";
import Testimonial from "../parts/Testimonial";
import Statistic from "../parts/Statistic";
import Footer from "../parts/Footer";

function Home() {
  return (
    <div>
      {/* memanggil component Header */}
      <Header></Header>
      <Herro />
      <Product />
      <Testimonial />
      <Statistic />
      <Footer />
    </div>
  );
}

export default Home;
