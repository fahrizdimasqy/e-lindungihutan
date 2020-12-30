import React from "react";
import ImageDetail from "assets/images/mtmf-robin-emmons.jpg";
import Stars from "assets/images/stars.png";
function DetailProductPage() {
  return (
    <div id="detail-product">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <img
              className="img-fluid mb-5"
              src={ImageDetail}
              alt=""
              width="650"
            />
          </div>
          <div className="col-md-4">
            <h4>Test</h4>
            <p>Rp. 150000</p>
            <img src={Stars} alt="" />
            <br />
            <button className="btn btn-success btn-lg mt-5">
              Beli sekarang
            </button>
            <button className="btn btn-danger btn-lg mt-2">
              Tambah Ke keranjang
            </button>
          </div>
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Description
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Review
            </a>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          tenetur porro eaque eos doloremque minima nemo, error magnam iusto!
          Nam, sapiente illum ipsum praesentium unde nostrum fugit animi
          laudantium at. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Molestias beatae soluta unde nesciunt officia natus minus,
          incidunt reprehenderit consequatur quas, perspiciatis consequuntur
          fuga sunt excepturi voluptates perferendis dolore ad? Quidem? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Architecto totam,
          tenetur ad quo error eveniet! Suscipit quam ducimus harum culpa
          necessitatibus aliquid, nihil vero eos saepe facilis deleniti rem!
          Rerum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          animi deserunt molestiae nihil esse eum, itaque consequuntur nesciunt
          adipisci eveniet quidem harum, omnis sunt repellendus obcaecati
          architecto iste, eaque labore?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Maxime ipsum nesciunt aliquam aliquid quae
          consectetur pariatur veritatis porro, officia at voluptate? Est odio
          quo dolor in nobis soluta numquam accusamus.
        </p>
      </div>
    </div>
  );
}

export default DetailProductPage;
