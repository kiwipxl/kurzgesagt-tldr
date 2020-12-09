import React from 'react';
import queryString from 'query-string';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Endpoint from '../Endpoint';
import VideoFeed from '../components/VideoFeed';

export default (props) => {
  const router = useRouter();

  function onVideoClick(vid) {
    router.push(`/video/${vid}`);
  }

    return (
      <div className='content-container'>
          <div className='content'>
            {props.children}

            <VideoFeed items={props.items} onVideoClick={onVideoClick}>

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

    for (const item of items) {
      // description is not used in the feed and increases size significantly
      delete item.description;
    }

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
      items: initialItems, 
      header: {
        showBack: false
      }
    }
  }
}