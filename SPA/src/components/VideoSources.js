import Card from 'react-bootstrap/Card';
import chroma from 'chroma-js';

const domainTagColours = [chroma('#8dd3c7'),chroma('#ffffb3'),chroma('#bebada'),chroma('#fb8072'),chroma('#80b1d3'),chroma('#fdb462'),chroma('#b3de69'),chroma('#fccde5'),chroma('#d9d9d9'),chroma('#bc80bd'),chroma('#ccebc5'),chroma('#ffed6f')];

function getDomainTagColour(domain) {
    // each unique tag has it's own colour. generate a hash and index into the colour
    // array to find it's colour.

    // generate a 32bit signed integer hash
    // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
    var hash = 0, i, chr;
    for (i = 0; i < domain.length; i++) {
        chr = domain.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    
    return domainTagColours[Math.abs(hash) % domainTagColours.length];
}

export default (props) => {
    let renderContent = [];
    let index = 0;
    let citationIndex = 0;

    for (const keyPoint of props.sources.keyPoints) {
        let renderKeyPointContent = [];
        renderKeyPointContent.push(<h4>{keyPoint.title}</h4>);

        for (const content of keyPoint.content) {
            switch (content.type) {
                case 'text':
                    renderKeyPointContent.push(<p>{content.data}</p>);
                    break;

                case 'citation':
                    const pattern = /(http[s]?:\/\/)?(www\.)?([a-zA-Z0-9\.-]+)\//g;
                    const matches = pattern.exec(content.data.url);
                    
                    let domainTag = null;

                    if (matches) {
                        const domain = matches[3];
                        let colour = getDomainTagColour(domain);
                        const borderColour = chroma(colour).darken();
                        colour = colour.alpha(0.5);

                        domainTag = 
                            <span
                                className='sources-domain-tag'
                                style={{backgroundColor: colour.hex(), borderColor: borderColour.hex()}}
                            >
                                {domain}
                            </span>;
                    }

                    renderKeyPointContent.push(
                        <span>
                            <span className='sources-number'>{(citationIndex + 1) + '.'}</span>
                            <a href={content.data.url}>{content.data.title}</a>
                            {domainTag}
                        </span>
                    );

                    renderKeyPointContent.push(<br/>);
                    renderKeyPointContent.push(<span className='sources-quote'>{content.data.quote}</span>);
                    renderKeyPointContent.push(<p/>);

                    ++citationIndex;
                    break;
            }
        }

        renderContent.push(<div key={index} className='sources-key-point'>{renderKeyPointContent}</div>);

        ++index;
    }

    return (
        <Card className='video-details-card'>
            <Card.Body>
                {renderContent}
            </Card.Body>
        </Card>
    );
};