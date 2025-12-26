function Footer() {
  return (
    <footer className="footer text-dark pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Brand / About */}
          <div className="col-xl-4 col-md-6">
            <a href="/" className="d-flex align-items-center mb-3 text-decoration-none text-muted">
              <img src="house.png" alt="logo" width="40" className="me-2" />
              <span className="fs-4 fw-bold">SGS</span>
            </a>
            <p className="text-muted">
              Connecting borrowers with the best mortgage rates and simplifying
              the home financing process.
            </p>
            <div className="social-icons d-flex gap-3 mt-3">
              <a href="#" className=""><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-muted"><i className="bi bi-twitter fs-5"></i></a>
              <a href="#" className="text-muted"><i className="bi bi-linkedin fs-5"></i></a>
              <a href="#" className="text-muted"><i className="bi bi-instagram fs-5"></i></a>
            </div>
          </div>

          {/* Products */}
          <div className="col-xl-2 col-md-6">
            <h5 className="fw-bold mb-3">Products</h5>
            <nav>
              <ul className="list-unstyled text-muted">
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Purchase Loans</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Refinancing</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">FHA Loans</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">VA Loans</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Jumbo Loans</a></li>
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div className="col-xl-3 col-md-6">
            <h5 className="fw-bold mb-3">Resources</h5>
            <nav>
              <ul className="list-unstyled text-muted">
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Mortgage Calculator</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Rate Trends</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Learning Center</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">First-Time Buyer Guide</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">FAQ</a></li>
              </ul>
            </nav>
          </div>

          {/* Support */}
          <div className="col-xl-3 col-md-6">
            <h5 className="fw-bold mb-3">Support</h5>
            <nav>
              <ul className="list-unstyled text-muted">
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Contact Us</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Customer Service</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Privacy Policy</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">Terms of Services</a></li>
                <li className="pb-3"><a href="#" className="text-decoration-none text-muted">NMLS Counsel Access</a></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center mt-4 border-top pt-3 text-muted small">
          © {new Date().getFullYear()} Smart Gateway Solutions — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
