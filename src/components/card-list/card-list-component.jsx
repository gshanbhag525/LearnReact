import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

// () is a functional component and we can pass props to it.
export const CardList = props => {

    return <div className='card-list'>
    {
        props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))
    }      
    </div>; 
}