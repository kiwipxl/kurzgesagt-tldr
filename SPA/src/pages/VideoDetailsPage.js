import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import VideoDetailsNav from '../components/VideoDetailsNav';
import VideoTranscript from '../components/VideoTranscript';
import VideoSources from '../components/VideoSources';
import VideoTags from '../components/VideoTags';

export default () => {
    const { videoId } = useParams();
    const defaultTab = 'sources';

    const [tab, setTab] = React.useState(defaultTab);
    const [videoDetails, setVideoDetails] = React.useState({});
    const [isFetching, setIsFetching] = React.useState(true);

    if (window.location.hash !== '') {
        // Override current tab with hash tab (e.g. /video/3mnSDifDSxQ#transcript)
        const hashTab = window.location.hash.replace('#', '');
        if (hashTab !== tab) {
            setTab(hashTab);
        }
    }

    function onClickTab(newTab) {
        setTab(newTab);
    }

    let detailsEl = null;
    switch (tab) {
        case 'sources':
            detailsEl = <VideoSources sources={videoDetails.sources}></VideoSources>;
            break;

        case 'transcript':
            detailsEl = <VideoTranscript transcript={videoDetails.transcript}></VideoTranscript>;
            break;
        
        case 'tags':
            detailsEl = <VideoTags tags={videoDetails.tags}></VideoTags>;
            break;
    }

    React.useEffect(() => {
        fetch(`http://localhost:7800/video/${videoId}`)
            .then(res => res.json())
            .then(json => {
                setVideoDetails(json);
                setIsFetching(false);
            })
            .catch(err => console.error(err));
    }, []);

    if (isFetching) {
        return (
            <div className="video-feed-container">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="video-feed-container">
            <VideoDetailsNav
                videoId={videoId}
                tab={tab}
                defaultTab={defaultTab}
                onClickTab={onClickTab}
            >

            </VideoDetailsNav>

            {detailsEl}
        </div>
    );
};