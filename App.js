import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
  state = {
    STORE: {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }
  }

  handleDeleteCard = (idToFind, cardIDToFind) => {
    const listToEdit = this.state.STORE.lists.find(list => list.id === idToFind);
    const idToDelete = listToEdit.cardIds.findIndex(id => id === cardIDToFind);
    listToEdit.cardIds.splice(idToDelete, 1);
    const newLists = this.state.STORE.lists.filter(list => list.id !== idToFind)
    newLists.push(listToEdit);
    newLists.sort((a, b) => a.id - b.id);
    this.setState({
      STORE: {
        lists: newLists,
        allCards: this.state.STORE.allCards
      }
    });
  }

  handleAddRandom = (idToFind) => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    const newCard = newRandomCard();
    const newCardObject = {[newCard.id]: newCard};
    const listToEdit = this.state.STORE.lists.find(list => list.id === idToFind);
    listToEdit.cardIds.push(newCard.id);
    const newLists = this.state.STORE.lists.filter(list => list.id !== idToFind)
    newLists.push(listToEdit);
    newLists.sort((a, b) => a.id - b.id); 
    this.setState({
      STORE: {
        lists: newLists,
        allCards: {...this.state.STORE.allCards, ...newCardObject}
      }
    })
    console.log(this.state.STORE.allCards)


  }

  render() {
    console.log(this.state.STORE.lists)
    const cardsArray = this.state.STORE.lists.map(list => {
      return (<List
        key={list.id}
        idToFind={list.id}
        header={list.header}
        cardIds={list.cardIds}
        allCards={this.state.STORE.allCards}
        onDelete={this.handleDeleteCard}
        onRandom={this.handleAddRandom}
      ></List>)
    });

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {cardsArray}
        </div>
      </main>
    );
  }
}

export default App;