import React from 'react';

export default (props) => {

    const {autoLose} = props;

    const youTubeStyling = {
        frameborder: "0",
    }

    const videoSrc = 'https://www.youtube.com/embed/SxGPtCxxN64?rel=0&amp;controls=0&amp;showinfo=0;end=12';
    const endSrc = ';autoplay=1';

    return(
        <div className={ autoLose ? 'showScreen' : 'hideScreen'}>
            <h1 className='gameOver'>Game Over!</h1>
            <iframe style={youTubeStyling} src={autoLose ? videoSrc + endSrc : ''} allowFullScreen></iframe>
            <button className='playAgain' onClick={props.playAgain}>Play Again</button>
        </div>
    )
}
