import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Location = (props) => {
  const locationOptions = [
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "India",
    "Afghanistan",
    "America",
    "Mumbai",
    "Delhi",
    "Kolkata",
  ];
  return (
    <>
      <div className="flex flex-row m-5 ">
        <LocationOnIcon
          sx={{ border: "1px solid black", borderRadius: "6px" }}
        />
        <div className="w-full max-w-sm grid grid-cols-1 rounded ml-3 pl-3">
          <select
            className="outline-none border-none"
            value={props.location}
            onChange={(e) => {
              props.setLocation(e.target.value);
            }}
          >
            <option value=" ">Add Event Location</option>
            
            {locationOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <h5 className="text-xs font-medium">Offline location</h5>
        </div>
      </div>
    </>
  );
};

export default Location;
