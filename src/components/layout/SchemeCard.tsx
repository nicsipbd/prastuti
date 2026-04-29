import { useNavigate } from "react-router-dom";
// import { GetViewAndDashboadId } from "../services/schemeService";
import Logo1 from "../assets/images/logo1.png";

interface SchemeProps {
  scheme: any;
}

export default function SchemeCard({ scheme }: SchemeProps) {
  const navigate = useNavigate();
  const embedId = "7eeb24c1-3010-4ad1-a6fd-75e661054901";

  const openDashboard = async (projectCode: number) => {
    navigate(`/superset/dashboards/`);
    // try {
    // const res = await GetViewAndDashboadId(projectCode);
    // console.log("API response:", res);
    // const embedId = res?.dashboardId;
    //   if (embedId) {
    //   } else {
    //     alert("No dashboard available");
    //   }
    // } catch (error) {
    //   console.error("Dashboard error:", error);
    // }
  };

  const schemes = [
    {
      date: "10 Mar 2026",
      image: Logo1,
      title: "PM-KISAN SAMMAN NIDHI",
      KPI1: "Beneficiaries",
      KPIvalue1: "1.2M",
      KPI2: "Funds Released",
      KPIvalue2: "₹500 Cr",
    },
  ];

  console.log("emdi:", embedId);

  return (
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
            <h6>{scheme.KPIvalue1}</h6>
          </div>

          <div className="stat">
            <span>{scheme.KPI2}</span>
            <h6>{scheme.KPIvalue2}</h6>
          </div>
        </div>
        <div className="view-dashboard">
          <button
            className="btn view-btn btn-sm"
            onClick={() => openDashboard(scheme.projectCode)}
          >
            View Dashboard
          </button>
        </div>
      </div>
      {/* <div className="scheme-card">
        <span className="scheme-date">
          <strong>As on:</strong> {scheme.date_from || "N/A"} -{" "}
          {scheme.date_to || "N/A"}
        </span>

        <div className="scheme-header">
          <div className="scheme-title-box">
            <img src={Logo1} alt="" className="scheme-icon" />
            <h5 className="scheme-title">{scheme.title}</h5>
          </div>
        </div>

        <div className="scheme-stats">
          <div className="stat">
            <span>{scheme.KPI1}</span>
            <h6>
              {scheme.KPIvalue1 || ""} {scheme.unit1 || ""}
            </h6>
          </div>

          <div className="stat">
            <span>{scheme.KPI2}</span>
            <h6>
              {scheme.KPIvalue2 || ""} {scheme.unit2 || ""}
            </h6>
          </div>
        </div>

        <div className="view-dashboard">
          <button
            className="btn view-btn btn-sm"
            onClick={() => openDashboard(scheme.projectCode)}
          >
            View Dashboard
          </button>
        </div>
      </div> */}
    </div>
  );
}
