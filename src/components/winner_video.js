import React from 'react';

export default props => {

    const { winGame } = props;

    const youTubeStyling = {
        frameborder: "0",
    }

    const videoSrc = 'https://www.youtube.com/embed/S94ETUiMZwQ?rel=0&amp;showinfo=0&amp;start=77;end=92'; 
    const endSrc = ';autoplay=1';

    return(
        <div className={ winGame ? 'showScreen' : 'hideScreen'}>
            <h1 className='winner-text'>You Won!</h1>
            <iframe style={youTubeStyling} src={winGame ? videoSrc + endSrc : ''} allowFullScreen></iframe>
            <button className='playAgain' onClick={props.playAgain}>Play Again</button>
        </div>
    )
}
