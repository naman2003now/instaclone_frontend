import React from "react";
import Navbar from "./componenets/Navbar";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="flex flex-col my-24 items-center justify-center w-full">
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
