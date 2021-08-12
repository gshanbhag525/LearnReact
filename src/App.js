import React from 'react'

import { CardList } from './components/card-list/card-list-component';

import { SearchBox } from './components/search-box/search-box.component';

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
    .then(users => this.setState({ monsters : users }));
  }

  handleChange = (e) => {
    // e is a synthetic event
    this.setState({ searchField: e.target.value })
    // cant get "this" into scope so put it in constructor
  }

  render() {
    const { monsters, searchField } = this.state;
    // equivalent to 
    // const monsters = this.state.monsters;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    // when state is changed due to search
    // searchField is set and the app is re-rendered by filtering 
    // the monsters array and then updating the cardList
    return (
      <div className="App">
        <h1 id="webPageHeading">Cats in Tech</h1>
        <SearchBox 
          placeholder='Search those who exist'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />       
      </div>
    );
  }
}

export default App;
