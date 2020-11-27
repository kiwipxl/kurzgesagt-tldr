import Card from 'react-bootstrap/Card';

export default (props) => {
    let viewsShortHand;
    if (props.numViews >= 1000000) {
        viewsShortHand = (Math.round(props.numViews / 1000000 * 10) / 10).toString() + "M";
    }else if (props.numViews >= 100000) {
        viewsShortHand = Math.round(props.numViews / 1000).toString() + "K";
    }else if (props.numViews >= 1000) {
        viewsShortHand = (Math.round(props.numViews / 1000 * 10) / 10).toString() + "K";
    }else {
        viewsShortHand = props.numViews.toString();
    }

    return (
        <Card className="video-card">
        <Card.Img className="video-card-img" variant="top" src={props.thumbnail}/>

        <Card.Body>
            <Card.Title className="video-card-title">{props.title}</Card.Title>

            <Card.Text className="video-card-info">
            {`${viewsShortHand} views | 1 month ago`}
            </Card.Text>
        </Card.Body>
        </Card>
    );
}