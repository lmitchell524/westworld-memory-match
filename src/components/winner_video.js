import React from 'react';

export default props => {

    const { winGame } = props;

    const youTubeStyling = {
        width: "560px",
        height: "315px",
        frameborder: "0",
    }

    const videoSrc = 'https://www.youtube.com/embed/SxGPtCxxN64?rel=0&amp;controls=0&amp;showinfo=0;end=12';
    const endSrc = ';autoplay=1';

    return(
        <div className={ winGame ? 'showScreen' : 'hideScreen'}>
            <h1 className='winner-text'>You Won!</h1>
            <iframe style={youTubeStyling} src={winGame ? videoSrc + endSrc : ''} allowFullScreen></iframe>
            <button className='playAgain' onClick={props.playAgain}>Play Again</button>
        </div>
    )
}
