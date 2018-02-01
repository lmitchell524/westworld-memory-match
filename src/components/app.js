import React from 'react';
import '../assets/css/app.css';
import GameState from './game-state';
import Header from './header';

const App = () => (
    <div className="app">
        <div className='main'>
            <Header/>
            <GameState/>
            <div className='iris'></div>
        </div>
    </div>
);

export default App;
