import React from 'react';
import { useParams } from 'react-router-dom';
import VideoDetailsNav from '../components/VideoDetailsNav';
import VideoTranscript from '../components/VideoTranscript';
import VideoSources from '../components/VideoSources';
import VideoTags from '../components/VideoTags';

export default () => {
    const { videoId, tab } = useParams();

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
            <VideoDetailsNav videoId={videoId} defaultTab={tab}>

            </VideoDetailsNav>

            {detailsEl}
        </div>
    );
};