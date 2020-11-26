import React from 'react';
import VideoCard from './VideoCard';

export default (props) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:7800')
      .then(res => res.json())
      .then(json => setItems(json))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="video-feed">
      {items.map(video => (
        <div key={video.id} className="video-feed-card-container">
          <VideoCard
            title={video.title}
            numViews={video.numViews}
            publishedAt={video.publishedAt}
            thumbnail={video.thumbnails.maxresUrl}
          >

          </VideoCard>
        </div>
      ))}
    </div>
  )
}
