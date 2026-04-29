import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Prastuti from "../assets/images/prastuti.png";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordText, setShowPasswordText] = useState(false);
  const navigate = useNavigate();
  // const handleSubmit1 = (e) => {
  //   e.preventDefault();

  //   // const validUserId = "admin@nic.in";
  //   // const validPassword = "12345";

  //   const validUserId = "MoAFW";
  //   const validPassword = "123467687";

  //   if (!showPassword) {
  //     setShowPassword(true);
  //   } else {
  //     if (email === validUserId && password === validPassword) {
  //       localStorage.setItem("isAuthenticated", "true"); // 👈 important
  //       window.location.href = "/overView";
  //     } else {
  //       alert("Invalid User ID or Password");
  //     }
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // User 1
    const validUserId1 = "MoAFW";
    const validPassword1 = "#MoAFW#1234";

    // User 2
    const validUserId2 = "admin@nic.in";
    const validPassword2 = "12345";

    if (!showPassword) {
      setShowPassword(true);
    } else {
      if (
        (email === validUserId1 && password === validPassword1) ||
        (email === validUserId2 && password === validPassword2)
      ) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/overView"); // ✅ SPA navigation
      } else {
        alert("Invalid User ID or Password");
      }
    }
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated) {
      navigate("/overView"); // ✅ SPA navigation
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="login-bg flex items-center justify-center min-h-[80vh] bg-gray-100 px-4">
        <div className="login-box w-full max-w-md p-8 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <img src={Prastuti} alt="Prastuti Logo" />
          </div>
          <h4 className="text-2xl text-white font-bold text-center mb-6">
            Welcome to Prastuti
          </h4>

          <form onSubmit={handleSubmit} className="login-form space-y-5">
            {/* Email */}
            <div>
              <label className="block text-white text-md font-medium mb-1">
                Email
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={showPassword}
              />
            </div>

            {/* Password - show only after Continue */}
            {/* {showPassword && ( */}
            <div>
              <label className="block text-md text-white font-medium mb-1">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPasswordText ? "text" : "password"} // toggle this
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* Eye icon */}
                <span
                  onClick={() => setShowPasswordText((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
                >
                  <FontAwesomeIcon
                    icon={showPasswordText ? faEye : faEyeSlash}
                  />
                </span>
              </div>
            </div>
            {/* )} */}

            {/* Button */}
            <button
              type="submit"
              className="login login_btn w-full py-2 rounded-md transition"
            >
              {showPassword ? "Login" : "Continue"}
            </button>

            {/* Forget Password - show only after password appears */}
            {showPassword && (
              <p className="text-md text-center mt-3">
                <a
                  href="#"
                  className="text-white hover:underline"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default link behavior
                    alert("Please contact admin");
                  }}
                >
                  Forget Password?
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
