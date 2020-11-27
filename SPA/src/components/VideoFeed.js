import React from 'react';
import VideoCard from './VideoCard';

export default (props) => {
  const [items, setItems] = React.useState([]);

  const rootEl = React.useRef(null);

  React.useEffect(() => {
    fetch('http://localhost:7800')
      .then(res => res.json())
      .then(json => setItems(json))
      .catch(err => console.error(err));
  }, []);

  function onScroll(ev) {
    const rootElBottom = rootEl.current.getClientRects()[0].bottom;

    if (rootElBottom <= window.innerHeight) {
      console.log('load more!');
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={rootEl} className="video-feed">
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
