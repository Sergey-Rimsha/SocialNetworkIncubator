import React from 'react';
// import './App.css';
import './scss/style.scss';

import Header from "./components/Header/Header";
import Sidabar from "./components/sidebar/Sidabar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
      <div className="App">
          <Header />
          <div className="page">
              <div className="container">
                  <Sidabar />
                  <div className="content">
                      <Profile />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;