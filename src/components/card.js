import React from 'react';

function Card (props) {

    function handleClick () {
        props.clickCallBack(props.index);
    }

    return (
        <div className="card" onClick={handleClick.bind(this)}>
            <div className="front" style={{backgroundColor: props.color, display: props.display ? 'block' : 'none'}}/>
            <div className="back" style={{display: props.display ? 'none' : 'block'}}/>
        </div>
    )
}

export default Card;
