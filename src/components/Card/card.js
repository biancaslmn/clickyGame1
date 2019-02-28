import React from 'react';
import './card.css'

function Card (props){

    return(
        <div 
            onClick={ ()=> props.handleClick(props.id)} 
            className='card'> 
                {props.name} 
            <img src={props.picture} />
        </div> )
}

export default Card;