import * as React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { format } from "date-fns-tz";
import LayersIcon from "@mui/icons-material/Layers";
const DateTimePickerValue = (props) => {
  const currentTimeGMT = format(new Date(), "yyyy-MM-dd HH:mm:ss", {
    timeZone: "GMT",
  });

  return (
    <>
      <div className="font-semibold text-3xl ml-6  ">
        <input
          value={props.eventname}
          type="text"
          placeholder="Event Name"
          onChange={(e) => {
            props.setEventName(e.target.value);
          }}
          className="outline-none p-2 rounded-md  w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 m-6">
        <div className="">Start Date</div>
        <div className="w-full max-w-md ">
          <input
            className="py-2 px-2 w-full max-w-md rounded-md"
            type="datetime-local"
            value={props.startDate}
            onChange={(e) => {
              props.setStartDate(e.target.value);
            }}
          />
        </div>

        <div className="">End Date</div>
        <div className="w-full max-w-md  ">
          <input
            className="py-2 px-2 w-full max-w-md rounded-md"
            type="datetime-local"
            value={props.endDate}
            onChange={(e) => {
              props.setEndDate(e.target.value);
            }}
          />
        </div>

        <div className=" pl-2  rounded-md pt-2 pb-2 mt-4 border-2 border-b-gray-400">
          <LanguageIcon sx={{ marginRight: "10px", paddingRight: "-10px" }} />{" "}
          GMT+5:30 asia / {currentTimeGMT}
        </div>
        <div className=" pl-2  rounded-md pt-2 pb-2 mt-4 border-2 border-b-gray-400">
          <LayersIcon sx={{ marginRight: "10px", paddingRight: "-10px" }} />{" "}
          Create Multi-Session Event
        </div>
      </div>
    </>
  );
};
export default DateTimePickerValue;
