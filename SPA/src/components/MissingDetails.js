import Card from 'react-bootstrap/Card';

export default (props) => {
    return (
        <Card className='video-details-card'>
            <Card.Body>
                <div className='missing-details'>
                    No {props.tab} could be found for this video. :(
                </div>
            </Card.Body>
        </Card>
    );
};