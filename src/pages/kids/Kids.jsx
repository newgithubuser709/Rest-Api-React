import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";

// components import
import "./KidsStyle.css";
import "./KidsResponsive.css";

import "./FilterBoxStyle.css";

import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";

// slice/reducer actions
import { fetchAction } from "../../reducers/KidsProductsSlice";
import { BestSalesfetchAction } from "../../reducers/BestSalesSlice";
import { AddToCart } from "../../reducers/CartSlice";
import { PushSigleProduct } from "../../reducers/SingleProductSlice";

// Context Api
import Context from "../../context/ContextApi";

const Kids = () => {
  // dispatch init
  const dispatch = useDispatch();

  // filters state
  const [FilterName, setFilterName] = useState("gender");
  const [FilterValue, setFilterValue] = useState("female");

  // custom price range state
  const [CustomPriceValue, setCustomPriceValue] = useState(25);

  // custom price functionality
  useEffect(() => {
    const customPrizeSetInput = document.getElementById("customPrizeSetInput");
    customPrizeSetInput.addEventListener("change", (e) => {
      setCustomPriceValue(e.target.value);
    });
  }, []);

  // woKidsmen products state selector
  const { loading, promiseState, productList, error } = useSelector(
    (state) => state.KidsProductsSliceKey
  );
  // Kids products fetch functionality
  useEffect(() => {
    dispatch(fetchAction({ FilterName, FilterValue }));
  }, [FilterName, FilterValue]);

  // best sales product state selector
  const {
    BestSales_Loading,
    BestSales_PromiseState,
    BestSales_ProductList,
    BestSales_Error,
  } = useSelector((state) => state.BestSalesSliceKey);

  // best sales product fetch functionality
  useEffect(() => {
    dispatch(BestSalesfetchAction());
  }, []);

  // item adding in cart popup funtionality
  const { ShowCartAdded, setShowCartAdded } = useContext(Context);
  const ShowAddedPopup = () => {
    setShowCartAdded(true);
  };
  return (
    <>
      <Nav />

      <section className="kids__section">
        <main className="kids__sect__container">
          <div className="kids_sect_grid">
            {/* box 1  */}
            <div className="kidsSectGrid__box_1">
              {/* head text  */}
              <div className="header__text">
                <p className="path__show">HOME / KIDS</p>
                <h1 className="heading">KIDS:</h1>
                <p className="info">
                  MORAT is renowned for clothes that are ethically made from
                  comfortable materials We offer top notch quality and trendy
                  clothes So, if you are looking for something unique, you've
                  come to the right place. Explore our kid's collection, and let
                  your kids flaunt their style.
                </p>
              </div>

              {/* products  */}
              <div className="products">
                {/* filter */}
                <div className="products__filter__btn"></div>

                {/* grid */}
                <div className="products__grid">
                  {productList &&
                    promiseState == "fulfilled" &&
                    productList.map((product) => (
                      <div className="product__box" key={product.product_id}>
                        {/* img */}
                        <a
                          href="/Product"
                          onClick={() =>
                            dispatch(PushSigleProduct({ product }))
                          }
                        >
                          <div className="product__box__img">
                            <img src={product.image_thumbNail} alt="item" />
                          </div>
                        </a>
                        {/* content  */}
                        <div className="product__box__textContent">
                          {/* product name & text  */}
                          <div className="textContent__productName__rating">
                            <div className="textContent__productName">
                              {product.name}
                            </div>
                            <div className="textContent____rating" data-id="">
                              <img src="/stars_img.png" alt="rating" />
                            </div>
                          </div>
                          {/* product price & cart btn  */}
                          <div className="product__price__cartBtn">
                            <div className="product__price">
                              ${product.price}
                            </div>
                            <div
                              className="product__cartBtn"
                              onClick={() => [
                                dispatch(AddToCart({ product })),
                                ShowAddedPopup(),
                              ]}
                            >
                              <p>add to cart</p>
                              <img src="/cart_icon_xs.png" alt="icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* box 2  */}

            <div className="womenSectGrid__box_2 products__filterBox">
              {/* color_box_container */}
              <div className="color_box_container">
                <div className="filterBox_heading">filters:</div>

                <div className="filter_colors">
                  <div className="filter_colors_heading filters-heading">
                    color
                  </div>

                  {/* colors - grid */}
                  <div className="color_grid">
                    <div className="color_box">
                      <div className="color_show color_show_white"></div>
                      <p>
                        white<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Black"></div>
                      <p>
                        Black<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Grey"></div>
                      <p>
                        Grey<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Red"></div>
                      <p>
                        Red<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Yellow"></div>
                      <p>
                        Yellow<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Blue"></div>
                      <p>
                        Blue<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Cyan"></div>
                      <p>
                        Cyan<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Green"></div>
                      <p>
                        Green<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Beigh"></div>
                      <p>
                        Beigh<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Navy"></div>
                      <p>
                        Navy<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Magenta"></div>
                      <p>
                        Magenta<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Purple"></div>
                      <p>
                        Purple<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Vermillion"></div>
                      <p>
                        Vermillion<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Pink"></div>
                      <p>
                        Pink<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Orange"></div>
                      <p>
                        Orange<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Brown"></div>
                      <p>
                        Brown<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box">
                      <div className="color_show color_show_Darks"></div>
                      <p>
                        Dark<span>&rarr;</span>
                      </p>
                    </div>
                    <div className="color_box color-box-color-none">
                      <div className="color_show color_show_none">
                        <i className="bi bi-slash-circle"></i>
                      </div>
                      <p>
                        none<span>&rarr;</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* product type wrap */}
              <div className="product_type_container">
                <div className="product_type">
                  <div className="product_type_heading filters-heading">
                    Product Type
                  </div>
                  <ul>
                    <li>
                      <i className="bi bi-plus"></i>
                      <p>Winter</p>
                    </li>
                    <li>
                      <i className="bi bi-plus"></i>
                      <p>Formal</p>
                    </li>
                    <li>
                      <i className="bi bi-plus"></i>
                      <p>Summer</p>
                    </li>
                    <li>
                      <i className="bi bi-plus"></i>
                      <p>Under Germents</p>
                    </li>
                    <li>
                      <i className="bi bi-plus"></i>
                      <p>Western</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* product size wrap */}
              <div className="product_size_container">
                <div className="size__heading filters-heading">size</div>
                <div className="size__buttons">
                  <ul>
                    <li>xs</li>
                    <li>s</li>
                    <li>m</li>
                    <li>l</li>
                    <li>xl</li>
                  </ul>
                </div>
              </div>

              {/* product prize wrap */}
              <div className="product_price_container">
                <div className="product_price_heading filters-heading">
                  prize
                </div>
                <div className="product_price">
                  <div className="product_price_input">
                    <input
                      id="customPrizeSetInput"
                      type="range"
                      min={25}
                      max={1000}
                      step={15}
                    />
                  </div>
                  <div className="price_show">$15 - ${CustomPriceValue}</div>
                </div>
              </div>

              {/* best sales wrap */}
              <div className="bestSales_container">
                <div className="bestSales_heading filters-heading">
                  best sales
                </div>

                <div className="bestSles_products_grid">
                  {/* ___ */}
                  {BestSales_ProductList &&
                    BestSales_ProductList.map((product) => (
                      <div
                        className="bestSales_GridBox"
                        key={product.product_id}
                      >
                        <a
                          href="/Product"
                          onClick={() =>
                            dispatch(PushSigleProduct({ product }))
                          }
                        >
                          <div className="bestSales_GridBox_img">
                            <img src={product.image_thumbNail} alt="item" />
                          </div>
                        </a>

                        <div className="bestSales_GridBox_content">
                          <p className="item_name">{product.name}</p>
                          <p className="item_price">{product.price}</p>
                          <img
                            src="/stars_img_removebg.png"
                            alt="rate"
                            className="item_star_img"
                          />

                          <div
                            className="bestSales__cartBtn"
                            onClick={() => [
                              dispatch(AddToCart({ product })),
                              ShowAddedPopup(),
                            ]}
                          >
                            <p>add to cart</p>
                            <i className="bi bi-bag"></i>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <hr />
      </section>

      <Footer />
    </>
  );
};

export default Kids;
