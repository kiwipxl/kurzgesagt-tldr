import React from 'react';
import VideoCard from './VideoCard';
import queryString from 'query-string';
import Spinner from 'react-bootstrap/Spinner';
import Endpoint from '../Endpoint';
import ErrorMessage from './ErrorMessage';

export default (props) => {
  const rootRef = React.useRef(null);
  
  const [items, setItems] = React.useState(props.items || []);
  // start fetching immediately if we have no items
  const [isFetching, setIsFetching] = React.useState(items.length == 0);
  const [lastFetchError, setLastFetchError] = React.useState();

  window.scrollTo(0, props.scrollY || 0);

  React.useEffect(() => {
    if (!isFetching) {
      return;
    }

    const params = {
      startAt: items.length, 
      maxResults: 12
    };

    fetch(`${Endpoint.url}/?${queryString.stringify(params)}`)
      .then(res => res.json())
      .then(newItems => {
        setItems(items.concat(newItems));
        setIsFetching(false);
      })
      .catch(err => {
        console.error('video feed fetch error', err);
        setLastFetchError(err);
      });
  }, [isFetching]);

  function onScroll(ev) {
    if (!rootRef.current || !rootRef.current.firstElementChild) {
      return;
    }

    const rootRefBottom = rootRef.current.getClientRects()[0].bottom;
    const cardHeightPadding = 100; // rough value, good enough
    const cardHeight = rootRef.current.firstElementChild.clientHeight + cardHeightPadding;

    if (rootRefBottom - cardHeight <= window.innerHeight) {
      setIsFetching(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // If the initial fetch failed, show error
  if (lastFetchError && items.length == 0) {
    return (
      <ErrorMessage
        title="There was an error while fetching the video feed!"
        details={lastFetchError.message}
      />
    );
  }

  return (
    <div ref={rootRef} className="video-feed">
      {items.map(video => {
        const thumbnail = 
          video.thumbnails.maxresUrl || 
          video.thumbnails.standardUrl || 
          video.thumbnails.highUrl || 
          video.thumbnails.mediumUrl || 
          video.thumbnails.defaultUrl;

        return (
          <div key={video.id} className="video-feed-card-container">
            <VideoCard
              id={video.id}
              title={video.title}
              numViews={video.numViews}
              publishedAt={video.publishedAt}
              thumbnail={thumbnail}
              duration={video.duration}
              onClick={() => props.onVideoClick && props.onVideoClick(video.id, items)}
            >

            </VideoCard>
          </div>
        );
      })}

      {isFetching && 
        <div className="video-feed-spinner">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }
    </div>
  )
}
