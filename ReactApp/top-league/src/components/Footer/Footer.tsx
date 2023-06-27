import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-dark text-center text-white mt-5">
      <div className="container p-4">
        <div className="row">
          <section
            className="mb-2 d-flex align-items-center  "
            style={{ marginLeft: "50%" }}
          >
            <div className="p-1 ">
              <BsFacebook />
            </div>
            <div className="p-1 ">
              <BsTwitter />
            </div>
            <div className="p-1 ">
              <BsGoogle />
            </div>
            <div className="p-1 ">
              <BsInstagram />
            </div>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                      placeholder="Email adress"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>Stay informed! Subscribe to our newsletter</p>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 202 <a className="text-white">Top League</a>
      </div>
    </footer>
  );
}
export default Footer;
