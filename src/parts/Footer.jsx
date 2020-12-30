import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <h3>Lindungialam</h3>
            Website Penggalangan Dana Online untuk Konservasi Hutan dan
            Lingkungan. Yayasan Lindungi Hutan resmi berbadan hukum dan memiliki
            Izin Pengumpulan Sumbangan pada SK Kemensos No. 630/HUK-PS/2020.
          </div>
          <div className="col-md-2">
            <h3>Tentang Kami</h3>
            <ul className="list-unstyled">
              <li>
                <a className="d-block py-1" href="/faq#carapesan">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a className="d-block py-1" href="/faq">
                  Profile
                </a>
              </li>
              <li>
                <a className="d-block py-1" href="#">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-unstyled">
              <li>
                <a className="d-block py-1" href="/faq#carapesan">
                  Kebijakan dan Privasi
                </a>
              </li>
              <li>
                <a className="d-block py-1" href="/faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="d-block py-1" href="#">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-unstyled">
              <li>
                <a className="d-block py-1" href="/faq#carapesan">
                  Cara Pesan
                </a>
              </li>
              <li>
                <a className="d-block py-1" href="/faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="d-block py-1" href="#">
                  Kebijakan dan Privasi
                </a>
              </li>
              <li>
                <a className="d-block py-1" href="/tos">
                  Syarat dan Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="text-center">
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              Copyright © 2020 - <a href="#">Lindungialam</a>. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
