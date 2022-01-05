import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// import './App.css';
import './scss/style.scss';

import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

import {state} from "./state/state"


const App = () => {
  return (
      <Router>
          <div className="App">
              <Header />
              <div className="page">
                  <div className="container">
                      <Sidebar />
                      <div className="content">
                          <Routes>
                              <Route path={`/profile`} element={<Profile />}/>
							  <Route path={`/dialogs`} element={<Dialogs dialogs={state.dialogs} />}/>
                          </Routes>
                      </div>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;