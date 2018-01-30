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
        // this.randomizeCards = this.randomizeCards.bind(this);

    }

    handleClick(index){
        if(this.state.firstCard !== null && this.state.secondCard !== null){
            return;
        }

        const currentCard = this.state.data[index];
        let firstCard = this.state.firstCard;
        let matchCounter = this.state.matchCounter;
        let array = this.state.data;

        if(!currentCard.flipped && this.state.firstCard === null) {
            firstCard = currentCard;
            currentCard.flipped = true;
            this.state.firstCard = true;
            array[index] = currentCard;
        } else if (!currentCard.flipped && this.state.secondCard === null){
            currentCard.flipped = true;
            this.state.secondCard = true;
            array[index] = currentCard;
            if( firstCard.color === currentCard.color){
                matchCounter += 1;
                firstCard = null;
                this.state.secondCard = null;
            } else {
                setTimeout(function() {
                    firstCard.flipped = false;
                    currentCard.flipped = false;
                    console.log('firstCard', firstCard.flipped);
                }, 1000);
            }
        }

        this.setState({
            data: array,
            attempts: this.state.attempts + 1,
            matchCounter: matchCounter,
            firstCard: firstCard,
            secondCard: this.state.secondCard
        });
        console.log(this.state.attempts);
        console.log('matchCounter', matchCounter);
    }

    // randomizeCards(){
    //     let cardArray = this.state.data;
    //     let j = 0, temp = null;
    //
    //     for(let i = 0; i < cardArray.length; i++){
    //         j = Math.floor(Math.random() * (i+1));
    //         temp = cardArray[i];
    //         cardArray[i] = cardArray[j];
    //         cardArray[j] = temp;
    //     }
    // }

    // componentDidMount(){
    //     this.randomizeCards();
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
