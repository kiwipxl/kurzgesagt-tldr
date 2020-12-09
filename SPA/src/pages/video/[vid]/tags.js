import React from 'react';
import Card from 'react-bootstrap/Card';
import LastUpdatedTimestamp from '../../../components/LastUpdatedTimestamp';
import Endpoint from '../../../Endpoint';
import VideoDetailsContainer from '../../../components/VideoDetailsContainer';
import { fetchVideoDetailsStaticPaths } from '../../../PageUtil';

export default (props) => {
    return (
        <VideoDetailsContainer vid={props.vid} tab='tags' details={props.containerDetails}>
            <Card className='video-details-card'>
                <Card.Body>
                    <div className='chip-grid'>
                        {props.tags.map((tag) => (
                            <div key={tag} className='chip'>
                                {tag}
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>

            <LastUpdatedTimestamp timestampMillis={props.lastUpdated}/>
        </VideoDetailsContainer>
    );
};

export async function getStaticProps({ params }) {
    const res = await fetch(`${Endpoint.url}/video/tags/${params.vid}`);
    const tags = await res.json();

    const containerDetails = await VideoDetailsContainer.fetchDetails(params.vid);

    return {
        props: {
            vid: params.vid, 
            containerDetails: containerDetails, 

            tags: tags.tags, 
            lastUpdated: tags.last_scraped, 

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
