import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { checkToken, getMaxId, userLogout } from "../../api/apis";
import logout1 from "../../assets/images/logout.png";
import homeIcon from "../../assets/images/homeIcon.png";
import { useAuth } from "../../routes/AuthContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import user from "../../assets/images/user1.png";
import db from "../../assets/images/dashboardIcon.png";
import { Image } from "react-bootstrap";
import Logout from "../../assets/images/logout.svg";

export const MiddleHeader = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem("username");
  // const tokenValue = localStorage.getItem("token");

  // const a2 = localStorage.getItem("maxid");

  // const maxIdApi = async () => {
  //   const b = await checkToken(tokenValue);

  //   if (b.data.status === "invalid") {
  //     logout();
  //   }
  //   const a = await getMaxId(username);
  //   console.log("maxid value: ", JSON.stringify(a?.data));
  //   if (JSON.stringify(a?.data) !== a2) {
  //     logout();
  //   }
  // };

  const handleLogout = async () => {
    const logoutRes = await userLogout(username);
    if (logoutRes.status === 200) {
      localStorage.clear();
      navigate("/logins");
      logout();
    }
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  // useEffect(() => {
  //   maxIdApi();
  // }, []);

  const isIncluded = location.pathname.includes("/projectReport");

  return (
    <div className="md_Header_main_container mb-4">
      <Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as="div"
              className={location.pathname === "/schemeView" ? "active" : ""}
              onClick={() => handleNavigation("/schemeView")}
            >
              Scheme
            </Nav.Link>
            <Nav.Link
              as="div"
              className={location.pathname === "/overView" ? "active" : ""}
              onClick={() => handleNavigation("/overView")}
            >
              Overview
              {/* <Image src={homeIcon} alt="Datalog" /> */}
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="d-flex">
              <button className="logout" onClick={() => handleLogout()}>
                <img src={Logout} alt="scheme-icon" />
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
