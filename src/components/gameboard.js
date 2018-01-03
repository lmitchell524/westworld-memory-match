import React, {Component} from 'react';
import Card from './card';
import data from '../data/data';


class GameBoard extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: data,
            firstCard: null,
            secondCard: null,
            matchCounter: 0,
            attempts: 0,
            accuracy: 0,
            totalPossibleMatches: 9,
            gamesPlayed: 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.randomizeCards = this.randomizeCards.bind(this);
    }

    handleClick(index){
        const flippedState = this.state.data[index];
        let array = this.state.data;

        if(flippedState.clickable === true && this.state.firstCard === null) {
            flippedState.flipped = true;
            flippedState.clickable = false;
            this.state.firstCard = true;
            array[index] = flippedState;
        } else if (flippedState.clickable === true && this.state.secondCard === null){
            flippedState.flipped = true;
            flippedState.clickable = false;
            this.state.secondCard = true;
            array[index] = flippedState;
        }

        this.setState({
            data: array,
            attempts: this.state.attempts + 1
        });
        console.log(this.state.attempts);
    }

    canIClick(){

    }

    randomizeCards(){
        let cardArray = this.state.data;
        let j = 0, temp = null;

        for(let i = 0; i < cardArray.length; i++){
            j = Math.floor(Math.random() * (i+1));
            temp = cardArray[i];
            cardArray[i] = cardArray[j];
            cardArray[j] = temp;
        }
    }

    componentDidMount(){
        this.randomizeCards();
    }

    // canIClick(index){
    //     const {currentCardState} = this.state.data[index];
    //     if(currentCardState.clickable === true && firstCard === null || currentCardState.clickable === true && secondCard === null){
    //         currentCardState[index].flipped = true;
    //         currentCardState[index].clickable = false;
    //     }
    //
    //     this.setState({
    //         data: currentCardState
    //     });
    // }

    render(){
        const card = this.state.data.map((item, index) => {
            const currentCard = this.state.data[index];
            return <Card key={index} index={index} display={currentCard.flipped} clickCallBack={this.handleClick} color={currentCard.color}/>
        });
        return(
            <div className="gameContainer">
                <div className="statsContainer"></div>
                <div className="row">
                    {card}
                </div>
            </div>
        )
    }
}

export default GameBoard;
