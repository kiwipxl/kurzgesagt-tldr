import React from 'react';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';
import ReactPlayer from 'react-player/youtube';
import LastUpdatedTimestamp from './LastUpdatedTimestamp';

// Quick and easy way to convert description to HTML elements
function parseDescription(desc) {
    desc = desc.replaceAll("\n", '\n');
    desc = desc.replaceAll(/(.+)/g, (match, paragraph) => {
        return `<span>${paragraph}</span>`;
    });

    const urlRegex = /(http[s]?:\/\/[a-zA-Z0-9\-\_\*\?\=\&\.\/]+)([ \\n]?)/g;
    desc = desc.replaceAll(urlRegex, (match, url, endChar) => {
        return `<a href="${url}" target="_blank">${url}</a>` + endChar;
    });

    desc = desc.replaceAll('\n', "<br/>");

    return parse(desc);
}

export default (props) => {
    const [playerHeight, setPlayerHeight] = React.useState(0);
    const playerRef = React.useRef(null);

    const resizeObserver = new ResizeObserver(entries => {
        const aspectRatio = 16.0 / 9.0;
        setPlayerHeight(entries[0].target.clientWidth / aspectRatio);
    });

    React.useEffect(() => {
        resizeObserver.observe(playerRef.current);
    }, []);
    
    return (
        <div>
            <Card className='video-details-card'>
                <div ref={playerRef} className='youtube-player'>
                    <ReactPlayer
                        width='100%'
                        height={playerHeight}
                        url={`https://www.youtube.com/watch?v=${props.id}`}
                    />
                </div>

                <Card.Body>
                    {parseDescription(props.description)}
                </Card.Body>
            </Card>

            <LastUpdatedTimestamp timestampMillis={props.lastUpdated}/>
        </div>
    );
};