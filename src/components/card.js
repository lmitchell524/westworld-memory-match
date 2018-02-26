import React from 'react';
import '../assets/css/card-css.css';
import '../assets/css/cylinder.css';
import cylinder from '../assets/images/level3/cylinder.png';
import bullet from '../assets/images/level3/bullet.png';



export default props => {

    const bulletCard = {
        position: 'absolute',
        height: '20vmin',
        width: '20vmin',
        maxWidth: '20vmin',
        transformStyle: 'preserve-3d',
        transition: 'all .5s ease-in-out'
    }

    const bulletBack = {
            height: '100%',
            width: '100%',
            borderRadius: '50%',
            position: 'absolute',
            top: '0',
            left: '0',
            backfaceVisibility: 'hidden',
            overflow: 'hidden',
        }

    const bulletFront  = {
        transform: 'rotateY(180deg)',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        position: 'absolute',
        top: '0',
        left: '0',
        backfaceVisibility: 'hidden',
        overflow: 'hidden',
        border: '1px solid black'
    }

    const fillerStyle = {
        color: 'inherit'
    }

    const { flipCard, level, position, card: { front, back, flipped, index }} = props;

    return (
            <div onClick={flipCard} style={level === 3 ? bulletCard : fillerStyle } className={`card ${flipped ? 'flipped' : ''} ${ level === 3 ? 'cardLevel3' : '' } ${ level === 3 ? position : '' } ${ level === 1 ? 'cursor' : 'pointer'}` }>
                <div style={ level === 3 ? bulletFront : fillerStyle } className='front'>
                    <img src={front}/>
                </div>
                <div className='back' style={ level === 3 ? bulletBack : fillerStyle }>
                    <img src={back}/>
                </div>
            </div>

    )
}
