import Card from 'react-bootstrap/Card';

export default (props) => {
    return (
        <Card className='transcript-card'>
            <Card.Body>
                {props.transcript}
            </Card.Body>
        </Card>
    );
};