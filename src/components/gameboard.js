import React, {Component} from 'react';
import Card from './card';
import { doubleArray } from './helper';
import cardData from '../data/card-data';


class GameBoard extends Component{
    constructor(props){
        super(props);

        this.state = {
            cards: [],
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
        this.flipCard = this.flipCard.bind(this);

    }

    handleClick(index){
        if(this.state.firstCard !== null && this.state.secondCard !== null){
            return;
        }
        const { cards } = this.state;
        const currentCard = this.state.cards[index];
        let { firstCard, secondCard } = this.state;
        let matchCounter = this.state.matchCounter;
        let attempts = this.state.attempts;
        // let array = this.state.data;

        if(!currentCard.flipped && this.state.firstCard === null) {
            firstCard = index;

            this.flipCard(index);
            // currentCard.flipped = true;
            // this.state.firstCard = true;
            // array[index] = currentCard;
        } else if (!currentCard.flipped && this.state.secondCard === null){
            // currentCard.flipped = true;
            // this.state.secondCard = true;
            debugger;
            const card1 = cards[firstCard].front;
            const card2 = cards[index].front;
            console.log('card 2', card2);
            console.log('card 1', card1);
            this.flipCard(index);
            attempts + 1;
            // array[index] = currentCard;
            if( card1 === card2 ){
                matchCounter += 1;

                if( matchCounter === cards.length/2){
                    console.log('you won round 1');
                }

                firstCard = null;
                secondCard = null;
            } else {
                setTimeout(function() {
                    this.flipCard(firstCard);
                    this.flipCard(secondCard);
                    firstCard = null;
                    secondCard = null;
                }, 1000);
            }
        }

        this.setState({
            attempts: attempts,
            matchCounter: matchCounter,
            firstCard: firstCard,
            secondCard: secondCard
        });
        console.log(this.state.attempts);
        console.log('matchCounter', matchCounter);
    }

    flipCard(index) {
        const newCards = this.state.cards.slice();

        newCards[index].flipped = !newCards[index].flipped;
        //toggles to opposite of what it was

        this.setState({
            cards: newCards
        });

    }

    randomizeCards(cardArray){
        // let cardArray = this.state.cards;
        let j = 0, temp = null;

        for(let i = 0; i < cardArray.length; i++){
            j = Math.floor(Math.random() * (i+1));
            temp = cardArray[i];
            cardArray[i] = cardArray[j];
            cardArray[j] = temp;
        }
        return cardArray;
    }


    // componentDidMount(){
    //     this.randomizeCards();
    // }

    componentDidMount(){
        this.setState({
            cards: this.randomizeCards(doubleArray(cardData))
        });
    }

    render(){
        const {cards, matches, attempts} = this.state;

        const cardElements = cards.map((card, index) => {
            return <Card key={index} flipCard={() => this.handleClick(index)} card={card} />
        });
        return(
            <div className="app">
                <div className="statsContainer"></div>
                <div className="game-board">
                    {cardElements}
                </div>
            </div>
        )
    }
}

export default GameBoard;
