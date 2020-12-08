import React from 'react';
import queryString from 'query-string';
import Endpoint from '../Endpoint';
import VideoFeed from '../components/VideoFeed';
import fs from 'fs';
import path from 'path';

export default (props) => {
    // props.setHeaderOptions(false);
    
    return (
      <div className='content-container'>
          <div className='content'>
            {props.children}

            <VideoFeed items={props.items}>

            </VideoFeed>
          </div>
      </div>
    );
};

export async function getStaticProps(context) {
  async function fetchItems(startAt, maxResults) {
    const params = {
      startAt: startAt, 
      maxResults: maxResults
    };

    const res = await fetch(`${Endpoint.url}/?${queryString.stringify(params)}`);
    const items = await res.json();

    return items;
  }

  let page = 0;
  const maxItems = 10;
  while (true) {
    const items = await fetchItems(page * maxItems, maxItems);
    if (items.length == 0) {
      break;
    }

    const feedDir = path.join(process.cwd(), 'public/feed');
    fs.writeFileSync(
      path.join(feedDir, `page${page + 1}.json`), 
      JSON.stringify(items), 
      {
        encoding: 'utf8', 
        flag: 'w'
      }
    );

    ++page;
  }

  const initialItems = await fetchItems(0, maxItems);

  return {
    props: {
      items: initialItems
    }
  }
}