import React from "react";
import Ner from "../../assets/images/Ministry_of_Agriculture_India.svg";
import Prastuti from "../../assets/images/prastuti-db-logo.svg";
import Pragyanlogo from "../../assets/images/pragyanLogo.png";
import "react-tooltip/dist/react-tooltip.css";

const Header = (): JSX.Element => {
  return (
    <header className="SMV__header">
      <section className="BI__header__container">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Logo */}
            <div className="nerLogo order-1 col-3 col-sm-3 col-md-3 col-lg-3 text-center text-lg-start">
              <a href="/">
                <img src={Ner} alt="NER Logo" />
              </a>
            </div>

            {/* Center Logo */}
            <div className="order-2 col-7 col-sm-5 col-md-6 col-lg-6 text-center">
              <div className="CKR__name">
                <img src={Prastuti} alt="Prastuti Logo" />
              </div>
            </div>

            {/* Right controls */}
            <div className="order-3 col-2 col-sm-4 col-md-3 col-lg-3">
              <div className="d-flex justify-content-end align-items-center gap-3">
                <a
                  href="https://pragyan.nic.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Pragyanlogo}
                    alt="Pragyan Logo"
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;