import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

// components import
import "./App.css";

import SetRoutes from "./components/SetRoutes";
import GoTop from "./components/goTop/GoTop";

// popups
import CartAddedPopup from "./pages/carts/itemAddedPopup/CartAddedPopup";

// context Api
import Context from "./context/ContextApi";

function App() {
  //
  const { ScrollTarget, setScrollTarget } = useContext(Context);
  const { ShowCartAdded, setShowCartAdded } = useContext(Context);

  const location = useLocation();

  useEffect(() => {
    if (ShowCartAdded === true) {
      setTimeout(() => {
        setShowCartAdded(false);
      }, 600);
    }
  }, [ShowCartAdded]);

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 340) {
        setScrollTarget(true);
      } else {
        setScrollTarget(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ScrollTarget]);

  return (
    <>
      {ShowCartAdded === true && <CartAddedPopup />}
      <GoTop />
      <SetRoutes />
    </>
  );
}

export default App;
