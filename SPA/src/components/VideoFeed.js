import React from 'react';
import { useRouter } from 'next/router';
import Spinner from 'react-bootstrap/Spinner';
import VideoCard from './VideoCard';
import ErrorMessage from './ErrorMessage';

export default (props) => {
  const router = useRouter();
  const rootRef = React.useRef(null);
  if (!rootRef || !rootRef.current) {
    // first time render, let's scroll immediately!
    // we could put this in useEffect, but that will hapen after render and
    // there will be a delay as a result.

    if (typeof window !== 'undefined') {
      window.scrollTo(0, props.scrollY || 0);
    }
  }

  const [page, setPage] = React.useState(1);
  const [items, setItems] = React.useState(props.items || []);
  const [isFetching, setIsFetching] = React.useState(false);
  const [stopFetching, setStopFetching] = React.useState(false);
  const [fetchError, setFetchError] = React.useState();

  React.useEffect(() => {
    if (!isFetching || stopFetching) {
      return;
    }

    fetch(`/feed/page${page + 1}.json`)
      .then(res => {
        if (res.status == 404) {
          // We've reached the end of the feed as there are no more pages left.
          // So stop fetching, we're done!
          setStopFetching(true);
          return;
        }

        return res.json();
      })
      .then(newItems => {
        if (!newItems) {
          return;
        }

        setPage(page + 1);
        setItems(items.concat(newItems));
        setIsFetching(false);
      })
      .catch(err => {
        console.error('video feed fetch error', err);

        setStopFetching(true);
        setFetchError(err);
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

      {isFetching && !stopFetching && 
        <div className="video-feed-spinner">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }

      {fetchError && 
        <ErrorMessage
          className='video-feed-error'
          title="Error when loading feed"
          message={fetchError.message}
        />
      }
    </div>
  )
}
