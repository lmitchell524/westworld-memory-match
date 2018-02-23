import React from 'react';

export default (props) => {

    const {endGame} = props;

    const youTubeStyling = {
        // width: "560px",
        // height: "315px",
        frameborder: "0",
    }

    const randomIndex = Math.floor(Math.random() * 2);
    const videoArray = ['https://www.youtube.com/embed/B2sdH3xZs2Q?rel=0&amp;showinfo=0&amp;start=132;end=140', 'https://www.youtube.com/embed/vmOXlt83jtI?rel=0&amp;showinfo=0&amp;start=72;end=94']
    const endSrc = ';autoplay=1';

    return(
        <div className={ endGame ? 'showScreen' : 'hideScreen'}>
            <h1 className='gameOver'>Too Many Shots Fired!</h1>
            <iframe style={youTubeStyling} src={endGame ? videoArray[randomIndex] + endSrc : ''} allowFullScreen></iframe>
            <button className='playAgain' onClick={props.playAgain}>Play Again</button>
        </div>
    )
}
