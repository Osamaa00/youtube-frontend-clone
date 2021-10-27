import React from 'react';
import './App.css';
import Header from './Header/Header';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage/SearchPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm" >
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
        <Route path="/" >
          <div className="app_page">
            <Sidebar />
            <RecommendedVideos />
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
