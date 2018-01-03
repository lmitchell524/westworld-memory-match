import React from 'react';
import '../assets/css/app.css';
import GameState from './game-state';
import Header from './header';

const App = () => (
    <div className="app">
        <Header/>
        <GameState/>
    </div>
);

export default App;
