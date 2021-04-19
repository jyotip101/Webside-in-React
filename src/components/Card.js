import React from 'react' 

import './Cards.css'

import CardItem from './CardItem'

function Card() {
    return(
        <div className="cards">
            <h1>Checkout the Episodes.</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                    <CardItem 
                        path='/'
                        label='Card 01'
                        text='This is the text for card 01'
                        src={require('../images/01.jpg').default}
                    />
                    <CardItem 
                        path='/'
                        label='Card 02'
                        text='This is the text for card 02'
                        src={require('../images/02.jpg').default}
                    />
                    <CardItem 
                        path='/'
                        label='Card 03'
                        text='This is the text for card 03'
                        src={require('../images/03.jpg').default}
                    />
                    <CardItem 
                        path='/'
                        label='Card 04'
                        text='This is the text for card 04'
                        src={require('../images/04.jpg').default}
                    />
                    <CardItem 
                        path='/'
                        label='Card 05'
                        text='This is the text for card 05'
                        src={require('../images/05.jpg').default}
                    />
                    <CardItem 
                        path='/'
                        label='Card 06'
                        text='This is the text for card 06'
                        src={require('../images/06.jpg').default}
                    />
                    <CardItem 
                        path='/'
                        label='Card 07'
                        text='This is the text for card 07'
                        src={require('../images/07.jpg').default}
                    />
                    <CardItem 
                        path='/'
                        label='Card 08'
                        text='This is the text for card 08'
                        src={require('../images/08.jpg').default}
                    />
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card