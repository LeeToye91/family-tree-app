import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import AppRoute from './layout/AppRoute';
import Login from './components/Login';
import DashboardContainer from "./containers/DashboardContainer";
import UserContainer from "./containers/UserContainer";
import SettingsContainer from "./containers/SettingsContainer";

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRoute />}>
          <Route exact path="dashboard" element={<DashboardContainer />} />
          <Route exact path="user" element={<UserContainer />} />
          <Route exact path="settings" element={<SettingsContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
