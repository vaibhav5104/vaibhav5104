import React from 'react';
import './style.css';

function Card(props) {
    const { series, imgsrc ,titles ,link } = props;

    return (
<div className='card'>
            <img src={imgsrc} alt={series} width="250px" height="350px"/>
            <div>
                <p>{titles}</p>
                <p>{series}</p>
                <button>
                    <a href={link} target='_blank'>Watch Now</a>
                </button>
            </div>
        </div>
        
    );
}

export default Card;
