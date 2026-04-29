import CEDA_logo from "../../assets/images/cedaLogo.png";
import nicsi_logo from "../../assets/images/nicsiLogo.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="BI__footer__line"></div>
        <footer className="footer__container mt-1">
          <div className="container-fluid">
            <div className="row BI__Ver_center">
              <div className="order-2 col-6 order-sm-1 col-sm-2 col-md-2">
                <a
                  href="https://nicsi.nic.in/ceda/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={CEDA_logo} alt="NICSI Logo" />
                </a>
              </div>
              <div className="order-1 col-12 order-sm-2 col-sm-8 col-md-8">
                <p className="pragyan__footer__text">
                  Data Analytics Platform, Designed &amp; Developed by
                  <br />
                  <b>CENTRE OF EXCELLENCE FOR DATA ANALYTICS, NICSI</b>
                </p>
              </div>
              <div className="d-flex order-3 col-6 order-sm-3 col-sm-2 col-md-2 BI__justify_end">
                <a
                  className="BI__logos_sec"
                  href="https://nicsi.nic.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={nicsi_logo} alt="NIC Logo" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
