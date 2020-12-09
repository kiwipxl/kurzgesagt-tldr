import React from 'react';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import VideoDetailsNav from '../../components/VideoDetailsNav';
import VideoTranscript from '../../components/VideoTranscript';
import VideoSources from '../../components/VideoSources';
import VideoTags from '../../components/VideoTags';
import Video from '../../components/Video';
import VideoSoundTrack from '../../components/VideoSoundTrack';
import MissingDetails from '../../components/MissingDetails';
import Endpoint from '../../Endpoint';

function DetailsContainer(props) {
    return (
        <div className='content-container'>
            {!props.noContentBox &&
                <div className='content'>
                    {props.children}
                </div>
            }

            {props.noContentBox && 
                <div>
                    {props.children}
                </div>
            }
        </div>
    );
}

export default (props) => {
    const defaultTab = 'video';
    const [tab, setTab] = React.useState(defaultTab);

    const router = useRouter();
    const { vid } = router.query;

    const videoDetails = props.videoDetails;

    // if (window.location.hash !== '') {
    //     // Override current tab with hash tab (e.g. /video/3mnSDifDSxQ#transcript)
    //     const hashTab = window.location.hash.replace('#', '');
    //     if (hashTab !== tab) {
    //         setTab(hashTab);
    //     }
    // }

    function onClickTab(newTab) {
        setTab(newTab);
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
                videoId={vid}
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

export async function getStaticProps({ params }) {
    const res = await fetch(`${Endpoint.url}/video/${params.vid}`);
    const json = await res.json();
    
    return {
        props: {
            videoDetails: json, 

            header: {
                showBack: true
            }
        }
    }
}

export async function getStaticPaths() {
    const params = {
      startAt: 0, 
      maxResults: 1000
    };

    const res = await fetch(`${Endpoint.url}/?${queryString.stringify(params)}`);
    const items = await res.json();

    const paths = items.map(item => (
        { params: { vid: item.id }}
    ));

    return {
        paths, 
        fallback: false
    }
}