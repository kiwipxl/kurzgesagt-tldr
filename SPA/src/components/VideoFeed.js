import React from 'react';
import VideoCard from './VideoCard';
import queryString from 'query-string';

export default (props) => {
  const [items, setItems] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);

  const rootRef = React.useRef(null);

  React.useEffect(() => {
    if (!isFetching) {
      return;
    }

    console.log(`fetching from ${items.length}`);

    const params = {
      startAt: items.length, 
      maxResults: 10
    };

    fetch(`http://localhost:7800/?${queryString.stringify(params)}`)
      .then(res => res.json())
      .then(newItems => {
        setItems(items.concat(newItems));
        setIsFetching(false);
      })
      .catch(err => console.error(err));
  }, [isFetching]);

  function onScroll(ev) {
    if (!rootRef.current.firstElementChild) {
      return;
    }

    const rootRefBottom = rootRef.current.getClientRects()[0].bottom;
    const cardHeightPadding = 50; // rough value, good enough
    const cardHeight = rootRef.current.firstElementChild.clientHeight + cardHeightPadding;

    if (rootRefBottom - cardHeight <= window.innerHeight) {
      setIsFetching(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={rootRef} className="video-feed">
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
