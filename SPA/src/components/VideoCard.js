import React from 'react';
import Card from 'react-bootstrap/Card';
import { DateTime, Duration } from 'luxon';

const Component = (props) => {
    const [imgHeight, setImgHeight] = React.useState(0);
    const imgRef = React.useRef(null);

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

    const publishDateRelative = DateTime.fromISO(props.publishedAt).toRelative();
    
    const duration = Duration.fromISO(props.duration);
    const durationFormatted = duration.toFormat("hh:mm:ss");

    let durationString = "";
    let foundStart = false;
    for (let char of durationFormatted) {
        if (char != '0' && char != ':') {
            foundStart = true;
        }

        if (foundStart) {
            durationString += char;
        }
    }

    React.useEffect(() => {
        // We need to watch when the image height changes (e.g. everytime the window size changes)
        // so that we can offset our duration based on it.
        const resizeObserver = new ResizeObserver(entries => {
            setImgHeight(entries[0].target.clientHeight);
        });

        resizeObserver.observe(imgRef.current);
    }, []);

    let durationPositionY = 100;
    if (imgHeight > 0) {
        durationPositionY = imgHeight - 30;
    }
    
    return (
        <Card className="video-card" onClick={() => {
            if (props.onClick) {
                props.onClick(props.id);
            }
        }}>
            <Card.Img ref={imgRef} className="video-card-img" variant="top" src={props.thumbnail}/>
            
            {/*
            Because Card.Img is a void element, it cannot have children.
            And so how do we position our duration at the bottom of the image?
            Here's an odd way - let's calculate the image height and offset it dynamically.
            */}
            <div className='video-card-duration' style={{top: durationPositionY}}>
                {durationString}
            </div>

            <Card.Body>
                <Card.Title className="video-card-title">{props.title}</Card.Title>

                <Card.Text className="video-card-info">
                {`${viewsShortHand} views | ${publishDateRelative}`}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Component;