import React from 'react';
import Card from 'react-bootstrap/Card';
import ReactPlayer from 'react-player/soundcloud';
import LastUpdatedTimestamp from './LastUpdatedTimestamp';

export default (props) => {
    const [playerHeight, setPlayerHeight] = React.useState(0);
    const playerRef = React.useRef(null);

    const resizeObserver = new ResizeObserver(entries => {
        const aspectRatio = window.innerWidth / window.innerHeight;
        setPlayerHeight(entries[0].target.clientWidth / aspectRatio * 0.5);
    });

    React.useEffect(() => {
        if (playerRef.current) {
            resizeObserver.observe(playerRef.current);
        }
    }, []);
    
    return (
        <div>
            <Card className='video-details-card'>
                <Card.Body>
                    <div ref={playerRef}>
                        <ReactPlayer
                            width='100%'
                            height={playerHeight}
                            url={props.url}
                        />
                    </div>
                </Card.Body>
            </Card>

            <LastUpdatedTimestamp timestampMillis={props.lastUpdated}/>
        </div>
    );
};