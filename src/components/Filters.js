import React, { useState } from "react";
import Select from "react-select";
import locationData from "../mockData/locationData.json";

export default function Filters() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // ✅ State options
  const stateOptions = Object.entries(locationData).map(([key, value]) => ({
    value: Number(key),
    label: value.stateName,
  }));

  // ✅ All districts (independent mode)
  const allDistrictOptions = Object.values(locationData).flatMap((state) =>
    state.districts.map((d) => ({
      ...d,
      stateName: state.stateName,
    })),
  );

  // ✅ Auto switch logic
  const districtOptions = selectedState
    ? locationData[selectedState.value]?.districts || []
    : allDistrictOptions;

  const yearOptions = [
    { value: 2020, label: "2020" },
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" },
  ];

  return (
    <div className="row">
      {/* State */}
      <div className="col-md-3">
        <Select
          placeholder="Select State"
          options={stateOptions}
          value={selectedState}
          onChange={(val) => {
            setSelectedState(val);
            setSelectedDistrict(null);
          }}
          isClearable
        />
      </div>

      {/* District */}
      <div className="col-md-3">
        <Select
          placeholder="Select District"
          options={districtOptions}
          value={selectedDistrict}
          onChange={setSelectedDistrict}
          getOptionLabel={(e) =>
            selectedState ? e.label : `${e.label} (${e.stateName})`
          }
          isSearchable
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
        />
      </div>

      <div className="col-md-3">
        <Select
          placeholder="Select Year"
          options={yearOptions}
          value={selectedYear}
          onChange={(val) => {
            setSelectedYear(val);
          }}
          isClearable
        />
      </div>
    </div>
  );
}
