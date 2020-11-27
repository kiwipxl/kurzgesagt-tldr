import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';

export default (props) => {
    const routerHistory = useHistory();

    const onClick = (eventKey) => {
        routerHistory.replace(`/video/${props.videoId}#${eventKey}`);

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
                <Nav.Link eventKey="sources">Sources</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="transcript">Transcript</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="tags">Tags</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};