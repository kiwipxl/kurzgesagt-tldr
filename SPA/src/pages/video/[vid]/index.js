import React from 'react';
import queryString from 'query-string';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';
import ReactPlayer from 'react-player/youtube';
import LastUpdatedTimestamp from '../../../components/LastUpdatedTimestamp';
import Endpoint from '../../../Endpoint';
import VideoDetailsContainer from '../../../components/VideoDetailsContainer';

// Quick and easy way to convert description to HTML elements
function parseDescription(desc) {
  desc = desc.replace(/\n/g, '\n');
  desc = desc.replace(/(.+)/g, (match, paragraph) => {
    return `<span>${paragraph}</span>`;
  });

  const urlRegex = /(http[s]?:\/\/[a-zA-Z0-9\-\_\*\?\=\&\.\/]+)([ \\n]?)/g;
  desc = desc.replace(urlRegex, (match, url, endChar) => {
    return `<a href="${url}" target="_blank">${url}</a>` + endChar;
  });

  desc = desc.replace(/\n/g, '<br/>');

  return parse(desc);
}

const Component = (props) => {
  const [playerHeight, setPlayerHeight] = React.useState(0);
  const playerRef = React.useRef(null);

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const aspectRatio = 16.0 / 9.0;
      setPlayerHeight(entries[0].target.clientWidth / aspectRatio);
    });

    resizeObserver.observe(playerRef.current);
  }, []);

  return (
    <VideoDetailsContainer
      vid={props.vid}
      tab="video"
      details={props.containerDetails}
    >
      <Card className="video-details-card">
        <div ref={playerRef} className="youtube-player">
          <ReactPlayer
            width="100%"
            height={playerHeight}
            url={`https://www.youtube.com/watch?v=${props.vid}`}
          />
        </div>

        <Card.Body>{parseDescription(props.description)}</Card.Body>
      </Card>

      <LastUpdatedTimestamp timestampMillis={props.lastUpdated} />
    </VideoDetailsContainer>
  );
};

export default Component;

export async function getStaticProps({ params }) {
  const res = await fetch(`${Endpoint.url}/video/info/${params.vid}`);
  const info = await res.json();

  const containerDetails = await VideoDetailsContainer.fetchDetails(params.vid);

  return {
    props: {
      vid: params.vid,
      containerDetails: containerDetails,

      description: info.description,
      lastUpdated: info.last_scraped,

      header: {
        showBack: true,
        backUrl: '/',
      },
    },
  };
}

export async function getStaticPaths() {
  const params = {
    startAt: 0,
    maxResults: 1000,
  };

  const res = await fetch(`${Endpoint.url}/?${queryString.stringify(params)}`);
  const items = await res.json();

  const paths = items.map((item) => ({ params: { vid: item.id } }));

  return {
    paths,
    fallback: false,
  };
}
