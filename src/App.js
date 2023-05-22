import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
// import "../components/App.css";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/your-todo-list" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
