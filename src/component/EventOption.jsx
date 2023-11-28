import React, { useState } from "react";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ApprovalIcon from "@mui/icons-material/Approval";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

const EventOption = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    props.setEditedContent(e.target.value);
  };

  const [visible, setVisible] = useState("false");

  const toggleButton = () => {
    setVisible(!visible);
  };
  return (
    <>
      <h2 className="text-gray-400 font-medium m-2">Event Options</h2>
      <div className="bg-white shadow-lg rounded-md w-full max-w-sm text-gray-500 m-2">
        <div className="grid grid-cols-2 pt-1 pb-1 ">
          <div className=" ml-5 ">
            <ConfirmationNumberIcon sx={{ marginRight: "10px" }} />
            Ticket
          </div>
          <div className="flex justify-end pr-5 outline-none">
            <select
              value={props.ticket}
              className="outline-none"
              onChange={(e) => {
                props.setTicket(e.target.value);
              }}
            >
              <option value="Free">Free</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
          </div>
        </div>
        <hr className="bg-white ml-5 mr-5" style={{ height: "2px" }} />
        <div className="grid grid-cols-2 pt-1 pb-1 ">
          <div className="ml-5 ">
            <ApprovalIcon sx={{ marginRight: "10px" }} />
            Required Approval
          </div>

          <div className="flex justify-end pr-5  ">
            <button
              onClick={toggleButton}
              style={{
                padding: "2px 4px",
                backgroundColor: visible ? "green" : "gray",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                outline: "none",
              }}
            >
              {visible ? "ON" : "OFF"}
            </button>
          </div>
        </div>
        <hr className="bg-white ml-5 mr-5" style={{ height: "2px" }} />
        <div className="grid grid-cols-2 pt-1 pb-1">
          <div className="ml-5">
            <ReduceCapacityIcon sx={{ marginRight: "10px" }} />
            Capacity
          </div>

          <div className="flex justify-end pr-5">
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="w-10 outline-none cursor-auto"
                  value={props.editedContent}
                  onChange={handleInputChange}
                />
                <button onClick={handleSaveClick}>Save</button>
              </>
            ) : (
              <>
                <div>{props.editedContent}</div>
                <EditIcon onClick={handleEditClick} />
              </>
            )}
          </div>
        </div>

        <hr className="bg-white ml-5 mr-5" style={{ height: "2px" }} />

        <div className="grid grid-cols-2 pt-1 pb-1">
          <div className="ml-5">
            <VisibilityIcon sx={{ marginRight: "10px" }} />
            Visibility
          </div>

          <div className="lg:w-32 md:wd-28 grid grid-cols-1 rounded ml-14 pr-5 lg:pl-8">
            <select
              className="outline-none border-none"
              value={props.visibility}
              onChange={(e) => {
                props.setVisibility(e.target.value);
              }}
            >
              <option value=" Public" >Public</option>
              <option value="Private ">Private</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventOption;
