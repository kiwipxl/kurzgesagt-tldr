import React from 'react';
import { useParams } from 'react-router-dom';
import VideoDetailsNav from '../components/VideoDetailsNav';
import VideoTranscript from '../components/VideoTranscript';
import VideoSources from '../components/VideoSources';
import VideoTags from '../components/VideoTags';

export default () => {
    const { videoId } = useParams();
    const defaultTab = 'sources';

    const [tab, setTab] = React.useState(defaultTab);

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
            detailsEl = <VideoSources></VideoSources>;
            break;

        case 'transcript':
            detailsEl = <VideoTranscript></VideoTranscript>;
            break;
        
        case 'tags':
            detailsEl = <VideoTags></VideoTags>;
            break;
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