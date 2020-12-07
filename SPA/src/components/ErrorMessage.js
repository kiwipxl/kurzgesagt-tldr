import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default (props) => {
    const [showingMoreDetails, setShowingMoreDetails] = React.useState(false);

    return (
        <Alert variant='danger'>
            {props.title && 
                <Alert.Heading>
                    {props.title}
                </Alert.Heading>
            }

            {props.message && 
                <p>
                    {props.message}
                </p>
            }

            {showingMoreDetails && 
                <div>
                    <hr/>
                    
                    <p>
                        {props.details}
                    </p>

                    <a className='error-toggle-details' onClick={() => setShowingMoreDetails(false)}>
                        Show less details
                    </a>
                </div>
            }

            {!showingMoreDetails &&
                <a className='error-toggle-details' onClick={() => setShowingMoreDetails(true)}>
                    Show more details
                </a>
            }
        </Alert>
    );
};