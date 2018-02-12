import React from 'react';

export default Video => {

    const youTubeStyling = {
        width: "560px",
        height: "315px",
        frameborder: "0",
    }

    const videoSrc = 'https://www.youtube.com/embed/SxGPtCxxN64?rel=0&amp;controls=0&amp;showinfo=0;end=12';

    return(
        <div className='level1LoseScreen'>
            <iframe style={youTubeStyling} src={videoSrc} allowFullScreen></iframe>
            <button className='playAgain'>Play Again</button>
        </div>
    )
}
