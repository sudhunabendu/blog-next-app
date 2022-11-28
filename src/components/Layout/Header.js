import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
        <div className="container">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="navbar-header">
            <Link href="/">
              <a className="navbar-brand">
                {/* <img
                src="assets/img/logo-white.png"
                className="logo logo-display"
                alt=""
              /> */}
                <Image
                  src="/assets/img/logo-white.png"
                  className="logo logo-display"
                  alt=""
                  width={150}
                  height={60}
                />
                {/* <img
                  src="assets/img/logo-white.png"
                  className="logo logo-scrolled"
                  alt=""
                /> */}
              </a>
            </Link>
            {/* <a className="navbar-brand" href="index.html"> */}

            {/* </a> */}
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li>
                <Link href="auth/signup">
                <a>
                  <i className="fa fa-pencil" />
                  SignUp
                </a>
                </Link>
                
              </li>
              <li className="left-br">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#signup"
                  className="signin"
                >
                  Sign In Now
                </a>
              </li>
            </ul>
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="dropdown">
                <a
                  href="login.html"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Home
                </a>
                <ul className="dropdown-menu animated fadeOutUp">
                  <li>
                    <a href="index.html">Home Page 1</a>
                  </li>
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
                    <a href="index-6.html">Home Page 6</a>
                  </li>
                  <li>
                    <a href="freelancing.html">Freelancing</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="login.html"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Jobs
                </a>
                <ul className="dropdown-menu animated fadeOutUp">
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Job Listing
                    </a>
                    <ul className="dropdown-menu animated fadeOutUp">
                      <li>
                        <a href="browse-jobs.html">Browse Jobs</a>
                      </li>
                      <li>
                        <a href="browse-jobs-list.html">
                          Browse Jobs With Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="browse-jobs-grid.html">Job In Grid</a>
                      </li>
                      <li>
                        <a href="search-new.html">Search Job</a>
                      </li>
                      <li>
                        <a href="popular-jobs.html">Popular Jobs</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Job Detail
                    </a>
                    <ul className="dropdown-menu animated fadeOutUp">
                      <li>
                        <a href="job-detail-1.html">Job Detail 1</a>
                      </li>
                      <li>
                        <a href="job-detail-2.html">Job Detail 2</a>
                      </li>
                      <li>
                        <a href="job-detail-3.html">Job Detail 3</a>
                      </li>
                      <li>
                        <a href="advance-search.html">Advance Search Job</a>
                      </li>
                      <li>
                        <a href="advance-search-2.html">Advance Search Job 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="job-with-map.html">Job With Map</a>
                  </li>
                  <li>
                    <a href="register.html">SignUp Page</a>
                  </li>
                  <li>
                    <a href="dashboard/index.html">Dashboard</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown megamenu-fw">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Brows
                </a>
                <ul className="dropdown-menu megamenu-content" role="menu">
                  <li>
                    <div className="row">
                      <div className="col-menu col-md-3">
                        <h6 className="title">Main Pages</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <Link href="login.html">
                              <a >New Login</a>
                              </Link>
                              
                            </li>
                            <li>
                              <Link href="signin-signup.html">
                              <a>Sign In / Sign Up</a>
                              </Link>
                              
                            </li>
                            <li>
                              <a href="search-job.html">Search Job</a>
                            </li>
                            <li>
                              <a href="accordion.html">Accordion</a>
                            </li>
                            <li>
                              <a href="tab.html">Tab Style</a>
                            </li>
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="pricing.html">Pricing</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* end col-3 */}
                      <div className="col-menu col-md-3">
                        <h6 className="title">For Candidate</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <a href="candidate-dashboard.html">
                                Candidate Dashboard
                              </a>
                            </li>
                            <li>
                              <a href="browse-candidate-list.html">
                                Browse Candidates
                              </a>
                            </li>
                            <li>
                              <a href="manage-candidate.html">
                                Browse Candidate
                              </a>
                            </li>
                            <li>
                              <a href="top-candidate.html">Top candidate</a>
                            </li>
                            <li>
                              <a href="candidate-profile.html">
                                Candidate Detail
                              </a>
                            </li>
                            <li>
                              <a href="candidate-detail.html">
                                New Candidate Detail
                              </a>
                            </li>
                            <li>
                              <a href="browse-resume-grid.html">
                                Browse Candidate Grid
                              </a>
                            </li>
                            <li>
                              <a href="browse-candidate-map.html">
                                Browse Candidate With Map
                              </a>
                            </li>
                            <li>
                              <a href="browse-resume.html">Browse Resume</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* end col-3 */}
                      <div className="col-menu col-md-3">
                        <h6 className="title">For Employer</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <a href="dashboard.html">Employer Dashboard</a>
                            </li>
                            <li>
                              <a href="browse-employer-list.html">
                                Employer With Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="browse-company.html">Browse Companies</a>
                            </li>
                            <li>
                              <a href="company-detail.html">Company Detail</a>
                            </li>
                            <li>
                              <a href="create-job.html">Create Job</a>
                            </li>
                            <li>
                              <a href="create-company.html">Create Company</a>
                            </li>
                            <li>
                              <a href="manage-company.html">Manage Company</a>
                            </li>
                            <li>
                              <a href="manage-employee.html">Manage Employee</a>
                            </li>
                            <li>
                              <a href="employer-profile.html">
                                Employer Profile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-3">
                        <h6 className="title">
                          Extra Pages <span className="new-offer">New</span>
                        </h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <a href="top-candidate-detail.html">
                                Top Candidate detail
                              </a>
                            </li>
                            <li>
                              <a href="payment-methode.html">Payment Methode</a>
                            </li>
                            <li>
                              <a href="new-login-signup.html">
                                New LogIn / SignUp
                              </a>
                            </li>
                            <li>
                              <a href="top-candidate-2.html">Top candidate 2</a>
                            </li>
                            <li>
                              <a href="premium-candidate.html">
                                Premium Candidate
                              </a>
                            </li>
                            <li>
                              <a href="premium-candidate-detail.html">
                                Premium Candidate Detail
                              </a>
                            </li>
                            <li>
                              <a href="contact.html">Get in Touch</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* end col-3 */}
                    </div>
                    {/* end row */}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
