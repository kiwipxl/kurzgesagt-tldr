import Card from 'react-bootstrap/Card';

export default (props) => {
    let renderContent = [];
    for (const keyPoint of props.sources.keyPoints) {
        let renderKeyPointContent = [];
        renderKeyPointContent.push(<h4>{keyPoint.title}</h4>);

        for (const content of keyPoint.content) {
            switch (content.type) {
                case 'text':
                    renderKeyPointContent.push(<p>{content.data}</p>);
                    break;

                case 'citation':
                    renderKeyPointContent.push(<a href={content.data.url}>{content.data.title}</a>);
                    renderKeyPointContent.push(<br/>);
                    renderKeyPointContent.push(<em><span>{content.data.quote}</span></em>);
                    renderKeyPointContent.push(<p/>);
                    break;
            }
        }

        renderContent.push(<div className='sources-key-point'>{renderKeyPointContent}</div>);
    }

    return (
        <Card className='video-details-card'>
            <Card.Body>
                {renderContent}
            </Card.Body>
        </Card>
    );
};