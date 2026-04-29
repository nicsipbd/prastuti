import axios from "axios";

// export const getSchemes = async () => {
//     try {
//         // const res = await axios.get("/api/viewSchemeDetailsForDataLog/");
//         const res = await axios.get("/api/getSchemesForReactApp");
//         return res.data || [];
//     } catch (err) {
//         console.error("Error:", err);
//         return [];
//     }
// };
export const getSchemes = async () => {
    try {
        const res = await axios.get("/api/getSchemesForReactApp", {
            params: { ministryCode: 1 }
        });

        // 🔥 filter here
        const filteredData = (res.data || []).filter(
            (item: any) => item.ministryCode === 1
        );

        return filteredData;
    } catch (err) {
        console.error("Error:", err);
        return [];
    }
};

export const GetViewAndDashboadId = async (projectCode: any) => {
    try {

        const res = await axios.get(`/api/getViewAndDashboadId?projectCode=${projectCode}`,);
        if (res.status === 200) {
            return res?.data;
        }
    } catch (err) {
        console.log("Error: ", err);
    }
};

// export const getAllDepartments = async () => {
//     try {
//         const res = await axios.get("/api/allDepartment");
//         return res.data || [];
//     } catch (err) {
//         console.error("Error fetching departments:", err);
//         return [];
//     }
// };
export const GetAllState = async () => {
    try {
        const res = await axios.get("/api/getAllState");
        return res.data || [];
    } catch (err) {
        console.error("Error fetching departments:", err);
        return [];
    }
};

export const GetAllDistrict = async () => {
    try {
        const res = await axios.get("/api/getAllDistrict");
        return res.data || [];
    } catch (err) {
        console.error("Error fetching departments:", err);
        return [];
    }
};

