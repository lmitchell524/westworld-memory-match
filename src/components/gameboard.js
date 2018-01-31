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
        this.blockClick = false;
    }

    componentDidMount(){
        this.setState({
            cards: this.randomizeCards(doubleArray(cardData))
        });
    }

    handleClick(index){
        if(this.blockClick === true) return;

        const { cards } = this.state;
        const currentCard = this.state.cards[index];
        let { firstCard, secondCard } = this.state;
        let matchCounter = this.state.matchCounter;
        let attempts = this.state.attempts;
        let cardIndex = null;

        if(!currentCard.flipped && firstCard === null) {
            cardIndex = index;

            this.flipCard(index);

        } else if (!currentCard.flipped && secondCard === null){
            this.blockClick = true;
            secondCard = index;
            const card1 = cards[firstCard].front;
            const card2 = cards[index].front;
            this.flipCard(index);
            attempts++;

            if( card1 === card2 ){
                matchCounter++;

                if( matchCounter === cards.length/2){
                    console.log('you won round 1');
                }

                this.blockClick = false;
            } else {
                setTimeout(() => {
                    this.flipCard(firstCard);
                    this.flipCard(index);
                    this.blockClick = false;
                    firstCard = null;
                }, 1000);
            }
        }

        this.setState({
            attempts: attempts,
            matchCounter: matchCounter,
            firstCard: cardIndex,
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

    render(){
        const {cards, matches, attempts} = this.state;

        const cardElements = cards.map((card, index) => {
            return <Card key={index} flipCard={() => this.handleClick(index)} card={card} />
        });
        return(
            <div className="gameContainer">
                <div className="row">
                    {cardElements}
                </div>
                <div className="statsContainer">

                </div>
            </div>
        )
    }
}

export default GameBoard;
