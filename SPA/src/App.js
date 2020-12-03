import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import VideoDetailsPage from './pages/VideoDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import VideoFeed from './components/VideoFeed';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(props) {
  const routerHistory = useHistory();

  function onBrandClick() {
    routerHistory.push('/');
  }

  return (
    <div>
      <Navbar className='navbar' bg='dark' variant='dark' sticky='top'>
        <Navbar.Brand>
          <a className='navbar-brand' onClick={onBrandClick}>
            kurzgesagt-tldr
          </a>
        </Navbar.Brand>
      </Navbar>

      {props.children}
    </div>
  )
}

function AppSwitch() {
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
        <HomePage>
          <VideoFeed
            items={feedItems}
            scrollY={feedScrollY}
            onVideoClick={onFeedVideoClick}>

          </VideoFeed>
        </HomePage>
      </Route>

      <Route path="/video/:videoId">
        <VideoDetailsPage></VideoDetailsPage>
      </Route>

      <Route path="/404">
        <NotFoundPage></NotFoundPage>
      </Route>

      <Redirect from='*' to='/404'></Redirect>
    </Switch>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar>
          <AppSwitch/>
        </NavigationBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
