import React, {Component} from 'react';
import List from './List';
import STORE from './store';
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends Component {
  state = {
    store: STORE,
  }

  handleDeleteItem = (cardId) => {
    console.log('handle delete item called')
    const { lists, allCards } = this.state.store;

  }
  
  handleAddRandom () {
    console.log('handle add random called')
  }

  render () {
    const {store} = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              onDeleteItem={this.handleDeleteItem}
              onAddRandom={this.handleAddRandom}
              id={list.id}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;