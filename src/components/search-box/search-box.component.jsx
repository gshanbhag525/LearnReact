import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    // this is a funcitional component which can take props
    // this does not have lifecycle methods, states, constructor
    <input
        className='search'
        type='search'
        placeholder={ placeholder }
        onChange={ handleChange }
    />
);