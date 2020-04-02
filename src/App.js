import React, {Component} from 'react';
import List from './List';
import STORE from './store';
import './App.css';



class App extends Component {
  state = {
    store: STORE,
  }

  handleDeleteItem = (cardId, listId) => {
    console.log('handle delete item called', cardId, listId)
    let cloneStore = JSON.parse(JSON.stringify(this.state.store))
    cloneStore.lists.forEach((list) => {
      if (list.id == listId) {
        list.cardIds = list.cardIds.filter((id) => {
          return id != cardId
        })
      }
    })
    this.setState({ store: cloneStore })
  }
  
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  handleAddRandom = (listId) => {
    console.log('handle add random called')
    let cloneStore = JSON.parse(JSON.stringify(this.state.store))
    let newCard = this.newRandomCard()
    cloneStore.lists.forEach((list) => {
      if (list.id == listId) {
        list.cardIds.push(newCard.id)
      }
    })
    cloneStore.allCards[newCard.id] = newCard
    this.setState({ store: cloneStore })
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