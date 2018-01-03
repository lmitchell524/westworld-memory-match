import React, {Component} from 'react';
import GameBoard from './gameboard';

class GameState extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstCard: null,
            secondCard: null,
            matchCounter: 0,
            attempts: 0,
            accuracy: 0,
            totalPossibleMatches: 9,
            gamesPlayed: 0
        }
    }

    render(){

        return(
            <GameBoard/>
        )
    }
}

export default GameState;