import React from 'react';
import './App.css';
import VideoFeed from './components/VideoFeed';

function App() {
  return (
    <div className="App">
      <div className="video-feed-container">
        <VideoFeed></VideoFeed>
      </div>
    </div>
  );
}

export default App;
