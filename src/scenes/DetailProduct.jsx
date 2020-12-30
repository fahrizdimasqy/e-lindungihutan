import React from "react";
// mengimport component component kecil
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import DetailProductPage from "parts/DetailProductPage";
import BottomNav from "parts/BottomNav";

function DetailProduct() {
  return (
    <div>
      {/* memanggil component Header */}
      <Header></Header>
      <DetailProductPage />
      <BottomNav />
      <Footer />
    </div>
  );
}

export default DetailProduct;
