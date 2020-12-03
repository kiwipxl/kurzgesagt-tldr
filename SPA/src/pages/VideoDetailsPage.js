import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import VideoDetailsNav from '../components/VideoDetailsNav';
import VideoTranscript from '../components/VideoTranscript';
import VideoSources from '../components/VideoSources';
import VideoTags from '../components/VideoTags';
import Video from '../components/Video';
import VideoSoundTrack from '../components/VideoSoundTrack';
import MissingDetails from '../components/MissingDetails';
import Endpoint from '../Endpoint';
import ErrorMessage from '../components/ErrorMessage';

function DetailsContainer(props) {
    const routerHistory = useHistory();

    function onBackClick() {
        routerHistory.goBack();
    }

    return (
        <div className='content-container'>
            <a className='go-back' onClick={onBackClick}>Go Back</a>
            
            <div className='content'>
                {props.children}
            </div>
        </div>
    );
}

export default () => {
    const { videoId } = useParams();
    const defaultTab = 'video';

    const [tab, setTab] = React.useState(defaultTab);
    const [videoDetails, setVideoDetails] = React.useState({});
    const [isFetching, setIsFetching] = React.useState(true);
    const [fetchError, setFetchError] = React.useState();

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
        fetch(`${Endpoint.url}/video/${videoId}`)
            .then(res => res.json())
            .then(json => {
                setVideoDetails(json);
                setIsFetching(false);
            })
            .catch(err => {
                console.error(`failed to fetch video details for ${videoId}`, err);
                setFetchError(err);
            });
    }, []);

    if (fetchError) {
        return (
            <DetailsContainer>
                <ErrorMessage
                    title="There was an error while fetching video details!"
                    details={fetchError.message}
                />
            </DetailsContainer>
        );
    }

    if (isFetching) {
        return (
            <DetailsContainer>
                <div className='center'>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </DetailsContainer>
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
        <DetailsContainer>
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
        </DetailsContainer>
    );
};