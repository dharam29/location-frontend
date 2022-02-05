import React from "react";
import LocationDetails from "./Components/LocationDetails";
import AddLocation from "./Components/AddLocation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LocationDetails />}></Route>{" "}
          <Route path="/addLocation" element={<AddLocation />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
