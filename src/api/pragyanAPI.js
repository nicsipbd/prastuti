import axios from "axios";

const BASE_URL = "http://10.23.124.59:8086/";
// const BASE_URL = "http://10.194.83.68/sambhav/";
// const BASE_URL = "https://pragyan.nic.in/pragyan/";

export const GetAllSector = async () => {
  try {
    // const res = await axios.get(BASE_URL+ "getAllSector?language=en");
    const res = await axios.get(BASE_URL + "allSector");
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetAllMinistry = async () => {
  // Function to get all ministries
  try {
    const res = await axios.get(BASE_URL + `allMinistry`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetMinistryBySectorCode = async (sectorCode) => {
  try {
    const res = await axios.get(
      BASE_URL + `getMinistry?sectorId=${sectorCode}`
    );
    // const res = await axios.get(BASE_URL+ `allMinistry?sectorId=${sectorCode}`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Failed to fetch ministries by sector code: ", err);
  }
};

export const GetAllDepartment = async () => {
  try {
    const res = await axios.get(BASE_URL + `allDepartment`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetDepartmentByMinCode = async (ministryCode) => {
  try {
    const res = await axios.get(
      BASE_URL + `getDepartment?ministryId=${ministryCode}`
    );
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetAllState = async () => {
  try {
    const res = await axios.get(BASE_URL + `getAllState`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetAllDistrict = async () => {
  try {
    const res = await axios.get(BASE_URL + `getAllDistrict`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetDistrictByStateCode = async (stateCode) => {
  try {
    const res = await axios.get(
      BASE_URL + `getDistrictByStateCode?stateCode=${stateCode}`
    );
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetSchemesByStateCode = async (stateCode) => {
  try {
    const res = await axios.get(
      BASE_URL + `getSchemesByStateCode?stateCode=${stateCode}`
    );
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetSchemesByDistrictCode = async (distCode) => {
  try {
    const res = await axios.get(
      BASE_URL + `getSchemesByDistrictCode?distCode=${distCode}`
    );
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetAllProjects = async () => {
  try {
    const res = await axios.get(BASE_URL + `getAllProjects`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
export const GetAllYears = async () => {
  try {
    const res = await axios.get(BASE_URL + `getFinancialYears`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetQuarters = async () => {
  try {
    const res = await axios.get(BASE_URL + `getQuarters`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetViewAndDashboadId = async (projectCode) => {
  try {
    // response = {"id":1,"projectCode":1016,"viewName":"pm_awaas_yojana_gramin","dashboardId":"e10cc8ad-eea3-4577-b09d-ac040090ecef","flag":1}
    const res = await axios.get(
      BASE_URL + `getViewAndDashboadId?projectCode=${projectCode}`
    );
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetViewDataDetails = async (projectCode) => {
  try {
    const res = await axios.get(
      BASE_URL + `getViewDataDetails?projectCode=${projectCode}`
    );
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetSchemesForReactApp = async () => {
  try {
    const res = await axios.get(BASE_URL + `getSchemesForReactApp`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
export const GetSchemesLogoForReactApp = async (projectCode) => {
  const apiUrl = BASE_URL + `getSchemeLogo?schemeCode=${projectCode}`;
  const response = await fetch(apiUrl);
  return response;
};

export const DisplayDataCountInQuarterWise = async () => {
  try {
    const res = await axios.get(BASE_URL + `displayDataCountInQuarterWise`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetDataFrequency = async () => {
  try {
    const res = await axios.get(BASE_URL + `getDataFrequency?language=en`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const GetDataGranularityDetail = async () => {
  try {
    const res = await axios.get(BASE_URL + `getDataGranularityDetail`);
    if (res.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
