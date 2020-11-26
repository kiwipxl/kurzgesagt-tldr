import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

function VideosGrid(props) {

  return (
    <VideoCard title="How large can a bacteria get? Life & Size 3" numViews={100}>

    </VideoCard>
  )
}

function VideoCard(props) {

  console.log(props);

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180"/>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>
          {props.numViews.toString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <div className="App">
      <VideosGrid></VideosGrid>
    </div>
  );
}

export default App;
