import React from "react";

// components import
import "./LoginStyle.css";
import "./LoginResponsive.css";

import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";

const Login = () => {
  return (
    <>
      <Nav />

      <section>
        <main className="login__background">
          <div className="container">
            <div className="login__section">
              {/* heading  */}
              <div className="login__heading">
                <p>LOGIN</p>
              </div>

              {/* form  */}
              <form action="/" className="login__form">
                <p>Email</p>
                <input
                  type="email"
                  name="user-email"
                  className="email__input"
                  required
                />

                <p>Passward</p>
                <input type="password" name="user-password" required />
                <a href="/" className="passwordForgot__btn">
                  Forgot Passward ?
                </a>

                <button type="submit" className="theme_btn submit__btn">
                  SIGN IN
                </button>
                <a href="/" className="createAccount__btn">
                  Create Account
                </a>
              </form>

              {/* get help btn  */}
              <div className="get__help">
                <div className="get__help__btn">Get Help ?</div>
              </div>
            </div>
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
};

export default Login;
