import React from 'react';

// () is a functional component and we can pass props to it.
export const CardList = props => {
    console.log(props);
    return <div>{props.children}</div>; 
}