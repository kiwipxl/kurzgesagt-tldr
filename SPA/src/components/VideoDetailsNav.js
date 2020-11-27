import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';

export default (props) => {
    const routerHistory = useHistory();

    const onClick = (eventKey) => {
        routerHistory.push(`/${props.videoId}/${eventKey}`);

        if (props.onSwitchTab) {
            props.onSwitchTab(eventKey);
        }
    };

    return (
        <Nav variant="pills" onSelect={onClick} defaultActiveKey={props.defaultTab}>
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