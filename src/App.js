import React from "react";
import "./App.css";
import EventOption from "./component/EventOption";
import Theme from "./component/Theme";
import Calender from "./component/Calender";
import Location from "./component/Location";
import Main from "./component/Main";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/event" exact element={<EventOption />} />
          <Route path="/theme" exact element={<Theme />} />
          <Route path="/calender" exact element={<Calender />} />
          <Route path="/location" exact element={<Location />} />
          <Route path="/" exact element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
