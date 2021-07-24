import React from 'react';

import { CardList } from './components/card-list/card-list-component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  // lifecycle method
  // fetch url response into json (promise)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>  this.setState({ monsters : users }));
  }
  
  render() {
    return (
      <div className="App">
        <CardList />
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
