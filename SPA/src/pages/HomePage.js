import React from 'react';

export default (props) => {
    props.setHeaderOptions(false);
    
    return (
      <div className='content-container'>
          <div className='content'>
            {props.children}
          </div>
      </div>
    );
};