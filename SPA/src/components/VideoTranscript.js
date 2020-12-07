import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';
import LastUpdatedTimestamp from './LastUpdatedTimestamp';

export default (props) => {
    return (
        <div>
            <Card className='video-details-card'>
                <Card.Body>
                    <div>
                        {parse(props.transcript.replaceAll('\n', '<br/>'))}
                    </div>
                </Card.Body>
            </Card>
            
            <LastUpdatedTimestamp timestampMillis={props.lastUpdated}/>
        </div>
    );
};