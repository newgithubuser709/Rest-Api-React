import React, { useContext } from "react";
import { Link } from "react-router-dom";

// components
import "./HomeStyle.css";
import "./HomeResponsive.css";

import Nav from "../../components/navbar/Nav";
import TrendingProducts from "../../components/trendingProducts/TrendingProducts";
import Footer from "../../components/footer/Footer";

const Home = () => {
  //
  const path = import.meta.env.VITE_IMAGE_BASE_PATH;

  return (
    <>
      {/* nav section  */}
      <Nav />

      {/* Hero section  */}
      <section className="Hero_wrap">
        <main>
          <div className="Hero__container">
            <div className="Hero__content">
              <div className="hero__text__content">
                <h1>
                  Step up your <br /> FASHION GAME!
                </h1>
                <p>
                  upto 50% off <br /> on entire stock
                </p>
                <a href="/Store">
                  <div className="hero__shop_btn theme_btn">shop now </div>
                </a>
              </div>
              <div className="hero__img">
                <img src="/hero_img.png" alt="hero-bg" />
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* TrendingProducts section  */}
      <TrendingProducts />

      {/* trendingStyles sectiion  */}
      <section>
        <main>
          <div className="trendingStyles__bg">
            <div className="container">
              <div className="trendingStyles__content">
                <h2>TRENDING STYLES</h2>
                <p>New Shirt Collection 2023</p>
                <a href="/Store">
                  <div className="trendingStyles__shop_btn theme_btn">
                    shop now
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* fashion grid  */}
      <section>
        <main className="container">
          <div className="fashion__grid">
            <div className="fashion__box__wrap">
              <div className="women__fashion fashion__box">
                <p>
                  WOMEN
                  <br />
                  FASHION
                </p>
                <a href="/Women">
                  <div className="fashion__box__shop_btn">shop now</div>
                </a>
              </div>
            </div>
            <div className="fashion__box__wrap">
              <div className="men__fashion fashion__box">
                <p>
                  MEN
                  <br />
                  FASHION
                </p>
                <a href="/Men">
                  <div className="fashion__box__shop_btn">shop now</div>
                </a>
              </div>
            </div>
            <div className="fashion__box__wrap">
              <div className="kids__fashion fashion__box">
                <p>
                  KIDS
                  <br />
                  FASHION
                </p>
                <a href="/Kids">
                  <div className="fashion__box__shop_btn">shop now</div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* footer section  */}
      <Footer />
    </>
  );
};

export default Home;
