import React from 'react';
// import './App.css';
import './scss/style.scss';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
      <div className="App">
          <Header />
          <div className="page">
              <div className="container">
                  <Sidebar />
                  <div className="content">
                      <Profile />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;