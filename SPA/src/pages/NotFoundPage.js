import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default () => {
    return (
        <div className='content-container'>
            <div className='content'>
                <Alert variant='warning'>
                    <Alert.Heading>
                        Sorry, that page doesn't exist!
                    </Alert.Heading>
                </Alert>
            </div>
        </div>
    );
};