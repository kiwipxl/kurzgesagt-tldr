import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useRouter } from 'next/router';
import Endpoint from '../Endpoint';

const Component = (props) => {
  const router = useRouter();

  const urlPrefix = `${router.basePath}/video/${props.vid}`;

  return (
    <div className="content-container">
      <div className="content">
        <h2 className="video-details-title">{props.details.title}</h2>

        <Nav variant="pills" activeKey={props.tab} defaultActiveKey={props.tab}>
          <Nav.Item>
            <Nav.Link href={`${urlPrefix}`} eventKey="video">
              Video
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href={`${urlPrefix}/sources`}
              eventKey="sources"
              disabled={!props.details.hasSources}
            >
              Sources
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href={`${urlPrefix}/transcript`}
              eventKey="transcript"
              disabled={!props.details.hasTranscript}
            >
              Transcript
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href={`${urlPrefix}/tags`}
              eventKey="tags"
              disabled={!props.details.hasTags}
            >
              Tags
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href={`${urlPrefix}/soundtrack`}
              eventKey="soundtrack"
              disabled={!props.details.hasSoundTrack}
            >
              Soundtrack
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {props.children}
      </div>
    </div>
  );
};

Component.fetchDetails = async (vid) => {
  const res = await fetch(`${Endpoint.url}/video/${vid}`);
  const details = await res.json();

  return {
    title: details.info.title,

    hasSources: details.sources != undefined,
    hasTranscript:
      details.transcript != undefined && details.transcript.en != undefined,
    hasSoundTrack: details.info.soundtrack != undefined,
    hasTags: details.tags != undefined,
  };
};

export default Component;
