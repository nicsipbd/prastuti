import axios from "axios";
export const BASE_URL = "http://10.23.124.59:8086/";
// export const BASE_URL = "https://pragyan.nic.in/pragyan/";

// const ENDPOINTS = {
//   SALT_VALUE: "getSaltForSambhav?username=",
//   LOGOUT_USER: "mylogout?username=",
//   GET_TOKEN: "getSambhavToken",
//   SAMBHAV_LOGIN: "loginForSambhav",
// };

const ENDPOINTS = {
  SALT_VALUE: "getSaltValue?username=",
  LOGOUT_USER: "mylogout?username=",
  GET_TOKEN: "getToken",
  SAMBHAV_LOGIN: "login",
  CHECK_LOGIN_STATUS: "checkLoginStatus?username=",
  GET_LOGGER_TYPE: "getLoggerType?username=",
  CHANGE_LOGIN_STATUS: "changeLoginStatus?username=",
  SET_MAXID_FORCE: "setMaxIdForcefully?username=",
  GET_MAXID: "getMaxId?username=",
  CHECK_TOKEN: "checkToken?token=",
};

const CUSTOM_BASE_URL = "http://10.23.124.233:9696/";

const CUSTOM_ENDPOINTS = {
  HEADER: "customHeader",
  LOGIN_SLIDER: "customLoginSlider",
  LANDING_SLIDER: "customLandingPageSlider",
  CUSTOM_RECORDS: "viewCustomLoginRecord?userType=",
};

const HEADER_TYPE = {
  JSON: "application/json",
  FORM_DATA: "multipart/form-data",
};

const getSaltValue = async (userName) => {
  const data = await axios
    .get(BASE_URL + ENDPOINTS.SALT_VALUE + userName)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const userLogout = async (userName) => {
  const data = await axios
    .get(BASE_URL + ENDPOINTS.LOGOUT_USER + userName)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const getToken = async (mail, pass) => {
  const data = await axios
    .post(BASE_URL + ENDPOINTS.GET_TOKEN, {
      emailId: mail,
      password: pass,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const loginApi = async (mail, pass, token) => {
  const data = await axios
    .post(
      BASE_URL + ENDPOINTS.SAMBHAV_LOGIN,
      {
        emailId: mail,
        password: pass,
      },

      {
        headers: {
          "Content-Type": HEADER_TYPE.JSON,
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

// checkLoginStatus?username=${this.emailId}
const checkLoginStatus = async (mail, token) => {
  const data = await axios
    .get(BASE_URL + ENDPOINTS.CHECK_LOGIN_STATUS + mail, {
      headers: {
        "Content-Type": HEADER_TYPE.JSON,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

// http://10.23.124.59:8081/getLoggerType?username=kumar.jyoti@nicsi.com
const getLoggerType = async (username) => {
  const data = await axios
    .get(BASE_URL + ENDPOINTS.GET_LOGGER_TYPE + username)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const changeLoginStatus = async (mail, token) => {
  const data = await axios
    .get(BASE_URL + ENDPOINTS.CHANGE_LOGIN_STATUS + mail, {
      headers: {
        "Content-Type": HEADER_TYPE.JSON,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const setMaxIdForcefully = async (mail, token) => {
  const data = await axios
    .get(BASE_URL + ENDPOINTS.SET_MAXID_FORCE + mail, {
      headers: {
        "Content-Type": HEADER_TYPE.JSON,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const getMaxId = async (mail, token) => {
  const data = await axios
    .get(BASE_URL + ENDPOINTS.GET_MAXID + mail, {
      headers: {
        "Content-Type": HEADER_TYPE.JSON,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const checkToken = async (token) => {
  const data = await axios
    .get(BASE_URL + ENDPOINTS.CHECK_TOKEN + token)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const customHeader = async (firstImage, secondImage, userName) => {
  const data = await axios
    .post(
      CUSTOM_BASE_URL + CUSTOM_ENDPOINTS.HEADER,
      {
        headerFistLogoImage: firstImage,
        headerSecondLogoImage: secondImage,
        userType: userName,
      },

      {
        headers: {
          "Content-Type": HEADER_TYPE.JSON,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const customLoginSlider = async (sliderData, userName) => {
  const data = await axios
    .post(
      CUSTOM_BASE_URL + CUSTOM_ENDPOINTS.LOGIN_SLIDER,
      {
        loginSliderData: sliderData,
        userType: userName,
      },

      {
        headers: {
          "Content-Type": HEADER_TYPE.JSON,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const customLandingSlider = async (
  sliderData,
  leftImage,
  rightImage,
  bgImage,
  titleHi,
  tittlEn,
  abtTitle,
  abtDescription,
  sliderHeading,
  userName
) => {
  const data = await axios
    .post(
      CUSTOM_BASE_URL + CUSTOM_ENDPOINTS.LANDING_SLIDER,
      {
        bannerLeftFile: leftImage,
        bannerRightFile: rightImage,
        bannerBgFile: bgImage,
        bannerTitleHi: titleHi,
        bannerTitleEn: tittlEn,
        aboutHeading: abtTitle,
        aboutDesc: abtDescription,
        sliderHeading: sliderHeading,
        sliderData: sliderData,
        userType: userName,
      },

      {
        headers: {
          "Content-Type": HEADER_TYPE.JSON,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

const getCustomData = async (userName) => {
  const data = await axios
    .get(CUSTOM_BASE_URL + CUSTOM_ENDPOINTS.CUSTOM_RECORDS + userName)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

export {
  getSaltValue,
  userLogout,
  getToken,
  checkLoginStatus,
  loginApi,
  getLoggerType,
  changeLoginStatus,
  customHeader,
  customLoginSlider,
  customLandingSlider,
  getCustomData,
  getMaxId,
  setMaxIdForcefully,
  checkToken,
};
