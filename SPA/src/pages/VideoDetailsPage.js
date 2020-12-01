import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import VideoDetailsNav from '../components/VideoDetailsNav';
import VideoTranscript from '../components/VideoTranscript';
import VideoSources from '../components/VideoSources';
import VideoTags from '../components/VideoTags';
import Video from '../components/Video';
import VideoSoundTrack from '../components/VideoSoundTrack';

export default () => {
    const { videoId } = useParams();
    const defaultTab = 'video';

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
            <div className="content-container">
                <Spinner animation="border" role="status" className='center'>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    let detailsEl = null;
    switch (tab) {
        case 'video':
            detailsEl = <Video id={videoDetails.info.id} description={videoDetails.info.description}></Video>;
            break;

        case 'sources':
            detailsEl = <VideoSources sources={videoDetails.sources}></VideoSources>;
            break;

        case 'transcript':
            detailsEl = <VideoTranscript transcript={videoDetails.transcript}></VideoTranscript>;
            break;
        
        case 'tags':
            detailsEl = <VideoTags tags={videoDetails.tags}></VideoTags>;
            break;
        
        case 'soundtrack':
            detailsEl = <VideoSoundTrack></VideoSoundTrack>;
    }

    return (
        <div className="content-container">
            <h2 className='video-details-title'>
                {videoDetails.info.title}
            </h2>

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