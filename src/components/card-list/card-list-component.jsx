import React from 'react';

import './card-list.styles.css';

// () is a functional component and we can pass props to it.
export const CardList = props => {

    return <div className='card-list'>{ props.children }</div>; 
}