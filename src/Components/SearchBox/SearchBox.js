import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchKeywords: '',
      resultData: [],
      frequency: 0
    };
  }
  onSearchChange = (e) => {
    // this.setState({ searchKeywords: e.target.value });
    e.preventDefault();
    let keyword = this.state.searchKeywords;
    const url = `http://www.recipepuppy.com/api/?i=${keyword}`;
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'text/html' }
      // mode:'no-cors'
    })
      // .then(response =>(response.json()))
      .then((response) => response.json())
      // .then(json =>this.state.resultData.push(json.results));
      .then((response) => {
        // console.log(response.results[0].ingredients.length);
        this.setState({
          frequency: response.results[0].ingredients.length,
          resultData: response.results
        });
      })
      .catch((err) => {
        console.log('keyword not found', err);
      });

    // .then(json =>this.setState({'resultData':this.state.resultData.push(json)}))
    console.log(this.state.resultData);
    console.log(this.state.frequency);
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    // this.props.onSearch(this.query.value);
    // e.currentTarget.reset();
    // console.log(this.state.searchKeywords);
  };
  render() {
    // console.log("result",this.state.resultData);
    return (
      <div className="search-container">
        <div className="search-box">
          <form className="form-container" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Keyword or ASIN"
              onChange={(event) =>
                this.setState({ searchKeywords: event.target.value })
              }
            />
            <button className="search-btn" onClick={this.onSearchChange}>
              PING
            </button>{' '}
          </form>
        </div>{' '}
        <section id="section10" className="demo">
          <a href="#author" className="author-path">
            <span></span>About SellerApp
          </a>
        </section>
      </div>
    );
  }
}
export default SearchBox;
