import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components import
import "./CartsStyle.css";
import "./CartsResponsive.css";

import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";

// alice/reducer action
import { RemoveFromCart } from "../../reducers/CartSlice";
import { IncreaseQuantity } from "../../reducers/CartSlice";
import { DecreaseQuantity } from "../../reducers/CartSlice";
import { PushSigleProduct } from "../../reducers/SingleProductSlice";
import { Link } from "react-router-dom/dist";

const Carts = () => {
  //  dispatch
  const dispatch = useDispatch();
  // state
  const [TotalResults, setTotalResults] = useState(0);
  // selector
  const { CartsProductList } = useSelector((state) => state.CartSliceKey);

  // total carts results
  useEffect(() => {
    const sum = CartsProductList.reduce(
      (initial, items) => initial + items.quantity,
      0
    );

    setTotalResults(sum);
  }, [CartsProductList]);

  return (
    <>
      <Nav />

      {/* Carts */}

      <section className="CartSection__wrap">
        <main className="container">
          <div className="CartSection">
            <div className="CartSection__heading">
              products: <br />
              <p>total item/results {TotalResults}</p>
            </div>
            <div className="Cart_CheckOut">
              <p>
                checkout <span>&rarr;</span>
              </p>
            </div>

            <div className="CartProducts__grid">
              {/* // */}
              {CartsProductList &&
                CartsProductList.map((product) => (
                  <div className="CartProduct__box" key={product.product_id}>
                    <div className="product__img">
                      <Link
                        to="/Product"
                        onClick={() => dispatch(PushSigleProduct({ product }))}
                      >
                        <img src={product.image_thumbNail} alt="item" />
                      </Link>
                    </div>

                    <div className="product__detail">
                      <div className="product__name__deleteBtn">
                        <div className="productName">{product.name}</div>
                        <div
                          className="productDelete"
                          onClick={() => dispatch(RemoveFromCart({ product }))}
                        >
                          <i className="bi bi-x-circle-fill"></i>
                        </div>
                      </div>

                      <div className="product__price__quantityBtn">
                        <div className="productPrice">
                          price: ${product.price}
                        </div>
                        <div className="productQuantityBtn">
                          <button
                            onClick={() =>
                              dispatch(DecreaseQuantity({ product }))
                            }
                          >
                            <i className="bi bi-dash-circle-fill"></i>
                          </button>
                          <p>{product.quantity}</p>
                          <button
                            onClick={() =>
                              dispatch(IncreaseQuantity({ product }))
                            }
                          >
                            <i className="bi bi-plus-circle-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {TotalResults === 0 && (
                <>
                  <div className="cartEmtyText">
                    <p>emty cart...</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
};

export default Carts;
