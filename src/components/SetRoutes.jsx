import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// components import
import Fallback from "./fallback/Fallback";
import NotFound from "./NotFound"

const Home = React.lazy(() => import("../pages/home/Home"));
const About = React.lazy(() => import("../pages/about/About"));
const Women = React.lazy(() => import("../pages/women/Women"));
const Kids = React.lazy(() => import("../pages/kids/Kids"));
const Men = React.lazy(() => import("../pages/men/Men"));

const Shop = React.lazy(() => import("../pages/store/Shop"));
const Carts = React.lazy(() => import("../pages/carts/Carts"));
const Login = React.lazy(() => import("../pages/login/Login"));

const SingleProduct = React.lazy(() => import("./singleProduct/SingleProduct"));

const SetRoutes = () => {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Women" exact element={<Women />} />
          <Route path="/Kids" exact element={<Kids />} />
          <Route path="/Men" exact element={<Men />} />

          <Route path="/Store" exact element={<Shop />} />
          <Route path="/Carts" exact element={<Carts />} />
          <Route path="/Product" exact element={<SingleProduct />} />

          <Route path="/Login" exact element={<Login />} />

          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default SetRoutes;
