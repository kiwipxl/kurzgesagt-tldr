import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import VideoDetailsPage from './pages/VideoDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import VideoFeed from './components/VideoFeed';
import Header from './components/Header';

function AppSwitch(props) {
  const [feedItems, setFeedItems] = React.useState([]);
  const [feedScrollY, setFeedScrollY] = React.useState(0);
  const routerHistory = useHistory();

  function onFeedVideoClick(id, items) {
    setFeedItems(items);
    setFeedScrollY(window.pageYOffset);
    routerHistory.push(`/video/${id}`);
  }

  return (
    <Switch>
      <Route exact path="/">
        <HomePage setHeaderOptions={props.setHeaderOptions}>
          <VideoFeed
            items={feedItems}
            scrollY={feedScrollY}
            onVideoClick={onFeedVideoClick}>

          </VideoFeed>
        </HomePage>
      </Route>

      <Route path="/video/:videoId">
        <VideoDetailsPage setHeaderOptions={props.setHeaderOptions}></VideoDetailsPage>
      </Route>

      <Route path="/404">
        <NotFoundPage setHeaderOptions={props.setHeaderOptions}></NotFoundPage>
      </Route>

      <Redirect from='*' to='/404'></Redirect>
    </Switch>
  );
}

function App() {
  const [showBackButton, setShowBackButton] = React.useState(false);

  function setHeaderOptions(showBack) {
    setShowBackButton(showBack);
  }

  return (
    <div className="App">
      <BrowserRouter basename='/kurzgesagt-tldr'>
        <Header showBack={showBackButton}>
          <AppSwitch setHeaderOptions={setHeaderOptions}/>
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
