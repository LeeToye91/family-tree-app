import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import { Link } from "react-router-dom";
import AppRoute from './layout/AppRoute';
import DashboardContainer from "./containers/DashboardContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRoute />}>
          <Route exact path="dashboard" element={<DashboardContainer />} /></Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
