import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useAuth } from "./routes/AuthContext";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./routes/home";
import Login from "./routes/login";
import Overview from "./routes/overview-page";
import SchemeView from "./routes/scheme-view";
import IframeDashboard from "./routes/iframeDashboard";

// Protected Route
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  // console.log("salt value response: isAuthenticated>>>>>>>> ", isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};

// const UnProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   // console.log("salt value response: isAuthenticated>>>>>>>> ", isAuthenticated);

//   return isAuthenticated ? <Navigate to="/" /> : children;
// };

function App(): JSX.Element {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}

      {/* <main className="main-content min-h-screen p-4 bg-gray-100"> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/homes" element={<Home />} />
        <Route
          path="/overView"
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schemeView"
          element={
            <ProtectedRoute>
              <SchemeView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/superset/dashboards/:embedId"
          element={
            <ProtectedRoute>
              <IframeDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* </main> */}

      {location.pathname !== "/login" && <Footer />}
    </>
  );
}

export default App;
