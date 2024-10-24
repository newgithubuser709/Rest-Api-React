import React, { useContext } from "react";

// components import
import "./GoTopStyle.css";
import "./GoTopResponsive.css";

// context - api
import Context from "../../context/ContextApi";

const GoTop = () => {
  //
  const { ScrollTarget, setScrollTarget } = useContext(Context);

  const handleGoTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`${
          ScrollTarget === true
            ? "goTop__container goTop__container__Script"
            : "goTop__container"
        }`}
        onClick={handleGoTop}
      >
        <i className="bi bi-chevron-double-up"></i>
      </div>
    </>
  );
};

export default GoTop;
