import { useContext } from "react";

// components import
import "./CartAddedPopupStyle.css";
import "./CartAddedPopupResponsive.css";

// Context Api
import Context from "../../../context/ContextApi";

const CartAddedPopup = () => {
  //
  const { ShowCartAdded } = useContext(Context);

  return (
    <>
      <div
        className={`${
          ShowCartAdded === true
            ? "itemAddedInCartPopup itemAddedInCartPopup__Script"
            : "itemAddedInCartPopup"
        }`}
      >
        <p>adding...</p>
      </div>
    </>
  );
};

export default CartAddedPopup;
