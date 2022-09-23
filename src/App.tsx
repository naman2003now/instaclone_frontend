import React from "react";
import Navbar from "./componenets/Navbar";
import Profile from "./pages/Profile";
// import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full my-24">
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
