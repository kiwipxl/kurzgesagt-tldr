import React from 'react';
import Card from 'react-bootstrap/Card';
import ReactPlayer from 'react-player/soundcloud';
import LastUpdatedTimestamp from '../../../components/LastUpdatedTimestamp';
import Endpoint from '../../../Endpoint';
import VideoDetailsContainer from '../../../components/VideoDetailsContainer';
import { fetchVideoDetailsStaticPaths } from '../../../PageUtil';

const Component = (props) => {
    const [playerHeight, setPlayerHeight] = React.useState(0);
    const playerRef = React.useRef(null);

    React.useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            const aspectRatio = 16.0 / 9.0;
            const maxHeight = 280;
            setPlayerHeight(Math.min(entries[0].target.clientWidth / aspectRatio, maxHeight));
        });

        if (playerRef.current) {
            resizeObserver.observe(playerRef.current);
        }
    }, []);

    return (
        <VideoDetailsContainer vid={props.vid} tab='soundtrack' details={props.containerDetails}>
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
        </VideoDetailsContainer>
    );
};

export default Component;

export async function getStaticProps({ params }) {
    const res = await fetch(`${Endpoint.url}/video/info/${params.vid}`);
    const info = await res.json();

    const containerDetails = await VideoDetailsContainer.fetchDetails(params.vid);

    return {
        props: {
            vid: params.vid, 
            containerDetails: containerDetails, 

            url: info.soundtrack.url, 
            lastUpdated: info.soundtrack.last_updated, 

            header: {
                showBack: true, 
                backUrl: '/'
            }
        }
    }
}

export async function getStaticPaths() {
    return await fetchVideoDetailsStaticPaths();
}
