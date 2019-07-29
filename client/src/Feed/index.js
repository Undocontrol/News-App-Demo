import React from 'react';
import Button from 'react-bootstrap/Button';
import './Feed.css';

export class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headlines: [],
    };
  }

  getNewsHeadlines = async () => {
    const response = await fetch('http://localhost:8080/headlines');
    const headlines = await response.json();
    if (response.status !== 200) throw Error(headlines.message);
    return headlines; 
  };

  componentDidMount = async () => {
    // When component first mounts, get latest headlines and put them into the state
    const response = await this.getNewsHeadlines()
    this.setState({ headlines: response });
  }

  render() {
    let results = []
    //Either displays the latest headlines or search results
    // Props contains search results, whereas the state contains latest headlines
    this.props.articles.length ? results = this.props.articles : results = this.state.headlines

    const headlines = results.map((news, i) => (
      <div className="article" key={i}>
        <h1 className="title">{ news.title }</h1>
        <h3 className="author">{news.author}</h3>
        <img src = {news.urlToImage} />
        <p className="news-content">{ news.description}</p> 
        <button>
          <a href={news.url}>Read More</a>
        </button>
      </div>
    ));
    return  (
      <div id="headlines">{ headlines }</div>
    )
  }
}