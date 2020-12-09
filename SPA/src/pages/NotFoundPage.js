import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default (props) => {
    return (
        <div className='content-container'>
            <Alert variant='warning'>
                <Alert.Heading>
                    Sorry, that page doesn't exist!
                </Alert.Heading>
            </Alert>
        </div>
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            header: {
                showBack: false
            }
        }
    }
}