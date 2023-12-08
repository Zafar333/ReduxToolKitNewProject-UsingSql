import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserData from "./Pages/UserData";
import AdminComponent from "./Pages/Admin/AdminComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserData />} />
          <Route path="/admin" element={<AdminComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
