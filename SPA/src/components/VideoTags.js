import Card from 'react-bootstrap/Card';
import LastUpdatedTimestamp from './LastUpdatedTimestamp';

export default (props) => {
    return (
        <div>
            <Card className='video-details-card'>
                <Card.Body>
                    <div className='chip-grid'>
                        {props.tags.map((tag) => (
                            <div key={tag} className='chip'>
                                {tag}
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>

            <LastUpdatedTimestamp timestampMillis={props.lastUpdated}/>
        </div>
    );
};