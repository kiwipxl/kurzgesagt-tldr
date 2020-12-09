import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Component = (props) => {
    const [showingMoreDetails, setShowingMoreDetails] = React.useState(false);

    return (
        <Alert variant='danger' className={props.className}>
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

export default Component;