import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components import
import Fallback from "../../components/fallback/Fallback";

import "./ShopStyle.css";
import "./ShopResponsive.css";

import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";

// Slice / Reducer Action import
import { fetchAction } from "../../reducers/SearchFilterProductsSlice";
import { PushSigleProduct } from "../../reducers/SingleProductSlice";
import { AddToCart } from "../../reducers/CartSlice";

// Context API
import Context from "../../context/ContextApi";

const Shop = () => {
  // Dispatch initialization
  const dispatch = useDispatch();

  const [productsCounter, setProductsCounter] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  const { loading, productList, error } = useSelector(
    (state) => state.SearchFilterProductsSliceKey
  );

  useEffect(() => {
    if (productList) {
      setProducts(productList.slice(0, productsCounter));

      if (searchTerm.length > 0) {
        const keywords = searchTerm.toLowerCase().split(" ");
        const filteredProducts = productList.filter((element) => {
          return keywords.every((keyword) => {
            return Object.values(element).find((value) =>
              String(value).toLowerCase().includes(keyword.toLowerCase())
            );
          });
        });

        setProducts(filteredProducts);
      }
    }
  }, [productList, productsCounter, searchTerm]);

  const showMoreProduct = () => {
    setProductsCounter((prevCount) => prevCount + 12);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // added popup
  const { setShowCartAdded } = useContext(Context);
  const ShowAddedPopup = () => {
    setShowCartAdded(true);
  };

  if (loading) {
    return <Fallback />;
  }

  if (error) {
    return (
      <>
        <h1>
          something went wrong <br />
          {error}
        </h1>
      </>
    );
  }
  return (
    <>
      <Nav />

      <section className="store">
        <main className="container">
          <div className="store">
            {/* Search filter */}
            <div className="store__search__filter">
              <div className="search__filter__input">
                <input
                  type="search"
                  name="search"
                  placeholder="start typing to filter..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            {/* Products */}
            <div className="search__products__show">
              <div className="search__products__show__heading">products:</div>

              <div className="products__show__grid">
                {/* Grid */}

                {Products && Products.length == 0 ? (
                  <>
                    <h1>No products matching the criteria</h1>
                  </>
                ) : (
                  Products.map((product) => (
                    <div
                      className="products__show__grid__item"
                      key={product.product_id}
                    >
                      <Link
                        to="/Product"
                        onClick={() => dispatch(PushSigleProduct({ product }))}
                      >
                        <div className="grid__item__img">
                          <img src={product.image_thumbNail} alt="item" />
                        </div>
                      </Link>

                      <div className="grid__item__name__rating">
                        <div className="grid__item__name">{product.name}</div>
                        <div className="grid__item__rating" data-id="">
                          <img src="/stars_img_removebg.png" alt="rating" />
                        </div>
                      </div>

                      <div className="grid__item__price__cartBtn">
                        <div className="grid__item__price">{product.price}</div>
                        <div
                          className="grid__item__cartBtn"
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
                  ))
                )}
              </div>
            </div>

            {/* Show more products button */}

            {Products && productList && searchTerm.length <= 0 && (
              <div
                className={`${
                  Products.length == productList.length ? "btn__disabled" : ""
                } showMore__btn theme_btn `}
                onClick={showMoreProduct}
              >
                show more
              </div>
            )}
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
};

export default Shop;
