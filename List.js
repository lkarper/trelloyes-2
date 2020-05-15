import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
    render() {
        const cardsArray = this.props.cardIds.map(cardId => {
            return (
                <Card
                    key={cardId}
                    title={this.props.allCards[cardId].title}
                    content={this.props.allCards[cardId].content}
                    onDelete={this.props.onDelete}
                    idToFind={this.props.idToFind}
                    cardIDToFind={cardId}
                ></Card>
            )
        });

        return (
            <section className='List'>
                <header className='List-header'>
                    <h2>{this.props.header}</h2>
                </header>
                <div className='List-cards'>
                    {cardsArray}
                    <button type='button' className='List-add-button' onClick={() => this.props.onRandom(this.props.idToFind)}>+ Add Random Card</button>
                </div>
            </section>
        );
    }
}

export default List;