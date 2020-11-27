import Card from 'react-bootstrap/Card';

export default (props) => {
    console.log(props.tags);

    return (
        <Card className='tags-card'>
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
    );
};