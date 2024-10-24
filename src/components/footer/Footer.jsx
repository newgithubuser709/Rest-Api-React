// components
import "./FooterStyle.css";
import "./FooterResponsive.css";

const Footer = () => {
  const date = new Date();
  const CurrentYear = date.getFullYear();

  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            {/* Footer News - Letter */}
            <div className="footer__join_NewsLetter">
              <div className="heading">JOIN OUR NEWS LETTER</div>
              <div className="form">
                <form action="/">
                  <input type="email" name="e-mail" required />
                  <button>subscribe</button>
                </form>
              </div>
            </div>
            {/* footer grid */}
            <div className="footer__grid">
              {/* 1  */}
              <div className="grid__box grid__box__1">
                <div className="logo">
                  <img src="/Logo.png" alt="Logo" />
                </div>
                <p className="grid__box__1__para__1">
                  Morat is a London based Fashion brand . Join the Latest Fshion
                  trends like never before with Morat where you can buy anything
                  you please!
                </p>
                <p className="grid__box__1__para__2">
                  Gets your order delivered at your door step !
                </p>
                <div className="contact">
                  <p>
                    <span>
                      <img src="/call__icon.png" alt="icon" />
                    </span>
                    +923414077978
                  </p>
                  <p>
                    <span>
                      <img src="/world__icon.png" alt="icon" />
                    </span>
                    www.morat.com
                  </p>
                  <p>
                    <span>
                      <img src="/mail__icon.png" alt="icon" />
                    </span>
                    tx.haseeb.07@gmail.com
                  </p>
                  <p>
                    <span>
                      <img src="/location__icon.png" alt="icon" />
                    </span>
                    68 street- London
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="grid__box grid__box__2">
                <div className="heading">Your Account</div>
                <ul>
                  <li>
                    personal info<span>&rarr;</span>
                  </li>
                  <li>
                    orders<span>&rarr;</span>
                  </li>
                  <li>
                    credit slips<span>&rarr;</span>
                  </li>
                  <li>
                    adresses<span>&rarr;</span>
                  </li>
                </ul>
              </div>
              {/* 3 */}
              <div className="grid__box grid__box__3">
                <div className="heading">Our Company</div>
                <ul>
                  <li>
                    Delivery<span>&rarr;</span>
                  </li>
                  <li>
                    Legal Notice<span>&rarr;</span>
                  </li>
                  <li>
                    Terms and Conditions<span>&rarr;</span>
                  </li>
                  <li>
                    About Us<span>&rarr;</span>
                  </li>
                  <li>
                    Secure Payment<span>&rarr;</span>
                  </li>
                  <li>
                    Contact Us<span>&rarr;</span>
                  </li>
                </ul>
              </div>
              {/* 4 */}
              <div className="grid__box grid__box__4">
                <div className="heading">Products</div>
                <ul>
                  <li>
                    Price drop<span>&rarr;</span>
                  </li>
                  <li>
                    New Products<span>&rarr;</span>
                  </li>
                  <li>
                    Best Sales<span>&rarr;</span>
                  </li>
                  <li>
                    Stories<span>&rarr;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* copy-Right stamp  */}
        <section className="copy_right__stamp">
          <div className="container">
            <main>
              <p>All rights Reserved | {CurrentYear} | tx_haseeb</p>
            </main>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
