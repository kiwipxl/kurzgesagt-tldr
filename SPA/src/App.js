import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

function VideosGrid(props) {

  return (
    <div className="video-grid">
      {/* <div className="video-card-container">
        <div className="video-card"></div>
      </div>
      <div className="video-card-container">
        <div className="video-card"></div>
      </div> */}

      <div className="video-grid-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-grid-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-grid-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-grid-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-grid-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-grid-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>
    </div>
  )
}

function VideoCard(props) {
  return (
    <Card className="video-card">
      <Card.Img className="video-card-img" variant="top" src={props.thumbnail}/>

      <Card.Body>
        <Card.Title className="video-card-title">{props.title}</Card.Title>

        <Card.Text className="video-card-info">
          {"1.3M views | 1 month ago"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <div className="App">
      <div className="video-grid-container">
        <VideosGrid></VideosGrid>
      </div>
    </div>
  );
}

export default App;
