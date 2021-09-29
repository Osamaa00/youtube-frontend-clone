import React from 'react';
import './App.css';
import Header from './Header/Header';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
