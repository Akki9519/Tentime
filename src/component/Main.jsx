import React, { useState } from "react";
import EventOption from "../component/EventOption";
import Theme from "../component/Theme";
import Calender from "../component/Calender";
import Location from "../component/Location";
import image3 from "../Image/5747802.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CancelIcon from "@mui/icons-material/Cancel";
const Main = () => {
  const [startDate, setStartDate] = useState("10-10-1999 10:56");
  const [endDate, setEndDate] = useState("10-11-1999 10:56");
  const [result, setResult] = useState([]);
  const [location, setLocation] = useState("Dhaniapur,Prayagraj");
  const [ticket, setTicket] = useState("Free");
  const [eventname, setEventName] = useState("Cheeku!!!");
  const [visibility, setVisibility] = useState("Public");
  const [editedContent, setEditedContent] = useState("Full");
  const [image, setImage] = useState(image3);
  const [edit, setEdit] = useState("You All are Invited!!!");
  const [selectedFont, setSelectedFont] = useState("Georgia");
  const [selectedColor, setSelectedColor] = useState("purple");
  const onHandleSubmit = () => {
    const data = {
      startDate: startDate,
      endDate: endDate,
      location: location,
      eventname: eventname,
      ticket: ticket,
      visibility: visibility,
      editedContent: editedContent,
      image: image,
      edit: edit,
      selectedColor: selectedColor,
      selectedFont: selectedFont,
    };
    setResult([...result, data]);
  };
  const deleteItem=(index)=>{
    const inputData=[...result];
    inputData.splice(index,1);
    setResult(inputData);
  }
  return (
    <>
      <div className=" h-auto w-full max-w-4xl border-2 border-gray-400 grid grid-cols-2 m-5 bg-slate-50">
        <div className="m-5 ">
          <Calender
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            eventname={eventname}
            setEventName={setEventName}
          />
          <Location location={location} setLocation={setLocation} />
          <div className="m-2">
            <EventOption
              ticket={ticket}
              setTicket={setTicket}
              visibility={visibility}
              setVisibility={setVisibility}
              editedContent={editedContent}
              setEditedContent={setEditedContent}
            />
          </div>
          <div
            className="m-2 ml-4  pt-2 pb-2 w-full max-w-sm flex justify-center text-center rounded-lg font-semibold text-white bg-black cursor-pointer"
            onClick={() => {
              onHandleSubmit();
            }}
          >
            Create Event
          </div>
        </div>
        <div className="m-6">
          <Theme
            image={image}
            setImage={setImage}
            edit={edit}
            setEdit={setEdit}
            selectedColor={selectedColor}
            selectedFont={selectedFont}
            setSelectedColor={setSelectedColor}
            setSelectedFont={setSelectedFont}
          />
        </div>
      </div>

      <div className="">
        {result.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full  max-w-screen-md bg-purple-100 h-auto  m-5 shadow-lg grid grid-cols-2  text-white pb-20"
            >
              <div className="grid grid-cols-2">
                <div className="font-bold  text-3xl font-serif text-black m-8">
                  Events
                </div>
                <div className="flex justify-end mt-5 -mr-80   ">
                  <CancelIcon sx={{ color: "red" ,cursor:"pointer"}} onClick={()=>{deleteItem(index)}}/>
                </div>
              </div>
              <div className=" shadow-lg bg-white mt-20 -ml-48 mr-10   h-auto rounded-lg  w-auto ">
                <div className="grid grid-cols-2">
                  <div className="grid grid-cols-1 ml-3 mt-5">
                    <QueryBuilderIcon sx={{ color: "green" }} />
                    <div className="text-black font-mono text-xs ">
                      {item.startDate} to {item.endDate}
                    </div>
                    <div className="text-black font-serif font-semibold text-xl ">
                      {item.eventname}
                    </div>
                    <div className="text-black px-1 font-serif">
                      <MyLocationIcon /> {item.location}
                    </div>
                    <div className="text-black px-1 font-serif">
                      <CurrencyRupeeIcon />
                      {item.ticket}
                    </div>
                    <div className="text-black px-1 font-serif">
                      <VisibilityIcon sx={{ color: "red" }} />
                      {item.visibility}
                    </div>
                    <div className="flex flex-row">
                      <div className=" bg-blue-700 rounded-md w-16 px-2 my-1 mb-5">
                        Visited:
                      </div>
                      <div className="text-black px-1 py-1 font-serif">
                        {item.editedContent}
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-8 -ml-0 flex justify-center h-36 w-40 mx-20 rounded-md  "
                    style={{
                      backgroundImage: `url(${item.image})`,
                      width: "220px",
                      height: "150px",

                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "1px solid #ccc",
                    }}
                  >
                    <span
                      className=" flex justify-center text-center py-8 mx-2"
                      style={{
                        color: item.selectedColor,
                        fontFamily: item.selectedFont,
                      }}
                    >
                      {item.edit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
