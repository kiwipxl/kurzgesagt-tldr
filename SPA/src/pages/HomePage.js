import React from 'react';

export default (props) => {
    return (
      <div className='content-container'>
          <div className='content'>
            {props.children}
          </div>
      </div>
    );
};