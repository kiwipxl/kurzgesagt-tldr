import React from 'react';
import queryString from 'query-string';
import Card from 'react-bootstrap/Card';
import LastUpdatedTimestamp from '../../../components/LastUpdatedTimestamp';
import Endpoint from '../../../Endpoint';
import VideoDetailsContainer from '../../../components/VideoDetailsContainer';

const Component = (props) => {
  return (
    <VideoDetailsContainer
      vid={props.vid}
      tab="tags"
      details={props.containerDetails}
    >
      <Card className="video-details-card">
        <Card.Body>
          <div className="chip-grid">
            {props.tags.map((tag) => (
              <div key={tag} className="chip">
                {tag}
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      <LastUpdatedTimestamp timestampMillis={props.lastUpdated} />
    </VideoDetailsContainer>
  );
};

export default Component;

export async function getStaticProps({ params }) {
  const res = await fetch(`${Endpoint.url}/video/tags/${params.vid}`);
  const tags = await res.json();

  const containerDetails = await VideoDetailsContainer.fetchDetails(params.vid);

  return {
    props: {
      vid: params.vid,
      containerDetails: containerDetails,

      tags: tags.tags,
      lastUpdated: tags.last_scraped,

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

  let paths = [];
  for (const item of items) {
    const res = await fetch(`${Endpoint.url}/video/tags/${item.id}`);
    if (res.status == 200) {
      paths.push({ params: { vid: item.id } });
    }
  }

  return {
    paths,
    fallback: false,
  };
}
