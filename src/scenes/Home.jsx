import React from "react";
import Button from "elements/Button";
import Header from "../parts/Header";
import Herro from "../parts/Herro";
import Product from "../parts/Product";
import Testimonial from "../parts/Testimonial";

function Home() {
  return (
    <div>
      {/* memanggil component Header */}
      <Header></Header>
      <Herro />
      <Product />
      <Testimonial />
    </div>
  );
}

export default Home;
