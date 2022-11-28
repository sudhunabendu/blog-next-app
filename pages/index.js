import Head from "next/head";
import Image from "next/image";
import Footer from "../src/components/Layout/Footer";
import Header from "../src/components/Layout/Header";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Stock</title>
      </Head>

      <div className="wrapper">
        <Header />

        <div>
          <div className="clearfix" />
          <div
            className="banner trans"
            style={{ backgroundImage: "url(assets/img/slider-1.jpg)" }}
            data-overlay={6}
          >
            <div className="container">
              <div className="banner-caption">
                <div className="col-md-12 col-sm-12 banner-text">
                  <h1>7,000+ Browse Jobs</h1>
                  <div className="full-search-2 eclip-search italian-search hero-search-radius">
                    <div className="hero-search-content">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 small-padd b-r">
                          <div className="form-group">
                            <div className="input-with-icon">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Job Title or Keywords"
                              />
                              <i className="ti-search" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 small-padd b-r">
                          <div className="form-group">
                            <div className="input-with-icon">
                              <select id="choose-city" className="form-control">
                                <option>Choose City</option>
                                <option>Chandigarh</option>
                                <option>London</option>
                                <option>England</option>
                                <option>Pratapcity</option>
                                <option>Ukrain</option>
                                <option>Wilangana</option>
                              </select>
                              <i className="ti-location-pin" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 small-padd">
                          <div className="form-group">
                            <div className="input-with-icon">
                              <select
                                id="choose-category"
                                className="form-control"
                              >
                                <option>Job Category</option>
                                <option>Education &amp; Trainee</option>
                                <option>Sales &amp; Marketing</option>
                                <option>Automotive Jobs</option>
                                <option>Health &amp; Medical</option>
                                <option>Design &amp; Development</option>
                                <option>Book Services</option>
                              </select>
                              <i className="ti-layers" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 small-padd">
                          <div className="form-group">
                            <div className="form-group">
                              <a
                                href="#"
                                className="btn btn-primary search-btn"
                              >
                                Search
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* Company Brand Start */}
          <div className="company-brand">
            <div className="container">
              <div id="company-brands" className="owl-carousel">
                <div className="brand-img">
                  <img
                    src="assets/img/microsoft-home-dark.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/img-home-dark.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/mothercare-hom-darke.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/paypal-home-dark.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/serv-home-dark.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/xerox-home-dark.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/yahoo-home-dark.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/mothercare-hom-darke.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Company Brand End */}
          <section>
            <div className="container">
              <div className="row">
                <div className="main-heading">
                  <p>200 New Jobs</p>
                  <h2>
                    New &amp; Random <span>Jobs</span>
                  </h2>
                </div>
              </div>
              <div className="row extra-mrg">
                {/* Single New Job */}
                <div className="col-md-3 col-sm-6">
                  <div className="job-instructor-layout">
                    <span className="tg-themetag tg-featuretag">Premium</span>
                    <div className="brows-job-type">
                      <span className="freelanc">Freelancer</span>
                    </div>
                    <div className="job-instructor-thumb">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="job-instructor-content">
                      <h4 className="instructor-title">
                        <a href="job-detail.html">Web Designing</a>
                      </h4>
                      <div className="instructor-skills">
                        CSS3, HTML5, Javascript, Bootstrap, Jquery
                      </div>
                    </div>
                    <div className="job-instructor-footer">
                      <div className="instructor-students">
                        <h5 className="instructor-scount">$3.2K - $5K</h5>
                      </div>
                      <div className="instructor-corses">
                        <span className="c-counting">7 Open</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single New Job */}
                <div className="col-md-3 col-sm-6">
                  <div className="job-instructor-layout">
                    <div className="brows-job-type">
                      <span className="full-time">Full Time</span>
                    </div>
                    <div className="job-instructor-thumb">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="job-instructor-content">
                      <h4 className="instructor-title">
                        <a href="job-detail.html">App Developer</a>
                      </h4>
                      <div className="instructor-skills">
                        CSS3, HTML5, Javascript, Bootstrap, Jquery
                      </div>
                    </div>
                    <div className="job-instructor-footer">
                      <div className="instructor-students">
                        <h5 className="instructor-scount">$4.2K - $5K</h5>
                      </div>
                      <div className="instructor-corses">
                        <span className="c-counting">2 Open</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single New Job */}
                <div className="col-md-3 col-sm-6">
                  <div className="job-instructor-layout">
                    <div className="brows-job-type">
                      <span className="part-time">Part Time</span>
                    </div>
                    <div className="job-instructor-thumb">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-4.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="job-instructor-content">
                      <h4 className="instructor-title">
                        <a href="job-detail.html">Software Developer</a>
                      </h4>
                      <div className="instructor-skills">
                        CSS3, HTML5, Javascript, Bootstrap, Jquery
                      </div>
                    </div>
                    <div className="job-instructor-footer">
                      <div className="instructor-students">
                        <h5 className="instructor-scount">$6.5K - $8K</h5>
                      </div>
                      <div className="instructor-corses">
                        <span className="c-counting">02 Open</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single New Job */}
                <div className="col-md-3 col-sm-6">
                  <div className="job-instructor-layout">
                    <span className="tg-themetag tg-featuretag">Premium</span>
                    <div className="brows-job-type">
                      <span className="freelanc">Freelancer</span>
                    </div>
                    <div className="job-instructor-thumb">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-5.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="job-instructor-content">
                      <h4 className="instructor-title">
                        <a href="job-detail.html">iPhone Developer</a>
                      </h4>
                      <div className="instructor-skills">
                        CSS3, HTML5, Javascript, Bootstrap, Jquery
                      </div>
                    </div>
                    <div className="job-instructor-footer">
                      <div className="instructor-students">
                        <h5 className="instructor-scount">$3.7K - $6K</h5>
                      </div>
                      <div className="instructor-corses">
                        <span className="c-counting">04 Open</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single New Job */}
                <div className="col-md-3 col-sm-6">
                  <div className="job-instructor-layout">
                    <div className="brows-job-type">
                      <span className="part-time">Part Time</span>
                    </div>
                    <div className="job-instructor-thumb">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-6.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="job-instructor-content">
                      <h4 className="instructor-title">
                        <a href="job-detail.html">UI/UX Designer</a>
                      </h4>
                      <div className="instructor-skills">
                        CSS3, HTML5, Javascript, Bootstrap, Jquery
                      </div>
                    </div>
                    <div className="job-instructor-footer">
                      <div className="instructor-students">
                        <h5 className="instructor-scount">$3.2K - $5K</h5>
                      </div>
                      <div className="instructor-corses">
                        <span className="c-counting">05 Open</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single New Job */}
                <div className="col-md-3 col-sm-6">
                  <div className="job-instructor-layout">
                    <span className="tg-themetag tg-featuretag">Premium</span>
                    <div className="brows-job-type">
                      <span className="full-time">Full Time</span>
                    </div>
                    <div className="job-instructor-thumb">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-7.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="job-instructor-content">
                      <h4 className="instructor-title">
                        <a href="job-detail.html">Content Writer</a>
                      </h4>
                      <div className="instructor-skills">
                        CSS3, HTML5, Javascript, Bootstrap, Jquery
                      </div>
                    </div>
                    <div className="job-instructor-footer">
                      <div className="instructor-students">
                        <h5 className="instructor-scount">$304K - $6K</h5>
                      </div>
                      <div className="instructor-corses">
                        <span className="c-counting">02 Open</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single New Job */}
                <div className="col-md-3 col-sm-6">
                  <div className="job-instructor-layout">
                    <div className="brows-job-type">
                      <span className="enternship">Tnternship</span>
                    </div>
                    <div className="job-instructor-thumb">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-7.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="job-instructor-content">
                      <h4 className="instructor-title">
                        <a href="job-detail.html">Project Manager</a>
                      </h4>
                      <div className="instructor-skills">
                        CSS3, HTML5, Javascript, Bootstrap, Jquery
                      </div>
                    </div>
                    <div className="job-instructor-footer">
                      <div className="instructor-students">
                        <h5 className="instructor-scount">$37.5K - $8K</h5>
                      </div>
                      <div className="instructor-corses">
                        <span className="c-counting">07 Open</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single New Job */}
                <div className="col-md-3 col-sm-6">
                  <div className="job-instructor-layout">
                    <span className="tg-themetag tg-featuretag">Premium</span>
                    <div className="brows-job-type">
                      <span className="full-time">Full Time</span>
                    </div>
                    <div className="job-instructor-thumb">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="job-instructor-content">
                      <h4 className="instructor-title">
                        <a href="job-detail.html">Wordpress Expert</a>
                      </h4>
                      <div className="instructor-skills">
                        CSS3, HTML5, Javascript, Bootstrap, Jquery
                      </div>
                    </div>
                    <div className="job-instructor-footer">
                      <div className="instructor-students">
                        <h5 className="instructor-scount">$10.2K - $16K</h5>
                      </div>
                      <div className="instructor-corses">
                        <span className="c-counting">02 Open</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="clearfix" />
          <section
            className="video-sec dark"
            id="video"
            style={{ backgroundImage: "url(assets/img/banner-10.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="main-heading">
                  <p>Best For Your Projects</p>
                  <h2>
                    Watch Our <span>video</span>
                  </h2>
                </div>
              </div>
              <div className="video-part">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#my-video"
                  className="video-btn"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </section>
          <div className="clearfix" />
          <section className="how-it-works">
            <div className="container">
              <div className="row" data-aos="fade-up">
                <div className="col-md-12">
                  <div className="main-heading">
                    <p>Working Process</p>
                    <h2>
                      How It <span>Works</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                      <img
                        src="assets/img/step-1.png"
                        className="img-responsive"
                        alt=""
                      />
                      <span className="process-num">01</span>
                    </span>
                    <h4>Create An Account</h4>
                    <p>
                      Post a job to tell us about your project. We&apos;ll quickly
                      match you with the right freelancers find place best.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                      <img
                        src="assets/img/step-2.png"
                        className="img-responsive"
                        alt=""
                      />
                      <span className="process-num">02</span>
                    </span>
                    <h4>Search Jobs</h4>
                    <p>
                      Post a job to tell us about your project. We&apos;ll quickly
                      match you with the right freelancers find place best.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                      <img
                        src="assets/img/step-3.png"
                        className="img-responsive"
                        alt=""
                      />
                      <span className="process-num">03</span>
                    </span>
                    <h4>Save &amp; Apply</h4>
                    <p>
                      Post a job to tell us about your project. We&apos;ll quickly
                      match you with the right freelancers find place best.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="clearfix" />
          <section className="testimonial" id="testimonial">
            <div className="container">
              <div className="row">
                <div className="main-heading">
                  <p>What Say Our Client</p>
                  <h2>
                    Our Success <span>Stories</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div id="client-testimonial-slider" className="owl-carousel">
                  <div className="client-testimonial">
                    <div className="pic">
                      <img src="assets/img/client-1.jpg" alt="" />
                    </div>
                    <p className="client-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor et dolore magna aliqua.
                    </p>
                    <h3 className="client-testimonial-title">Lacky Mole</h3>
                    <ul className="client-testimonial-rating">
                      <li className="fa fa-star-o" />
                      <li className="fa fa-star-o" />
                      <li className="fa fa-star" />
                    </ul>
                  </div>
                  <div className="client-testimonial">
                    <div className="pic">
                      <img src="assets/img/client-2.jpg" alt="" />
                    </div>
                    <p className="client-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor et dolore magna aliqua.
                    </p>
                    <h3 className="client-testimonial-title">Karan Wessi</h3>
                    <ul className="client-testimonial-rating">
                      <li className="fa fa-star-o" />
                      <li className="fa fa-star" />
                      <li className="fa fa-star" />
                    </ul>
                  </div>
                  <div className="client-testimonial">
                    <div className="pic">
                      <img src="assets/img/client-3.jpg" alt="" />
                    </div>
                    <p className="client-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor et dolore magna aliqua.
                    </p>
                    <h3 className="client-testimonial-title">Roul Pinchai</h3>
                    <ul className="client-testimonial-rating">
                      <li className="fa fa-star-o" />
                      <li className="fa fa-star-o" />
                      <li className="fa fa-star" />
                    </ul>
                  </div>
                  <div className="client-testimonial">
                    <div className="pic">
                      <img src="assets/img/client-1.jpg" alt="" />
                    </div>
                    <p className="client-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor et dolore magna aliqua.
                    </p>
                    <h3 className="client-testimonial-title">Adam Jinna</h3>
                    <ul className="client-testimonial-rating">
                      <li className="fa fa-star-o" />
                      <li className="fa fa-star-o" />
                      <li className="fa fa-star" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* pricing Section Start */}
          <section className="pricing">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-heading">
                    <p>Best Candidate of The Year</p>
                    <h2>
                      Hire Expert <span>Candidate</span>
                    </h2>
                  </div>
                </div>
              </div>
              {/*/row*/}
              <div className="row">
                {/* Single Freelancer Style 2 */}
                <div className="col-md-4 col-sm-6">
                  <div className="top-candidate-wrap style-2">
                    <div className="top-candidate-box">
                      <span className="tpc-status">Available</span>
                      <h4 className="flc-rate">$17/hr</h4>
                      <div className="tp-candidate-inner-box">
                        <div className="top-candidate-box-thumb">
                          <img
                            src="assets/img/can-5.jpg"
                            className="img-responsive img-circle"
                            alt=""
                          />
                        </div>
                        <div className="top-candidate-box-detail">
                          <h4>Agustin L. Smith</h4>
                          <span className="location">Australia</span>
                        </div>
                        <div className="rattings">
                          <i className="fa fa-star fill" />
                          <i className="fa fa-star fill" />
                          <i className="fa fa-star fill" />
                          <i className="fa fa-star-half fill" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <div className="top-candidate-box-extra">
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui.
                        </p>
                        <ul>
                          <li>Php</li>
                          <li>Android</li>
                          <li>Html</li>
                          <li className="more-skill bg-primary">+3</li>
                        </ul>
                      </div>
                      <a
                        href="top-candidate-detail.html"
                        className="btn btn-candidate-two bg-default"
                      >
                        View Detail
                      </a>
                      <a href="#l" className="btn btn-candidate-two bg-info">
                        Shortlist
                      </a>
                    </div>
                  </div>
                </div>
                {/* Single Freelancer Style 2 */}
                <div className="col-md-4 col-sm-6">
                  <div className="top-candidate-wrap style-2">
                    <div className="top-candidate-box">
                      <span className="tpc-status bg-warning">At Work</span>
                      <h4 className="flc-rate">$22/hr</h4>
                      <div className="tp-candidate-inner-box">
                        <div className="top-candidate-box-thumb">
                          <img
                            src="assets/img/can-5.jpg"
                            className="img-responsive img-circle"
                            alt=""
                          />
                        </div>
                        <div className="top-candidate-box-detail">
                          <h4>Delores R. Williams</h4>
                          <span className="location">United States</span>
                        </div>
                        <div className="rattings">
                          <i className="fa fa-star fill" />
                          <i className="fa fa-star fill" />
                          <i className="fa fa-star fill" />
                          <i className="fa fa-star-half fill" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <div className="top-candidate-box-extra">
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui.
                        </p>
                        <ul>
                          <li>Php</li>
                          <li>Android</li>
                          <li>Html</li>
                          <li className="more-skill bg-primary">+3</li>
                        </ul>
                      </div>
                      <a
                        href="top-candidate-detail.html"
                        className="btn btn-candidate-two bg-default"
                      >
                        View Detail
                      </a>
                      <a href="#l" className="btn btn-candidate-two bg-info">
                        Shortlist
                      </a>
                    </div>
                  </div>
                </div>
                {/* Single Freelancer Style 2 */}
                <div className="col-md-4 col-sm-6">
                  <div className="top-candidate-wrap style-2">
                    <div className="top-candidate-box">
                      <span className="tpc-status">Available</span>
                      <h4 className="flc-rate">$19/hr</h4>
                      <div className="tp-candidate-inner-box">
                        <div className="top-candidate-box-thumb">
                          <img
                            src="assets/img/can-5.jpg"
                            className="img-responsive img-circle"
                            alt=""
                          />
                        </div>
                        <div className="top-candidate-box-detail">
                          <h4>Daniel Disroyer</h4>
                          <span className="location">Bangladesh</span>
                        </div>
                        <div className="rattings">
                          <i className="fa fa-star fill" />
                          <i className="fa fa-star fill" />
                          <i className="fa fa-star fill" />
                          <i className="fa fa-star-half fill" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <div className="top-candidate-box-extra">
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui.
                        </p>
                        <ul>
                          <li>Php</li>
                          <li>Android</li>
                          <li>Html</li>
                          <li className="more-skill bg-primary">+3</li>
                        </ul>
                      </div>
                      <a
                        href="top-candidate-detail.html"
                        className="btn btn-candidate-two bg-default"
                      >
                        View Detail
                      </a>
                      <a href="#l" className="btn btn-candidate-two bg-info">
                        Shortlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Freelancer */}
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="text-center">
                    <a href="freelancers-2.html" className="btn btn-primary">
                      Load More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Candidate Section */}
          {/* ============================ Call To Action ================================== */}
          <section className="theme-bg call-to-act-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="call-to-act">
                    <div className="call-to-act-head">
                      <h3>Want to Become a Success Employers?</h3>
                      <span>
                        We&apos;ll help you to grow your career and growth.
                      </span>
                    </div>
                    <a href="#" className="btn btn-call-to-act">
                      SignUp Today
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ============================ Call To Action End ================================== */}
          {/* ============================ Before Footer ================================== */}
          <div className="before-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="jb4-form-fields">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                      <span className="input-group-btn">
                        <button className="btn theme-bg" type="submit">
                          <span className="fa fa-paper-plane-o" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 hill">
                  <ul className="job stock-facts">
                    <li>
                      <span>2744</span>
                      <br />
                      Jobs Posted
                    </li>
                    <li>
                      <span>2365</span>
                      <br />
                      Jobs Posted
                    </li>
                    <li>
                      <span>2021</span>
                      <br />
                      Freelancer
                    </li>
                    <li>
                      <span>7542</span>
                      <br />
                      Companies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
