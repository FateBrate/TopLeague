function Footer() {
  return (
    <footer className="bg-dark text-white ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Navigation</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Leagues</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Transfers</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Contact Info</h4>
            <p>123 Main Street, City</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Social Icons</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
