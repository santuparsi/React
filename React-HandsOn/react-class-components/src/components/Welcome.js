import React from 'react';

const Welcome =() => {
    // with JSX
    // return <div>
    //     <h1>Welcome User</h1>
    // </div>

    // without JSX
    // return React.createElement(
    //     'div',
    //     null,
    //     'h1',
    //     'Welcome User'
    // )
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Welcome User'
        )
    )
}

export default Welcome;