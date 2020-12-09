import React from 'react';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';
import LastUpdatedTimestamp from '../../../components/LastUpdatedTimestamp';
import Endpoint from '../../../Endpoint';
import VideoDetailsContainer from '../../../components/VideoDetailsContainer';
import { fetchVideoDetailsStaticPaths } from '../../../PageUtil';

const Component = (props) => {
    return (
        <VideoDetailsContainer vid={props.vid} tab='transcript' details={props.containerDetails}>
            <Card className='video-details-card'>
                <Card.Body>
                    <div>
                        {parse(props.transcript.replace(/\n/g, '<br/>'))}
                    </div>
                </Card.Body>
            </Card>
            
            <LastUpdatedTimestamp timestampMillis={props.lastUpdated}/>
        </VideoDetailsContainer>
    );
};

export default Component;

export async function getStaticProps({ params }) {
    const res = await fetch(`${Endpoint.url}/video/transcript/${params.vid}`);
    const transcript = await res.json();

    const containerDetails = await VideoDetailsContainer.fetchDetails(params.vid);

    return {
        props: {
            vid: params.vid, 
            containerDetails: containerDetails, 

            transcript: transcript.en, 
            lastUpdated: transcript.last_updated, 

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
