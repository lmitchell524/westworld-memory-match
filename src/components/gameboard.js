import React, {Component} from 'react';
import Card from './card';
import { doubleArray, transition } from './helper';
import { cardData } from './card-data';
import Header from './header';
import cylinder from '../assets/images/level3/cylinder.png';

class GameBoard extends Component{
    constructor(props){
        super(props);

        this.state = {
            cards: [],
            firstCard: null,
            secondCard: null,
            matches: 0,
            attempts: 0,
            accuracy: 0,
            totalPossibleMatches: 9,
            level: 1
        }

        this.handleClick = this.handleClick.bind(this);
        this.randomizeCards = this.randomizeCards.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.blockClick = false;
    }

    componentDidMount(){
        this.setState({
            cards: this.randomizeCards(doubleArray(cardData(this.state.level)))
        });
    }

    handleClick(index){
        if(this.blockClick === true) return;

        const { cards} = this.state;
        const currentCard = this.state.cards[index];
        let { firstCard, secondCard, level, matches, attempts } = this.state;
        let cardIndex = null;
        let dolores = '/assets/images/bfe76d56eef65b611b72f9d26f0ceb9d.jpg';
        let manInBlack = '/assets/images/6df7f06e574dd016c2ff9d8c37b1519f.jpg';
        console.log(currentCard);

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

            if (attempts === 20){
                transition();
                console.log('too many shots fired, you lose!!!!');
            }

            if( card1 === card2 ){
                matches++;

                if( matches === cards.length/2){
                    transition(console.log('game over'));
                    setTimeout(() => {
                        level++;
                        this.setState({
                            level: level,
                            cards: this.randomizeCards(doubleArray(cardData(level))),
                            attempts: 0,
                            matches: 0,
                            firstCard: null,
                        })
                    }, 3500);
                }

                this.blockClick = false;

            } else if (card1 === dolores && card2 === manInBlack || card1 === manInBlack && card2 === dolores){
                console.log('you killed dolores, game over!!');
                transition();
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
            matches: matches,
            firstCard: cardIndex,
        });
    }

    flipCard(index) {
        const newCards = this.state.cards.slice();

        newCards[index].flipped = !newCards[index].flipped;

        this.setState({
            cards: newCards
        });

    }

    randomizeCards(cardArray){
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
        const {cards, matches, attempts, level} = this.state;
        const positionArr = [ 'one', 'two', 'three', 'four', 'five', 'six'];
        console.log('level', level);

        const cardElements = cards.map((card, index) => {
            return <Card key={index} flipCard={() => this.handleClick(index)} card={card} level={level} position={positionArr[index]}/>
        });
        return(
            <div className={`main ${ level === 2 ? 'level2' : '' } ${ level === 3 ? 'level3' : '' }`}>
                <Header/>
                    <div className={`gameContainer ${ level === 3 ? 'gameContainerLevel3' : '' }`}>
                            <div className={ level === 3 ? 'cylinderContainer' : ''}>
                                { level === 3 ? <img className='cylinder' src={cylinder}/> : '' }
                                { level === 3 ? cardElements : <div className="row">{cardElements}</div> }
                            </div>
                        <div className={`statsContainer ${ level === 2 ? 'statsContainerLevel2' : '' } ${ level === 3 ? 'statsContainerLevel3' : '' }`}>
                            <div className='stats'>Shots Fired: {attempts}</div>
                            <div className='stats'>Targets Hit: {matches > 0 ? Math.floor(matches/attempts * 100) + '%' : 0}</div>
                            <div className='stats'>Hosts Killed: {matches}</div>
                        </div>
                    </div>
                <div className='iris'></div>
            </div>
        )
    }
}

export default GameBoard;
