import Nav from 'react-bootstrap/Nav';
import { useRouter } from 'next/router';

export default (props) => {
    const router = useRouter();

    const onClick = (eventKey) => {
        router.replace(`/video/${props.videoId}#${eventKey}`);

        if (props.onClickTab) {
            props.onClickTab(eventKey);
        }
    };

    return (
        <Nav
            variant="pills"
            onSelect={onClick}
            activeKey={props.tab || ""}
            defaultActiveKey={props.defaultTab}
        >
            <Nav.Item>
                <Nav.Link eventKey="video">Video</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="sources" disabled={!props.hasSources}>Sources</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="transcript" disabled={!props.hasTranscript}>Transcript</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="tags" disabled={!props.hasTags}>Tags</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="soundtrack" disabled={!props.hasSoundTrack}>Soundtrack</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};