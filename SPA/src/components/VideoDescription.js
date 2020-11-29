import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';

export default (props) => {
    let desc = props.description;

    desc = desc.replaceAll("\n", '\n');
    desc = desc.replaceAll(/(.+)/g, (match, paragraph) => {
        return `<p>${paragraph}</p>`;
    });

    const urlRegex = /(http[s]?:\/\/[a-zA-Z0-9\-\*\?\=\&\.\/]+)([ \\n]?)/g;
    desc = desc.replaceAll(urlRegex, (match, url, endChar) => {
        return `<a href="${url}">${url}</a>` + endChar;
    });

    console.log(desc);

    return (
        <Card className='sources-card'>
            <Card.Body>
                {parse(desc)}
            </Card.Body>
        </Card>
    );
};