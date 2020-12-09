import queryString from 'query-string';
import Endpoint from './Endpoint';

export async function fetchVideoDetailsStaticPaths() {
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
