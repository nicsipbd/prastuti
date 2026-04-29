import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");

    // ✅ allow login page
    if (location.pathname === "/login") {
      setIsAuth(true);
      return;
    }

    if (!auth) {
      navigate("/login")
    } else {
      setIsAuth(true);
    }
  }, [location.pathname]);

  if (isAuth === null) return null;

  return (
    <>
      <main className="main-content min-h-screen p-4 bg-gray-100">
        <Outlet />
      </main>
    </>
  );
}

// import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";

// export default function ProtectedLayout() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");

//     if (!isAuthenticated) {
//       window.location.href = "/login"; // ✅ works in browser
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   if (loading) return null;

//   return <Outlet />;
// }
