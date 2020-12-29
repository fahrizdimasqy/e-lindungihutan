import React from "react";
import Button from "elements/Button";
import Header from "../parts/Header";
import Herro from "../parts/Herro";

function Home() {
  return (
    <div>
      {/* memanggil component Header */}
      <Header></Header>
      <Herro />
    </div>
  );
}

export default Home;
