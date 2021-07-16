import React from 'react';

var JSX= () => {
    return(
        <div>
    <h1>I am a jsx element</h1>
    </div>
    )
}

var JSX= () =>
{
    return React.createElement(
        'div',
        {id : "object", className:'dummy'}, 
       React.createElement('h1',null,'I am normal html'))
}
export { JSX};