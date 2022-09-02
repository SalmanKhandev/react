import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import moment from "moment";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";

import { Pagination, Navigation } from "swiper";


const Home = () => {
  const [carousels, setCarousels] = useState([]);
  const [features, setFeatures] = useState([]);
  const [exhibits, setExhibits] = useState([]);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isToggle, setIsToggle] = useState(true);

  const handleClick = (event) => {
    // ️ toggle isActive state on click
    setIsToggle((current) => !current);
  };

  const baseUrl = "http://18.190.74.186:3005";

 

  async function allCarousels() {
    await axios
      .get(`${baseUrl}/api/allCarousels`)
      .then((result) => {
        setCarousels(result.data.data);
        // console.log(result.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  async function featuredExhibits() {
    await axios
      .get(`${baseUrl}/api/featuredExhists`)
      .then((result) => {
        setFeatures(result.data.data);
        // console.log(result.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  async function allNews() {
    await axios
      .get(`${baseUrl}/api/allNews`)
      .then((result) => {
        setNews(result.data.data);
        console.log("news", result.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  async function allEvents() {
    await axios
      .get(`${baseUrl}/api/allevents`)
      .then((result) => {
        setEvents(result.data.data);
        // console.log(result.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  // all products api
  async function allCompanies() {
    await axios
      .get(`${baseUrl}/api/allCompanies`)
      .then((result) => {
        setCompanies(result.data.data);
        // console.log(result.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  async function allProducts() {
    await axios
      .get(`${baseUrl}/api/allProducts`)
      .then((result) => {
        setProducts(result.data.data);
        // console.log(result.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  async function allExhibits() {
    await axios
      .get(`${baseUrl}/api/allExhibits`)
      .then((result) => {
        setExhibits(result.data.data);
        // console.log(result.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  async function allCategories() {
    await axios
      .get(`${baseUrl}/api/allCategories`)
      .then((result) => {
        setCategories(result.data.data);
        // console.log(result.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  async function allExpertise() {
    await axios
      .get(`${baseUrl}/api/allExpertise`)
      .then((result) => {
        setExpertise(result.data.data);
        // console.log(result.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  useEffect(() => {
    allCarousels();
    featuredExhibits();
    allNews();
    allEvents();
    allCompanies();
    allProducts();
    allExhibits();
    allCategories();
    allExpertise();
  }, []);

  return (
    <section className="sec-index">
  <nav>
  <div className="nav-main-grid">
    <div className="nav-main-left">
      <div className="logo">
        <img src="./assets/img/logo.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <a href="#">Product</a>
        <a href="#">People</a>
        <a href="#">Companies</a>
        <a href="#">Events</a>
      </div>
      <div className="nav-search">
        <img src="assets/img/search.png" alt="" />
        <input type="text" className="form-control" />
      </div>
    </div>
    <div className="nav-main-right">
      <div>
        <span className="notification-nav nav-drop-parent">
          <i>01</i>
          <img src="assets/img/bell.png" alt="" />
          <div className="dropdown-nav change-position-nav">
            <div className="nav-noti-main">
              <div className="nav-noti-header">Notification</div>
              <div className="nav-noti-content">
                <div className="noti-tile-main-scroll">
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5 className="is-online">Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span className="calendar-nav">
                      <img src="assets/img/calendar.png" alt="" />
                      Add a new event to thier calendar Mar 31, 22:34
                    </span>
                  </div>
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5 className="is-online">Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span className="calendar-nav">
                      <img src="assets/img/calendar.png" alt="" />
                      Add a new event to thier calendar Mar 31, 22:34
                    </span>
                  </div>
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5 className="is-online">Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span className="calendar-nav">
                      <img src="assets/img/calendar.png" alt="" />
                      Add a new event to thier calendar Mar 31, 22:34
                    </span>
                  </div>
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5 className="is-online">Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span className="calendar-nav">
                      <img src="assets/img/calendar.png" alt="" />
                      Add a new event to thier calendar Mar 31, 22:34
                    </span>
                  </div>
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5 className="is-online">Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span className="calendar-nav">
                      <img src="assets/img/calendar.png" alt="" />
                      Add a new event to thier calendar Mar 31, 22:34
                    </span>
                  </div>
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5 className="is-online">Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span className="calendar-nav">
                      <img src="assets/img/calendar.png" alt="" />
                      Add a new event to thier calendar Mar 31, 22:34
                    </span>
                  </div>
                </div>
              </div>
              <div className="nav-noti-footer">All notification</div>
            </div>
          </div>
        </span>
        <span className="notification-nav nav-drop-parent">
          <i>01</i>
          <img src="assets/img/chat2.png" alt="" />
          <div className="dropdown-nav">
            <div className="nav-noti-main">
              <div className="nav-noti-header">Messages</div>
              <div className="nav-noti-content">
                <div className="noti-tile-main-scroll">
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5 className="is-online">Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span>09:41 Today</span>
                  </div>
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5>Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span>1 Week ago</span>
                  </div>
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5 className="is-online">Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span>3 days ago</span>
                  </div>
                  <div className="noti-tile-main">
                    <img src="assets/img/profile.png" alt="" />
                    <h5 className="is-online">Name Person</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eratin lorem fames cras vivamus.
                    </p>
                    <span>12:01 Yesterday</span>
                  </div>
                </div>
              </div>
              <div className="nav-noti-footer">All messages</div>
            </div>
          </div>
        </span>
        <span className="profile-nav nav-drop-parent">
          <img src="assets/img/profile.png" alt="" />
          <div className="dropdown-nav change-width">
            <div className="logout-main">
              <div className="logout-header">
                <img src="assets/img/profile.png" alt="" />
                <label>Person Name</label>
                <p>anemail@noemail.com</p>
              </div>
              <div className="logout-content">
                <a href="#">
                  <img src="assets/img/editprofile.png" alt="" />
                  Edit Profile
                </a>
                <a href="#">
                  <img src="assets/img/setting.png" alt="" />
                  Setting
                </a>
                <a href="#">
                  <img src="assets/img/dashboard.png" alt="" />
                  Dashboard
                </a>
              </div>
              <div className="logout-footer">
                <img src="assets/img/signout.png" alt="" />
                Signout
              </div>
            </div>
          </div>
        </span>
        <div className="fa fa-bars">
          <div className="nav-items-res">
            <a href="#">Companies</a>
            <a href="#">People</a>
            <a href="#">Product</a>
            <a href="#">Events</a>
            <a href="#">Exhibits</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    <header>
      <div className="header-arrow-img">
        <img src="assets/img/headerarrows.png" alt="" />
      </div>
      <div className="mobile-icons">
        <div className="mobile-icon-top">
          <div>
            <span>
              <img src="assets/img/plan.png" alt="" />
            </span>
            <p>Aerospace</p>
          </div>
        </div>
        <div className="mobile-icon-top">
          <div>
            <span>
              <img src="assets/img/flash.png" alt="" />
            </span>
            <p>Energy</p>
          </div>
          <div>
            <span>
              <img src="assets/img/sheild.png" alt="" />
            </span>
            <p>Defense &amp; Security</p>
          </div>
        </div>
        <div className="mobile-icon-top">
          <div>
            <span>
              <img src="assets/img/hammer.png" alt="" />
            </span>
            <p>Mining</p>
          </div>
          <div>
            <span>
              <img src="assets/img/icon.png" alt="" />
            </span>
            <p>Food &amp; Beverage</p>
          </div>
        </div>
        <div className="mobile-icon-top">
          <div>
            <span>
              <img src="assets/img/plus.png" alt="" />
            </span>
            <p>Healthcare</p>
          </div>
        </div>
      </div>
      <div className="header-content">
        <h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eratin</p>
        <button className="btn">Sign up</button>
      </div>
      <div className="header-circle-items">
        <div>
          <span>
            <img src="assets/img/plan.png" alt="" />
          </span>
          <p>Aerospace</p>
        </div>
        <div>
          <span>
            <img src="assets/img/sheild.png" alt="" />
          </span>
          <p>Defense &amp; Security</p>
        </div>
        <div>
          <span>
            <img src="assets/img/icon.png" alt="" />
          </span>
          <p>Food &amp; Beverage</p>
        </div>
        <div>
          <span>
            <img src="assets/img/plus.png" alt="" />
          </span>
          <p>Healthcare</p>
        </div>
        <div>
          <span>
            <img src="assets/img/flash.png" alt="" />
          </span>
          <p>Energy</p>
        </div>
        <div>
          <span>
            <img src="assets/img/hammer.png" alt="" />
          </span>
          <p>Mining</p>
        </div>
      </div>
    </header>
    <section className="sec-index-first">
      <div className="custom-container">
        <div className="top-round-icons">
          <div className="top-circle-items">
            <div>
              <span>
                <img src="assets/img/plan.png" alt="" />
              </span>
            </div>
            <div>
              <span>
                <img src="assets/img/sheild.png" alt="" />
              </span>
            </div>
            <div>
              <span>
                <img src="assets/img/icon.png" alt="" />
              </span>
            </div>
            <div>
              <span>
                <img src="assets/img/plus.png" alt="" />
              </span>
            </div>
            <div>
              <span>
                <img src="assets/img/flash.png" alt="" />
              </span>
            </div>
            <div>
              <span>
                <img src="assets/img/hammer.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec-second">
      <div className="custom-container">
        <div className="row">
          <div className="col-sm-2">
            <div className="top-round-text">
              <p>
                <span>Industory</span> Choose{" "}
                <img src="assets/img/arrowdown.png" alt="" />{" "}
              </p>
            </div>
          </div>
          <div className="col-sm-10">
            <div className="res-search">
              <div className="res-head-search">
                <span>Industry</span>
                <p>Aerospace</p>
              </div>
              <div className="res-search-main">
                <img src="assets/img/search.png" alt="" />
                <input type="text" className="form-control" />
              </div>
              <button className="btn">
                <img src="assets/img/filter.png" alt="" />
              </button>
            </div>
            {/* *******First Slider******* */}
            <div className="heading-all hide-desktop">
              <h2>Upcoming Events</h2>
            </div>
            <div className="first-slider">
              <div uk-slider="">
                <ul className="uk-slider-items uk-child-width-1-3 uk-child-width-1-4@">
                {carousels.map((carousel) => (
                  <li>
                    <div className="arrow-plan-tile">
                      <img src={`${baseUrl}/uploads/carousels/${carousel.image}`} alt="" />
                      <label> {carousel.name}</label>
                      <p>{moment(carousel.date).format("DD.MM.YYYY")}</p>
                      <p>Farnborough, UK</p>
                    </div>
                  </li>
               ))}

                </ul>
                <a
                  className="uk-position-center-left uk-position-small left-arrow-css same-slider-css uk-hidden-hover"
                  href="#"
                  uk-slider-item="previous"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
                <a
                  className="uk-position-center-right same-slider-css right-arrow-css uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slider-item="next"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec-third">
      <div className="custom-container">
        <div className="row">
          <div className="col-sm-2">
            <div className="sidebar-main">
              <div className="drop-main">
                <div className="drop-parent">
                  <h6 data-toggle="collapse" data-target="#d1">
                    Sub Sector
                    <img src="assets/img/arrowdown.png" alt="" />
                  </h6>
                  <div id="d1" className="content-dropdown collapse show">
                    <div className="items-drop">
                      <label className="radio-inline">
                        <input type="checkbox" name="optradio" /> Aviation
                      </label>
                    </div>
                    <div className="items-drop">
                      <label className="radio-inline">
                        <input type="checkbox" name="optradio" /> Aviation
                      </label>
                    </div>
                    <div className="items-drop">
                      <label className="radio-inline">
                        <input type="checkbox" name="optradio" /> Aviation
                      </label>
                    </div>
                    <div className="items-drop">
                      <label className="radio-inline">
                        <input type="checkbox" name="optradio" /> Aviation
                      </label>
                    </div>
                  </div>
                </div>
                <div className="drop-parent">
                  <h6>
                    Pavilion
                    <img src="assets/img/arrowdown.png" alt="" />
                  </h6>
                </div>
                <div className="drop-parent">
                  <h6>
                    Region
                    <img src="assets/img/arrowdown.png" alt="" />
                  </h6>
                </div>
                <div className="drop-parent">
                  <h6>
                    Country
                    <img src="assets/img/arrowdown.png" alt="" />
                  </h6>
                </div>
                <div className="drop-parent">
                  <h6>
                    Year
                    <img src="assets/img/arrowdown.png" alt="" />
                  </h6>
                </div>
                <div className="drop-parent">
                  <h6>
                    Month
                    <img src="assets/img/arrowdown.png" alt="" />
                  </h6>
                </div>
                <div className="drop-parent">
                  <h6>
                    Products
                    <img src="assets/img/arrowdown.png" alt="" />
                  </h6>
                </div>
                <div className="drop-parent">
                  <h6>
                    Services
                    <img src="assets/img/arrowdown.png" alt="" />
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10">
            {/* *******Second Slider******* */}
            <div className="heading-all">
              <h2>Featured Exhibits</h2>
              <p>
                Exhibits from platform partners appearing at events across the
                globe
              </p>
            </div>
            <div className="second-slider">
              <div uk-slider="">
                  <ul className="uk-slider-items uk-child-width-1-3 uk-child-width-1-4@">
                    {/* featured started */}
                {features.map((feature) => (
                  <li>
                    <div className="second-slider-card">
                      <div className="card-img">
                        <img
                          className="bookmark"
                          src="assets/img/bookmarkfill.png"
                          alt=""
                        />
                        <img
                          className="main-img"
                          src={`${baseUrl}/uploads/exhibits/${feature.image}`}
                          alt=""
                        />
                        <span className="label">Label</span>
                        <span className="date"> {moment(feature.date).format("DD/MM/YY")}</span>
                      </div>
                      <div className="card-content">
                        <label> {feature.title}</label>
                        <p className="bulid-span">
                          <span>Company Name</span>
                          <span>Pavilion</span>
                          <span>Booth</span>
                        </p>
                        <p>
                        {feature.details}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
                    
              {/* feaured exhists ended */}
                </ul>
                <a
                  className="uk-position-center-left uk-position-small left-arrow-css same-slider-css uk-hidden-hover"
                  href="#"
                  uk-slider-item="previous"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
                <a
                  className="uk-position-center-right same-slider-css right-arrow-css uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slider-item="next"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
              </div>
            </div>
            {/* *******Products Slider******* */}
            <div className="heading-all">
              <h2>News</h2>
            </div>
            <div className="news-slider">
              <div uk-slider="">
                <ul className="uk-slider-items uk-child-width-1-3 uk-child-width-1-4@">
                  
                    {/* news started  */}
                    
                    {news.map((allnews) => (
                  <li>
                    <div className="second-slider-card">
                      <div className="card-img">
                        <img
                          className="bookmark"
                          src="assets/img/bookmarkfill.png"
                          alt=""
                        />
                        <img
                          className="main-img"
                          src={`${baseUrl}/uploads/news/${allnews.image}`}
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <label>
                        {allnews.details}
                        </label>
                      </div>
                      <div className="card-bottom">
                        <p>
                          <span> {moment(allnews.date).format("DD/MM/YY")} </span> {allnews.author}
                        </p>
                        <img src="assets/img/dots.png" alt="" />
                      </div>
                    </div>
                      </li>
                    
                    ))}

                    {/* news ended  */}
                </ul>
                <a
                  className="uk-position-center-left uk-position-small left-arrow-css same-slider-css uk-hidden-hover"
                  href="#"
                  uk-slider-item="previous"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
                <a
                  className="uk-position-center-right same-slider-css right-arrow-css uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slider-item="next"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
              </div>
            </div>
            {/* *******People Slider******* */}
            <div className="heading-all">
              <h2>People attending upcoming events</h2>
            </div>
            <div className="people-slider">
              <div uk-slider="">
                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@">
     
                {events.map((event) => (
                  <li>
                    <div className="arrow-plan-tile">
                      <img
                        className="profile-img"
                        src={`${baseUrl}/uploads/events/${event.image}`}
                        alt=""
                      />
                      <label>{event.title}</label>
                      <p>Location, {event.location}</p>
                      <p>
                        <img src="assets/img/bookmarklight.png" alt="" />
                        <img src="assets/img/chat1.png" alt="" />
                      </p>
                    </div>
                  </li>
                    ))}
                </ul>
                <a
                  className="uk-position-center-left uk-position-small left-arrow-css same-slider-css uk-hidden-hover"
                  href="#"
                  uk-slider-item="previous"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
                <a
                  className="uk-position-center-right same-slider-css right-arrow-css uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slider-item="next"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
              </div>
            </div>
            {/* *******First Slider******* */}
            <div className="heading-all">
              <h2>Companies attending upcoming events</h2>
            </div>
            <div className="companies-slider">
              <div uk-slider="">
                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@">
              
                {companies.map((company) => (
                  <li>
                    <div className="arrow-plan-tile">
                      <div className="side-img">
                        <img
                          className="bookmark-img"
                          src={`${baseUrl}/uploads/companies/${company.image}`}
                          alt=""
                        />
                        <img
                          className="big-img"
                          src={`${baseUrl}/uploads/companies/${company.image}`}
                          alt=""
                        />
                      </div>
                      <label>  {company.name}</label>
                      <p>
                        <span>International Trade and Development</span>
                        <span>Aviation and Aerospace Manufacturing</span>
                        <span> {company.name}</span>
                        <span> {company.location}</span>
                      </p>
                    </div>
                  </li>
                   ))}
                </ul>
                <a
                  className="uk-position-center-left uk-position-small left-arrow-css same-slider-css uk-hidden-hover"
                  href="#"
                  uk-slider-item="previous"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
                <a
                  className="uk-position-center-right same-slider-css right-arrow-css uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slider-item="next"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
              </div>
            </div>
            {/* *******Products Slider******* */}
            <div className="heading-all">
              <h2>Products</h2>
            </div>
            <div className="products-slider">
              <div uk-slider="">
                <ul className="uk-slider-items uk-child-width-1-3 uk-child-width-1-4@">
                    {products.map((product) => (
                      <li>
                        <div className="second-slider-card">
                          <div className="card-img">
                            <img
                              className="bookmark"
                              src="assets/img/bookmarkfill.png"
                              alt=""
                            />
                            <img
                              className="main-img"
                              src={`${baseUrl}/uploads/products/${product.image}`}
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <label>
                              {product.title}
                            </label>
                            <p className="bulid-span">
                              <span>{product.company}</span>
                              <span>Pavilion</span>
                              <span>Booth</span>
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
                <a
                  className="uk-position-center-left uk-position-small left-arrow-css same-slider-css uk-hidden-hover"
                  href="#"
                  uk-slider-item="previous"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
                <a
                  className="uk-position-center-right same-slider-css right-arrow-css uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slider-item="next"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
              </div>
            </div>
            <hr />
            {/* *******Products Slider******* */}
            <div className="jet-oil-slider for-res-color">
              <div className="row">
                  {exhibits.map((exhibits, index) => (
                    <div className="col-sm-4">
                      <div className="second-slider-card">
                        <div className="card-img">
                          <img
                            className="bookmark"
                            src="assets/img/bookmarkfill.png"
                            alt=""
                          />
                          <img
                            className="main-img"
                            src={`${baseUrl}/uploads/exhibits/${exhibits.image}`}
                            alt=""
                          />
                          <span className="label">Label</span>
                          <span className="date">23-25 jul</span>
                        </div>
                        <div className="card-content">
                          <label>  {exhibits.title}</label>
                          <p className="bulid-span">
                            <span>Company Name</span>
                            <span>Pavilion</span>
                            <span>Booth</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            
             
            </div>
            {/* *******Products Slider******* */}
            <div className="heading-all">
              <h2>Find products by category</h2>
            </div>
            <div className="find-slider">
              <div uk-slider="">
                <ul className="uk-slider-items uk-child-width-1-6 uk-child-width-1-4@">
           
                    {categories.map((category) => (
                      <li>
                        <div className="find-tile">
                          <img src="assets/img/mic.png" alt="" />
                          <p>{category.name}</p>
                        </div>
                      </li>
                    ))}
                </ul>
                <a
                  className="uk-position-center-left uk-position-small left-arrow-css same-slider-css uk-hidden-hover"
                  href="#"
                  uk-slider-item="previous"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
                <a
                  className="uk-position-center-right same-slider-css right-arrow-css uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slider-item="next"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
              </div>
            </div>
            {/* *******Products Slider******* */}
            <div className="heading-all">
              <h2>Connect with people by expertise</h2>
            </div>
            <div className="find-slider">
              <div uk-slider="">
                <ul className="uk-slider-items uk-child-width-1-6 uk-child-width-1-4@">
            
                    {expertise.map((expert) => (
                      <li>
                        <div className="find-tile">
                          <img src="assets/img/mic.png" alt="" />
                          <p>{expert.name}</p>
                        </div>
                      </li>
                    ))}
                </ul>
                <a
                  className="uk-position-center-left uk-position-small left-arrow-css same-slider-css uk-hidden-hover"
                  href="#"
                  uk-slider-item="previous"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
                <a
                  className="uk-position-center-right same-slider-css right-arrow-css uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slider-item="next"
                >
                  <img src="assets/img/sliderarrow.png" alt="" />
                </a>
              </div>
            </div>
            <div className="jet-oil-slider">
           
              
              <div className="row">
               
                  {exhibits.map((exhibit) => (

                    <div className="col-sm-4">
                      <div className="second-slider-card">
                        <div className="card-img">
                          <img
                            className="bookmark"
                            src="assets/img/bookmarkfill.png"
                            alt=""
                          />
                          <img
                            className="main-img"
                            src={`${baseUrl}/uploads/exhibits/${exhibit.image}`}
                            alt=""
                          />
                          <span className="label">Label</span>
                          <span className="date">{moment(exhibit.date).format("DD.MM.YYYY")}</span>
                        </div>
                        <div className="card-content">
                          <label>{exhibit.title}</label>
                          <p className="bulid-span">
                            <span>Company Name</span>
                            <span>Pavilion</span>
                            <span>Booth</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  
  );
};

export default Home;
