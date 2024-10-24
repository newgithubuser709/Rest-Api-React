import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";

// components import
import "./TrendingProductsStyle.css";
import "./TrendingProductsResponsive.css";

// reducers/ slices
import { fetchAction } from "../../reducers/TrendingNowProductsSlice";
import { AddToCart } from "../../reducers/CartSlice";
import { PushSigleProduct } from "../../reducers/SingleProductSlice";

// Context Api
import Context from "../../context/ContextApi";

const TrendingProducts = () => {
  //
  const dispatch = useDispatch();

  const [Filter, setFilter] = useState("trending_now");
  const [Products_Counter, setProducts_Counter] = useState(4);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchAction({ Filter }));
  }, [Filter]);

  const { loading, promiseState, productList, error } = useSelector(
    (state) => state.TrendingNowProductsSliceKey
  );

  const showMoreProduct = () => {
    setProducts_Counter((prevCount) => prevCount + 4);
  };

  useEffect(() => {
    if (productList) {
      setProducts(productList.slice(0, Products_Counter));
      console.log(Products);
    }
  }, [productList, Products_Counter]);

  const { CartsProductList } = useSelector((state) => state.CartSliceKey);

  const { ShowCartAdded, setShowCartAdded } = useContext(Context);
  const ShowAddedPopup = () => {
    setShowCartAdded(true);
  };

  return (
    <>
      <section className="trending__now">
        <main className="container">
          {/* heading  */}
          <div className="trending__now__heading">trending now</div>
          {/* filter buttons  */}
          <div className="trending__now__filters">
            <ul>
              <li onClick={() => setFilter("trending_now")}>sale</li>
              <li onClick={() => setFilter("featured")}>featured</li>
              <li onClick={() => setFilter("new")}>new products</li>
            </ul>
          </div>
          <div className="trending_now__products">
            {loading === false &&
              promiseState === "fulfilled" &&
              Products.map((product) => (
                <div
                  className="trendingNow_product__box"
                  key={product.product_id}
                >
                  {/* img  */}
                  <a
                    href="/Product"
                    onClick={() => dispatch(PushSigleProduct({ product }))}
                  >
                    <div className="trendingNow_product__box__img">
                      <img src={product.image_thumbNail} alt="item" />
                    </div>
                  </a>

                  {/* content  */}
                  <div className="trendingNow_product__box__textContent">
                    {/* product name & text  */}
                    <div className="textContent__productName__rating">
                      <div className="textContent__productName">
                        {product.name}
                      </div>
                      <div
                        className="textContent____rating"
                        data-id={product.rating}
                      >
                        <img src="/stars_img.png" alt="rating" />
                      </div>
                    </div>
                    {/* product price & cart btn  */}
                    <div className="trendingNow_product__price__cartBtn">
                      <div className="trendingNow_product__price">
                        ${product.price}
                      </div>
                      <div
                        className="trendingNow_product__cartBtn"
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
        </main>

        {/* show more products button */}
        {productList && (
          <div
            className={`showMore__products__btn theme_btn
          ${Products_Counter == productList.length ? "btn_disabled" : ""}
          `}
            onClick={showMoreProduct}
          >
            show more
          </div>
        )}
      </section>
    </>
  );
};

export default TrendingProducts;
