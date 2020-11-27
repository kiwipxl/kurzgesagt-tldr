import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';

export default (props) => {
    return (
        <Card className='transcript-card'>
            <Card.Body>
                <div>
                    {parse(props.transcript.replaceAll('\n', '<br/>'))}
                </div>
            </Card.Body>
        </Card>
    );
};