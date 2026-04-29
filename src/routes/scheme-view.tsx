import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetAllState, GetAllDistrict } from "../services/schemeService";
import styles from "./overview-page.module.css";
import dashboardIcon from "../assets/images/dashboardIcon.png";
import filter from "../assets/images/filter.png";
import Logo1 from "../assets/images/dummy_logo.png";
import Logout from "../assets/images/logout.svg";
import User from "../assets/images/user.png";
import Back from "../assets/images/back.png";

export default function SchemeView() {
  const navigate = useNavigate();
  const { dbId } = useParams();
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  const openDashboard = (dbId: string) => {
    navigate(`/superset/dashboards/${dbId}`);
  };

  const [schemes, setSchemes] = useState([
    {
      projectCode: 1,
      date: "10/03/2026",
      image: "/images/scheme1.png",
      title: "PM-KISAN SAMMAN NIDHI",
      KPI1: "Total Beneficiaries",
      KPIvalue1: "41.86",
      KPI2: "Total Amount Distribution (in Cr)",
      KPIvalue2: "11.52",
      unit1: "Cr",
      unit2: "Rs Lakh Cr",
      dbId: "53f895e2-e6d7-4fb0-82c8-2b803a86ce30",
    },
    {
      projectCode: 2,
      date: "19/03/2026",
      image: "/images/scheme1.png",
      title: "Manufacturers & Dealers",
      KPI1: " Manufacturers  Registered",
      KPIvalue1: "6.5",
      KPI2: " Manufacturers Working",
      KPIvalue2: "1.77",
      unit1: "Th",
      unit2: "L",
      dbId: "5e865af9-a333-4055-a229-145e957ef1ee",
    },
    {
      projectCode: 3,
      date: "18/03/2026",
      image: "/images/scheme1.png",
      title: "Rashtriya Krishi Vikash Yojana",
      KPI1: "Total project Cost",
      KPIvalue1: "954492",
      KPI2: "Total Approved Project Cost",
      KPIvalue2: "4.82",
      unit1: "",
      unit2: "L",
      dbId: "464993bf-d9c9-4424-a133-3114c1ae6309",
    },
    {
      projectCode: 4,
      date: "19/03/2026",
      image: "/images/scheme1.png",
      title: "SeedsNetData",
      KPI1: "SEEDS REQUIREMENT (in Lacs Quintal)",
      KPIvalue1: "3.47",
      KPI2: "SEEDS AVAILABILITY (in Lacs Quintal)",
      KPIvalue2: "3.82",
      unit1: "K",
      unit2: "K",
      dbId: "32a3d754-8417-4b6b-91f9-400926930254",
    },
  ]);

  useEffect(() => {
    fetchStates();
    fetchDistricts();
  }, []);

  const fetchStates = async () => {
    try {
      const data = await GetAllState();
      setStates(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchDistricts = async () => {
    try {
      const data = await GetAllDistrict();
      setDistricts(data);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
      navigate("/login")
  };

  return (
    <div className="min-h-[80vh]">
      {/* <div className="row align-items-center">*/}
      <div className="top-container">
        <div className="col-md-12 d-flex justify-content-between px-4">
          <div className="d-flex return">
            <button
              className={styles.backButton}
              onClick={() => navigate("/overView")}
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
      {/* </div> */}

      <div className="schemeViewContainer">
        <div className="container-fluid px-4 py-4">
          <div className="dashboard-header mb-4">
            <div className="row align-items-center">
              {/* Left Side */}
              <div className="col-md-8 d-flex align-items-center">
                <div className="dashboard-icon">
                  <img src={dashboardIcon} alt="scheme-icon" />
                </div>

                <div className="ms-3">
                  <h3 className="dashboard-title">
                    <span className={styles.gradientText}>
                      Government Schemes Dashboard
                    </span>
                  </h3>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-md-4 d-flex justify-content-md-end mt-3 mt-md-0">
                <div className="scheme-counter">
                  <div className="counter-title">
                    <i className="bi bi-graph-up"></i> Showing Schemes
                  </div>

                  <div className="counter-number">
                    <span>4</span>
                    <small>/ 4</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="filter-bar mb-4">
            <div className="row mb-3">
              <div className="col-md-8 d-flex align-items-center">
                <div className="dashboard-icon">
                  <img src={filter} alt="scheme-icon" />
                </div>

                <div className="ms-3">
                  <h5 className="title mb-0">filters</h5>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-3">
                <select className="form-select">
                  <option>Select Department</option>
                  <option>
                    Department of Agricultural Research and Education
                  </option>
                  <option>Department of Agriculture and Farmers Welfare</option>
                </select>
              </div>

              <div className="col-md-3">
                <select className="form-select">
                  <option value="">Select State</option>

                  {states.map((state) => (
                    <option key={state.stateCode} value={state.stateCode}>
                      {state.stateName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <select className="form-select">
                  <option value="">Select District</option>

                  {districts.map((dist) => (
                    <option key={dist.distCode} value={dist.distCode}>
                      {dist.distName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="d-flex col-md-3 justify-content-end">
                <select className="APImode form-select">
                  <option>All</option>
                  <option>API</option>
                  <option>Excel</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="row">
            {schemes.map((scheme, index) => (
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="scheme-card">
                  {/* Date */}
                  <span className="scheme-date">
                    <strong>As on:</strong> {scheme.date || "N/A"}
                  </span>

                  {/* Header */}
                  <div className="scheme-header">
                    <div className="scheme-title-box">
                      <img src={Logo1} alt="" className="scheme-icon" />
                      <h5 className="scheme-title">{scheme.title}</h5>
                    </div>
                  </div>

                  {/* KPI Section */}
                  <div className="scheme-stats">
                    <div className="stat">
                      <span>{scheme.KPI1}</span>
                      <h6 className="mb-0">
                        {scheme.KPIvalue1}
                        <span>{scheme.unit1}</span>
                      </h6>
                    </div>

                    <div className="stat">
                      <span>{scheme.KPI2}</span>
                      <h6 className="mb-0">
                        {scheme.KPIvalue2}
                        <span>{scheme.unit2}</span>
                      </h6>
                    </div>
                  </div>
                  <div className="view-dashboard">
                    <button
                      className="btn view-btn btn-sm"
                      onClick={() => openDashboard(scheme.dbId)}
                    >
                      View Dashboard
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
