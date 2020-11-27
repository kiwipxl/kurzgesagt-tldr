import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/video">
            <VideoPage></VideoPage>
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
