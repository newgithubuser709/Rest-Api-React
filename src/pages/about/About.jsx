// components import
import "./AboutStyle.css";
import "./AboutResponsive.css";

import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <Nav />

      <section className="About">
        <main>
          <div className="container">
            <div className="About__content">
              {/* img  */}
              <div className="About__img">
                <img src="/about__img.png" alt="About banner" />
              </div>
              {/* text  */}
              <div className="About__text">
                <p>
                  MORAT is led by Shibbal Fatima, an accomplished Fashion,
                  Graphic and Mural Artist who Studied at NCA National College
                  Of Arts Lahore.Inspired by light pastel shades Shibbal s a
                  glorified celebration of Pakistani Chinese fashion, This
                  philosophy is reflected in Fit styles by Shibbal, She has a
                  timeless approach to fashion.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
};

export default About;
