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
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep1.jpg').default}
                    />
                    <CardItem 
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep2.jpg').default}
                    />
                    <CardItem 
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep3.jpg').default}
                    />
                    <CardItem 
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep4.jpg').default}
                    />
                    <CardItem 
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep5.jpg').default}
                    />
                    <CardItem 
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep6.jpg').default}
                    />
                    <CardItem 
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep7.jpg').default}
                    />
                    <CardItem 
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep8.jpg').default}
                    />
                    <CardItem 
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep9.jpg').default}
                    />
                    <CardItem 
                        path='/cast'
                        label='label'
                        text='this is text from card'
                        src={require('../images/ep10.jpg').default}
                    />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card