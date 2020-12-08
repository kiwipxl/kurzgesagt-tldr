import React from 'react';
import VideoFeed from '../components/VideoFeed';

export default (props) => {
    // props.setHeaderOptions(false);
    
    return (
      <div className='content-container'>
          <div className='content'>
            {props.children}

            <VideoFeed>

            </VideoFeed>
          </div>
      </div>
    );
};