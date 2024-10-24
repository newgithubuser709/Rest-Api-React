import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

// components import
import "./SingleProductStyle.css";
import "./SingleProductResponsive.css";

import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";

// slice/reducer action
import { AddToCart } from "../../reducers/CartSlice";

// Context Api
import Context from "../../context/ContextApi";

const SingleProduct = () => {
  //
  const dispatch = useDispatch();

  const { product__array } = useSelector(
    (state) => state.SingleProductSliceKey
  );
  console.log(product__array);

  const { ShowCartAdded, setShowCartAdded } = useContext(Context);
  const ShowAddedPopup = () => {
    setShowCartAdded(true);
  };

  return (
    <>
      <Nav />

      <section className="SingleProduct">
        <main className="container">
          {product__array &&
            product__array.map((product) => (
              <div className="singleProduct__box" key={product.product_id}>
                <div className="singleProduct__box__img">
                  <img src={product.image_thumbNail} alt="item" />
                </div>

                <div className="singleProduct__box__content">
                  <div className="product__name">{product.name}</div>
                  <div className="product__description_1">
                    {product.description_1}
                  </div>
                  <div className="product__description_2">
                    {product.description_2}
                  </div>
                  <div className="product__price">price: ${product.price}</div>

                  <div
                    className="singleProduct__box__cartBtn"
                    onClick={() => [
                      dispatch(AddToCart({ product })),
                      ShowAddedPopup(),
                    ]}
                  >
                    <p>add to cart</p>
                    <img src="./cart_icon_xs.png" alt="icon" />
                  </div>
                </div>
              </div>
            ))}
        </main>
      </section>

      <Footer />
    </>
  );
};

export default SingleProduct;
