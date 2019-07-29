import React from 'react';
import { Feed } from '../Feed';
import { Search } from '../Search'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // This is a placeholder for articles retrieved from search
      articles: [],
    };
  }

  updateNewsFeed = (articles) => {
    // When search results come back, pass them into the feed
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