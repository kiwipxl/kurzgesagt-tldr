import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import VideoDetailsNav from '../components/VideoDetailsNav';
import VideoTranscript from '../components/VideoTranscript';
import VideoSources from '../components/VideoSources';
import VideoTags from '../components/VideoTags';
import Video from '../components/Video';
import VideoSoundTrack from '../components/VideoSoundTrack';
import MissingDetails from '../components/MissingDetails';

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
                <div className='center'>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </div>
        );
    }

    const hasSources = videoDetails.sources != undefined;
    const hasTranscript = videoDetails.transcript != undefined && videoDetails.transcript.en != undefined;
    const hasSoundTrack = videoDetails.info.soundtrack != undefined;
    const hasTags = videoDetails.tags != undefined;

    let detailsEl = null;
    switch (tab) {
        case 'video':
            detailsEl = 
                <Video
                    id={videoDetails.info.id}
                    description={videoDetails.info.description}
                    lastUpdated={videoDetails.info.last_scraped}
                />;
            break;

        case 'sources':
            if (hasSources) {
                detailsEl = 
                    <VideoSources
                        sources={videoDetails.sources}
                        lastUpdated={videoDetails.sources.last_updated}
                    />;
            }else {
                detailsEl = <MissingDetails tab={tab}/>;
            }
            break;

        case 'transcript':
            if (hasTranscript) {
                detailsEl = 
                    <VideoTranscript
                        transcript={videoDetails.transcript.en}
                        lastUpdated={videoDetails.transcript.last_updated}
                    />;
            }else {
                detailsEl = <MissingDetails tab={tab}/>;
            }
            break;
        
        case 'tags':
            if (hasTags) {
                detailsEl = 
                    <VideoTags
                        tags={videoDetails.tags}
                        lastUpdated={videoDetails.info.last_scraped}
                    />;
            }else {
                detailsEl = <MissingDetails tab={tab}/>;
            }
            break;
        
        case 'soundtrack':
            if (hasSoundTrack) {
                detailsEl = 
                    <VideoSoundTrack
                        url={videoDetails.info.soundtrack.url}
                        lastUpdated={videoDetails.info.soundtrack.last_updated}
                    />;
            }else {
                detailsEl = <MissingDetails tab={tab}/>;
            }
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

                hasSources={hasSources}
                hasTranscript={hasTranscript}
                hasSoundTrack={hasSoundTrack}
                hasTags={hasTags}
            >

            </VideoDetailsNav>

            {detailsEl}
        </div>
    );
};