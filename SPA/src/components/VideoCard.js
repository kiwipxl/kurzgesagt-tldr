import Card from 'react-bootstrap/Card';

export default (props) => {
    return (
        <Card className="video-card">
        <Card.Img className="video-card-img" variant="top" src={props.thumbnail}/>

        <Card.Body>
            <Card.Title className="video-card-title">{props.title}</Card.Title>

            <Card.Text className="video-card-info">
            {"1.3M views | 1 month ago"}
            </Card.Text>
        </Card.Body>
        </Card>
    );
}