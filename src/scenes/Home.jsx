import React from "react";
import Button from "elements/Button";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Product from "../parts/Product";
import Testimonial from "../parts/Testimonial";
import Statistic from "../parts/Statistic";
import Footer from "../parts/Footer";
import BottomNav from "parts/BottomNav";

function Home() {
  return (
    <div>
      {/* memanggil component Header */}
      <Header></Header>
      {/* memanggil component hero */}
      <Hero />
      {/* memanggil component product */}
      <Product />
      {/* memanggil component testimonial */}
      <Testimonial />
      {/* memanggil component statistic */}
      <Statistic />
      <BottomNav />
      {/* memanggil component footer */}
      <Footer />
    </div>
  );
}

export default Home;
