import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import VideoDetailsPage from './pages/VideoDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="/video/:videoId">
            <VideoDetailsPage></VideoDetailsPage>
          </Route>

          <Route path="/404">
            <NotFoundPage></NotFoundPage>
          </Route>

          <Redirect from='*' to='/404'></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
