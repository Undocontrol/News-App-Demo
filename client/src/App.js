/* This will be a class based component as it’ll basically serves 
as the wrapper component for every other component we’ll be creating subsequently:*/

import React from 'react';
import { Feed } from './Feed';
import { Search } from './Search'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      articles: [],
    };
  }

  updateNewsFeed = (articles) => {
    this.setState({ articles: articles })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h1>Welcome to the News Demo</h1>
        <Search onSearch={this.updateNewsFeed} />
        <Feed articles={this.state.articles} />
      </div>
    ) 
  }
}

export default App;