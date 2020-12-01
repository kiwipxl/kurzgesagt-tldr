import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';

export default (props) => {
    if (!props.transcript) {
        return (
            <Card className='video-details-card'>
                <Card.Body>
                    <div className='missing-details'>
                        No transcript could be found for this video. :(
                    </div>
                </Card.Body>
            </Card>
        );
    }

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