import React from "react";
import Button from "elements/Button";
import Header from "../parts/Header";
import Herro from "../parts/Herro";
import Product from "../parts/Product";

function Home() {
  return (
    <div>
      {/* memanggil component Header */}
      <Header></Header>
      <Herro />
      <Product />
    </div>
  );
}

export default Home;
