import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateCar from "./pages/Creatar";
import EditCar from "./pages/Editcar";
import ViewCar from "./pages/Viewcar";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCar />} />
        <Route path="/edit/:id" element={<EditCar />} />
        <Route path="/view/:id" element={<ViewCar />} />
      </Routes>
    </>
  );
};


export default App;


