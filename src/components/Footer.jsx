import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container">
        <div className="row">

          {/* E Cart */}
          <div className="col-lg-5 mb-5">
            <h2 className="mb-3">E Cart</h2>

            <p className="mb-4">
              Designed and built with all the love in the world by the
              Luminar team with the help of our contributors.
            </p>

            <p className="mb-4">
              Code licensed Luminar, docs CC BY 3.0.
            </p>

            <p>Currently v5.3.2.</p>
          </div>

          {/* Links */}
          <div className="col-lg-2 mb-4">
            <h2 className="mb-3">Links</h2>

            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Wishlist</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cart</a></li>
            </ul>
          </div>

          {/* Guides */}
          <div className="col-lg-2 mb-4">
            <h2 className="mb-3">Guides</h2>

            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Bootstrap</a></li>
              <li><a href="#" className="text-white text-decoration-none">Redux</a></li>
              <li><a href="#" className="text-white text-decoration-none">React</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 mb-4">
            <h2 className="mb-3">Contact Us</h2>

            <div className="input-group mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email Here!!"
              />

              <button className="btn btn-primary">
                →
              </button>
            </div>

            <div className="d-flex justify-content-between fs-5">
              <a href="#" className="text-white">f</a>
              <a href="#" className="text-white">♥</a>
              <a href="#" className="text-white">◉</a>
              <a href="#" className="text-white">◎</a>
              <a href="#" className="text-white">✉</a>
              <a href="#" className="text-white">☎</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;