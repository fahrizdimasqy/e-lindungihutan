import React from "react";
// import images
import UserImage from "assets/images/pic.png";

function Testimonial() {
  return (
    <div id="testimonial">
      <div className="container">
        <h4 className="qoutes text-center">
          Awalnya saya bingung dengan mencari barang ramah lingkungan karena
          tidak bisa menemukan platform yang tepat kini saya sudah menemukan
          platform yang tepat
        </h4>
        <p className="backtik">"</p>
        <img src={UserImage} alt="" className="user-image" />
        <h5 className="text-center">Camella Sarrah</h5>
        <p className="text-center">Petani</p>
      </div>
    </div>
  );
}

export default Testimonial;
