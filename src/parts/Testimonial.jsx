import React from "react";
import UserImage from "assets/images/pic.png";

function Testimonial() {
  return (
    <div id="testimonial">
      <div className="container">
        <h4 className="qoutes text-center">
          Awalnya saya malu dengan mertua karena <br /> tidak bisa memasak kini
          mereka lebih suka <br />
          makan malam di rumah demi menyantap <br />
          masakan yang saya buat sendiri
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
