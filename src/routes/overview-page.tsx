import { TrendingUp, Building2, CheckCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StatCard } from "../components/layout/stat-card";
import { KPIChart } from "../components/layout/kpi-chart";
import styles from "./overview-page.module.css";
import Logout from "../assets/images/logout.svg";

// Overall performance data
const yearlyPerformanceData = [
  { name: "2020", Beneficiaries: 32.5, Funds: 8.2, Projects: 3.1 },
  { name: "2021", Beneficiaries: 35.8, Funds: 9.1, Projects: 3.6 },
  { name: "2022", Beneficiaries: 37.4, Funds: 9.8, Projects: 4.0 },
  { name: "2023", Beneficiaries: 39.2, Funds: 10.5, Projects: 4.4 },
  { name: "2024", Beneficiaries: 40.6, Funds: 11.0, Projects: 4.7 },
  { name: "2025", Beneficiaries: 41.86, Funds: 11.52, Projects: 4.82 },
];

const departmentWiseData = [
  { name: "Department of Agricultural Research and Education", value: 45 },
  { name: "Department of Agriculture and Farmers Welfare", value: 55 },
];

export default function OverviewPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login"); // ✅ SPA navigation
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header with creative design */}
        <div className={styles.headerSection}>
          <div className={styles.headerContent}>
            <div className={styles.leftContent}>
              <h3 className={styles.mainTitle}>
                <span className={styles.gradientText}>
                  Ministry of Agriculture and Farmers Welfare
                </span>
              </h3>

              <div className={styles.badge}>
                <Sparkles style={{ width: 24, height: 24, color: "#eab308" }} />
                <p className={styles.subtitle}>
                  Aggregate statistics and KPIs across all schemes
                </p>
              </div>
            </div>
            {/* Right side button */}
            <div className="d-flex">
              <button
                className={styles.headerButton}
                onClick={() => navigate("/schemeView")}
              >
                Go To Schemes
              </button>
              &nbsp;
              <button className="logout" onClick={() => handleLogout()}>
                <img src={Logout} alt="scheme-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Top Stats Grid */}
        <div className={styles.statsGrid}>
          <StatCard
            title="Total Schemes"
            value="4"
            subtitle=""
            icon={Building2}
            gradient="gradientBlue"
            trend="+12.5%"
          />
          <StatCard
            title="Total KPIs"
            value="8"
            subtitle=""
            icon={TrendingUp}
            gradient="gradientGreen"
            trend="+10.7%"
          />
          <StatCard
            title="Scheme Availability"
            value="3.82 "
            subtitle=""
            icon={CheckCircle}
            gradient="gradientBrown"
            trend="+9.8%"
          />
        </div>

        {/* Charts Section */}
        <div className={styles.chartsGrid}>
          <KPIChart
            title="Department-wise Scheme Distribution (%)"
            type="pie"
            data={departmentWiseData}
            dataKey="value"
            colors={["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"]}
          />
          <KPIChart
            title="Yearly Performance Trends"
            type="line"
            data={yearlyPerformanceData}
            dataKeys={["Beneficiaries", "Funds", "Projects"]}
            colors={["#3b82f6", "#10b981", "#8b5cf6"]}
          />
        </div>
      </div>
    </div>
  );
}
