import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import VideoDetailsPage from './pages/VideoDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/:videoId/:tab">
            <VideoDetailsPage></VideoDetailsPage>
          </Route>

          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
