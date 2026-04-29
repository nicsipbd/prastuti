import React, { useEffect } from "react";
import * as SupersetSDK from "@superset-ui/embedded-sdk";
// import { useParams } from "react-router";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./overview-page.module.css";
import Logout from "../assets/images/logout.svg";
import User from "../assets/images/user.png";
import Back from "../assets/images/back.png";
import { embedDashboard } from "@superset-ui/embedded-sdk";

const IframeDashboard = () => {
  const navigate = useNavigate();

  const { embedId } = useParams();

  // const { dbId } = useParams();

  useEffect(() => {
    const fetchGuestTokenFromBackend = async () => {
      const params = new URLSearchParams({
        username: "aadmin",
        password: "@@dm1n#",
        iframe_user: "iframe",
        first_name: "pragyan",
        last_name: "iframe",
        id: embedId,
      });

      // const response = await fetch(`http://localhost:8088/api/guest_token?${params.toString()}`); // local
      const response = await fetch(
        `/dash-api/api/guest_token?${params.toString()}`,
      );
      const data = await response.json();
      return data.guestToken;
    };

    const embedDashboardWithToken = async () => {
      const token = await fetchGuestTokenFromBackend();
      if (token) {
        embedDashboard({
          id: embedId,
          supersetDomain: "/dash-api/",
          mountPoint: document.getElementById("my-superset-container"),
          fetchGuestToken: () => token,
          dashboardUiConfig: {
            hideTitle: false,
            filters: {
              expanded: false,
            },
            urlParams: {},
          },
        });
      }
    };

    embedDashboardWithToken();
  }, [embedId]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  // useEffect(() => {
  //   if (!dbId) return;

  //   const { embedDashboard } = SupersetSDK;

  //   const fetchGuestToken = async () => {
  //     const response = await fetch(
  //       `https://pragyandashboard.nic.in/api/guest_token?id=${dbId}`,
  //       { credentials: "include" },
  //     );
  //     const data = await response.json();
  //     return data.guestToken;
  //   };

  //   const embed = async () => {
  //     const token = await fetchGuestToken();
  //     if (token) {
  //       embedDashboard({
  //         id: dbId, // ✅ dynamic now
  //         supersetDomain: "https://pragyandashboard.nic.in/",
  //         mountPoint: document.getElementById("my-superset-container"),
  //         fetchGuestToken: () => token,
  //         dashboardUiConfig: {
  //           hideTitle: false,
  //           filters: { expanded: false },
  //         },
  //       });
  //     }
  //   };

  //   embed();
  // }, [dbId]);

  return (
    <div className="App">
      <div>
        {/* Right side button */}
        <div className="top-container">
          <div className="col-md-12 d-flex justify-content-between px-4">
            <div className="d-flex return">
              <button
                className={styles.backButton}
                onClick={() => navigate("/schemeView")}
              >
                <img src={Back} alt="scheme-icon" />
                &nbsp; Back
              </button>
            </div>
            <div className="user_container">
              <p>
                <img src={User} alt="scheme-icon" /> &nbsp;admin@gmail.com
                &nbsp;&nbsp;
              </p>
              {/* <a className="logout" href="/"></a> */}
              <button className="logout" onClick={() => handleLogout()}>
                <img src={Logout} alt="scheme-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="my-superset-container"
        style={{
          height: "calc(100vh - 100px)",
        }}
      />
    </div>
  );
};

export default IframeDashboard;

// useEffect(() => {
//   const { embedDashboard } = SupersetSDK;

//   const fetchGuestToken = async () => {
//     const response = await fetch(
//       `https://pragyandashboard.nic.in/api/guest_token?id=${dbId}`,
//       { credentials: "include" },
//     );
//     const data = await response.json();
//     return data.guestToken;
//   };

//   const embed = async () => {
//     const token = await fetchGuestToken();
//     if (token) {
//       embedDashboard({
//         id: dbId,
//         supersetDomain: "https://pragyandashboard.nic.in/",
//         mountPoint: document.getElementById("my-superset-container"),
//         fetchGuestToken: () => token,
//         dashboardUiConfig: {
//           hideTitle: false,
//           filters: { expanded: false },
//         },
//       });
//     }
//   };

//   embed();
// }, [dbId]);
