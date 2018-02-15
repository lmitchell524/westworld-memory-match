import React from 'react';
import logo from '../assets/images/logo.png';

export default props => {

    const { level } = props;

    return(
        <div className="header">
            <img className={`logo ${ level === 2 ? 'logoLevel2' : '' }`} src={logo}/>
        </div>
    )
}
