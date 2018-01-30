import React from 'react';
import '../assets/css/card-css.css';

export default props => {
    const { flipCard, card: { front, back, flipped }} = props;

    return (
        <div className='card-container'>
            <div className={`card ${flipped ? 'flipped' : ''}`}>
                <div className='front'>
                    <img src={front}/>
                </div>
                <div onClick={flipCard} className="back">
                    <img src={back}/>
                </div>
            </div>
        </div>
    )
}
