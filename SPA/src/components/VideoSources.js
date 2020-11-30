import Card from 'react-bootstrap/Card';

export default (props) => {
    let renderContent = [];
    for (const keyPoint of props.sources.keyPoints) {
        renderContent.push(<h4>{keyPoint.title}</h4>);

        for (const content of keyPoint.content) {
            switch (content.type) {
                case 'text':
                    renderContent.push(<p>{content.data}</p>);
                    break;

                case 'citation':
                    renderContent.push(<a href={content.data.url}>{content.data.title}</a>);
                    renderContent.push(<br/>);
                    renderContent.push(<em><span>{content.data.quote}</span></em>);
                    renderContent.push(<p/>);
                    break;
            }
        }
    }

    return (
        <Card className='video-details-card'>
            <Card.Body>
                {renderContent}
            </Card.Body>
        </Card>
    );
};