import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Prastuti from "../assets/images/prastuti.png";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { sha512 } from "js-sha512";

import {
  getSaltValue,
  getToken,
  loginApi,
  userLogout,
  checkLoginStatus,
  getLoggerType,
  changeLoginStatus,
  setMaxIdForcefully,
  getMaxId,
} from "../api/apis";
import CustomModal from "../components/CustomModal";

const validatePassword = (value) => {
  const lengthCheck = /.{8,}/; // At least 8 characters
  const uppercaseCheck = /[A-Z]/; // At least one uppercase
  const lowercaseCheck = /[a-z]/; // At least one lowercase
  const numberCheck = /[0-9]/; // At least one number
  const specialCharCheck = /[!@#$%^&*]/; // At least one special character

  if (!lengthCheck.test(value)) {
    return "Password must be at least 8 characters long.";
  }
  if (!uppercaseCheck.test(value)) {
    return "Password must include at least one uppercase letter.";
  }
  if (!lowercaseCheck.test(value)) {
    return "Password must include at least one lowercase letter.";
  }
  if (!numberCheck.test(value)) {
    return "Password must include at least one number.";
  }
  if (!specialCharCheck.test(value)) {
    return "Password must include at least one special character.";
  }
  return true;
};

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const [showPasswordText, setShowPasswordText] = useState(false);
  // const navigate = useNavigate();
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // User 1
  //   const validUserId1 = "MoAFW";
  //   const validPassword1 = "#MoAFW#1234";

  //   // User 2
  //   const validUserId2 = "admin@nic.in";
  //   const validPassword2 = "12345";

  //   if (!showPassword) {
  //     setShowPassword(true);
  //   } else {
  //     if (
  //       (email === validUserId1 && password === validPassword1) ||
  //       (email === validUserId2 && password === validPassword2)
  //     ) {
  //       localStorage.setItem("isAuthenticated", "true");
  //       navigate("/overView"); // ✅ SPA navigation
  //     } else {
  //       alert("Invalid User ID or Password");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem("isAuthenticated");

  //   if (isAuthenticated) {
  //     navigate("/overView"); // ✅ SPA navigation
  //   }
  // }, []);

  const navigate = useNavigate();
  // const { customData, loading } = useContext(CustomDataContext);
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState();
  // const [sliderData, setSliderData] = useState(images);
  const { logout } = useAuth();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [modalData, setModalData] = useState({
    header: "",
    body: "",
    show: false,
    type: "",
  });

  const clearForm = () => {
    setData({
      username: "",
      password: "",
    });
  };
  const changeHandler = (e) => {
    if (e.target.name === "password") {
      const isValid = validatePassword(e.target.value);
      if (!isValid) {
        setErrorMsg(isValid);
      } else {
        setErrorMsg("");
        setData({ ...data, [e.target.name]: e.target.value });
      }
    } else {
      setErrorMsg("");
      setData({ ...data, [e.target.name]: e.target.value });
    }
    console.log("data:", data);
  };

  const handleHashPassword = async (password, saltValue) => {
    const seventeenthChar = saltValue.charAt(16);
    const seventeenthCharAsNumber = Number(seventeenthChar);
    const newSalt = saltValue.slice(0, 16) + saltValue.slice(17);
    const saltedPassword = password + newSalt;
    const hashedPassword = sha512(saltedPassword);
    // console.log("haspasss:", hashedPassword);

    // Replace the 17th character with a digit '6' in the hashed password
    const digit = "6";
    const modifiedString = hashedPassword.replace(
      new RegExp(seventeenthChar, "g"),
      digit,
    );

    let integerPart = 0;

    // Logic to determine the integer part based on seventeenthCharAsNumber
    if (seventeenthCharAsNumber === 0) {
      integerPart = 8; // Default value if the character is '0'
    } else {
      integerPart = Math.floor(seventeenthCharAsNumber / 2);
    }

    const finalString = modifiedString.replace(
      new RegExp(integerPart.toString(), "g"),
      "8",
    );

    return finalString;
  };

  const handleTokeResponse = async (tokenRes, userName, newPass) => {
    if (
      userName !== null &&
      userName !== undefined &&
      newPass !== null &&
      newPass !== undefined &&
      tokenRes?.data?.status !== null &&
      tokenRes?.data?.status !== undefined &&
      tokenRes?.data?.status !== "Invalid Username or Passwords" &&
      tokenRes?.data?.status !== "Invalid Access"
    ) {
      // console.log("salt value response: tokenRes>>>>>>>> ", tokenRes);

      const loginStatus = await checkLoginStatus(
        data.username,
        tokenRes?.data?.status,
      );
      // console.log("salt value response: loginStatus>>>>>>>> ", loginStatus);

      if (loginStatus?.data === 0) {
        const logoutConfirm = window.confirm(
          "You are already logged in on another browser. Are you sure you want to proceed?",
        );
        if (logoutConfirm) {
          const c = await changeLoginStatus(
            data.username,
            tokenRes?.data?.status,
          );
          if (c) {
            const res = await loginApi(
              userName,
              newPass,
              tokenRes?.data?.status,
            );
            // console.log("res value:", res);
            if (res?.data === "success") {
              await setMaxIdForcefully(data.username, tokenRes?.data?.status);
              login();
              localStorage.setItem("username", userName);
              navigate("/schemeView");
            } else {
              setErrorMsg(res?.data);
              alert(res?.data);
            }
          }
        }
      } else if (loginStatus?.data === 1) {
        const res = await loginApi(userName, newPass, tokenRes?.data?.status);
        if (res?.data === "success") {
          const getMaxIdValue = await getMaxId(
            data.username,
            tokenRes?.data?.status,
          );
          localStorage.setItem("maxid", getMaxIdValue?.data);
          login();
          localStorage.setItem("username", userName);
          navigate("/schemeView");
        } else {
          setErrorMsg(res?.data);
          alert(res?.data);
        }
      }
    } else if (tokenRes?.data?.status === "Invalid Username or Passwords") {
      setErrorMsg(tokenRes?.data?.status);
      alert(tokenRes?.data?.status);
    }
  };

  const handleSubmit = async (e) => {
    navigate("/schemeView");
    localStorage.setItem("username", "sambhav");
    // e.preventDefault();
    // const a = await getLoggerType(data.username);
    // if (a?.data?.loggerType === "sambhav") {
    //   const saltResponse = await getSaltValue(data.username);
    //   // console.log("salt value response: ", saltResponse);
    //   if (saltResponse.data === "Invalid Username") {
    //     setErrorMsg(saltResponse.data);
    //     clearForm();
    //     alert(saltResponse.data);
    //   } else if (saltResponse.code === "ERR_NETWORK") {
    //     alert(saltResponse.message);
    //     clearForm();
    //   } else if (saltResponse.data === "Something went wrong") {
    //     alert(saltResponse.data);
    //     clearForm();
    //   } else if (saltResponse.data === "alreadyLogin") {
    //     const logoutConfirm = window.confirm(
    //       "You are already logged in on another browser. Are you sure you want to proceed?",
    //     );
    //     if (logoutConfirm) {
    //       const a = await userLogout(data.username);
    //       if (a.status === 200) {
    //         localStorage.clear();
    //         logout();
    //         const saltResponse = await getSaltValue(data.username);
    //         if (saltResponse.data) {
    //           const newPass = await handleHashPassword(
    //             data.password,
    //             saltResponse.data,
    //           );
    //           const tokenRes = await getToken(data.username, newPass);
    //           // console.log("tokken value: ", tokenRes?.data?.status);
    //           localStorage.setItem("token", tokenRes?.data?.status);
    //           handleTokeResponse(tokenRes, data.username, newPass);
    //         }
    //       }
    //     }
    //   } else {
    //     const newPass = await handleHashPassword(
    //       data.password,
    //       saltResponse.data,
    //     );
    //     const tokenRes = await getToken(data.username, newPass);
    //     // console.log("tokken value: ", tokenRes?.data?.status);
    //     localStorage.setItem("token", tokenRes?.data?.status);
    //     handleTokeResponse(tokenRes, data.username, newPass);
    //   }
    // } else {
    //   clearForm();
    //   setModalData({
    //     header: "Invalid User",
    //     body: "Not a valid user please check username.",
    //     show: true,
    //   });
    // }
  };

  const handleForgotPass = () => {
    clearForm();
    setModalData({
      header: "Warning",
      body: "Please contact System Admin at <u>sambhav@gov.in</u>",
      show: true,
    });
  };
  const handleClose = () => {
    setModalData({
      header: modalData.header,
      body: modalData.body,
      show: false,
    });
  };

  return (
    <div>
      <Header />
      <CustomModal
        heading={modalData.header}
        body={modalData.body}
        show={modalData.show}
        handleClose={() => handleClose()}
      />
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
                name="username"
                value={data.username}
                onChange={changeHandler}
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
                  name="password"
                  value={data.password}
                  onChange={changeHandler}
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

            {errorMsg && (
              <div
                style={{
                  lineHeight: 0.8,
                  marginTop: "2px",
                }}
              >
                <text style={{ fontSize: "10px", color: "#ff0000" }}>
                  {errorMsg}
                </text>
              </div>
            )}

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
