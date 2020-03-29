import React, {Component} from 'react';
import List from './List';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  handleDeleteItem () {
    console.log('handle delete item called')
  }
  
  handleAddRandom () {
    console.log('handle add random called')
  }

  render () {
    const {store} = this.props
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