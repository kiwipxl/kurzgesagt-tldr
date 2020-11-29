import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';

export default (props) => {
    return (
        <Card className='video-details-card'>
            <Card.Body>
                <div>
                    {parse(props.transcript.replaceAll('\n', '<br/>'))}
                </div>
            </Card.Body>
        </Card>
    );
};