import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Profile from "./pages/Profile";
// import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full my-24">
      <Navbar />
      <Routes>
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
