import React from 'react'

import { CardList } from './components/card-list/card-list-component';

import './App.css';

class App extends React. Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // lifecycle method
  // fetch url response into json (promise)
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/gshanbhag525/cat-json/users')
    .then(response => response.json())
    .then(users =>  this.setState({ monsters : users }));
  }
  
  render() {
    return (
      <div className="App">
        <input 
          type='search' 
          placeholder='search those who exist' 
        onChange={e => {
          this.setState({ searchField: e.target.value });
          console.log(this.state);
          }}
          />
        <CardList  monsters={this.state.monsters}/>
          
      </div>
    );
  }
}

export default App;
