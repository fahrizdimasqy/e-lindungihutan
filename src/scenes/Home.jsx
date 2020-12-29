import React from "react";
import Button from "elements/Button";
import Header from "../parts/Header";

function Home() {
  return (
    <div>
      {/* memanggil component Header */}
      <Header></Header>
      {/* Memanggil Component button dengan props isPrimary */}
      <Button isPrimary>Sign Up</Button>
    </div>
  );
}

export default Home;
