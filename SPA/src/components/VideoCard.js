import Card from 'react-bootstrap/Card';
import { DateTime } from 'luxon';

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

    let publishDateFormat = DateTime.fromISO(props.publishedAt).toRelative();

    return (
        <Card className="video-card" onClick={() => {
            if (props.onClick) {
                props.onClick(props.id);
            }
        }}>
        <Card.Img className="video-card-img" variant="top" src={props.thumbnail}/>

        <Card.Body>
            <Card.Title className="video-card-title">{props.title}</Card.Title>

            <Card.Text className="video-card-info">
            {`${viewsShortHand} views | ${publishDateFormat}`}
            </Card.Text>
        </Card.Body>
        </Card>
    );
}