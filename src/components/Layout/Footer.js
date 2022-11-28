import Image from "next/image";

const Footer = () => {
  return (
    <footer className="dark-footer skin-dark-footer">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="footer-widget">
                {/* <img
                  src="assets/img/logo-white.png"
                  className="img-footer"
                  alt=""
                /> */}
                <Image
                  src="/assets/img/logo-white.png"
                  alt=""
                  width={145}
                  height={60}
                />

                <div className="footer-add">
                  <p>
                    Collins Street West, Victoria,
                    <br /> Australia (AU4578).
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <br />
                    hello@jobstock.com
                  </p>
                  <p>
                    <strong>Call:</strong>
                    <br />
                    91 855 742 62548
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="footer-widget">
                <h4 className="widget-title">Navigations</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="home-6.html">New Home Design</a>
                  </li>
                  <li>
                    <a href="browse-candidate-list.html">Browse Candidates</a>
                  </li>
                  <li>
                    <a href="browse-employer-list.html">Browse Employers</a>
                  </li>
                  <li>
                    <a href="advance-search-2.html">Advance Search</a>
                  </li>
                  <li>
                    <a href="checkout.html">Job With Map</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="footer-widget">
                <h4 className="widget-title">The Highlights</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="index-2.html">Home Page 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home Page 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home Page 4</a>
                  </li>
                  <li>
                    <a href="index-5.html">Home Page 5</a>
                  </li>
                  <li>
                    <a href="login.html">LogIn</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="footer-widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="candidate-dashboard.html">Dashboard</a>
                  </li>
                  <li>
                    <a href="applications.html">Applications</a>
                  </li>
                  <li>
                    <a href="packages.html">Packages</a>
                  </li>
                  <li>
                    <a href="candidate-resume.html">resume.html</a>
                  </li>
                  <li>
                    <a href="register.html">SignUp Page</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-widget">
                <h4 className="widget-title">Download Apps</h4>
                <a href="#" className="other-store-link">
                  <div className="other-store-app">
                    <div className="os-app-icon">
                      <i className="ti-android theme-cl" />
                    </div>
                    <div className="os-app-caps">
                      Google Play
                      <span>Get It Now</span>
                    </div>
                  </div>
                </a>
                <a href="#" className="other-store-link">
                  <div className="other-store-app">
                    <div className="os-app-icon">
                      <i className="ti-apple theme-cl" />
                    </div>
                    <div className="os-app-caps">
                      App Store
                      <span>Now it Available</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p className="mb-0">
                © 2020 Job Stock. Designd By
                <a href="https://themezhub.com/">Themez Hub</a> All Rights
                Reserved
              </p>
            </div>
            <div className="col-lg-6 col-md-6 text-right">
              <ul className="footer-bottom-social">
                <li>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
