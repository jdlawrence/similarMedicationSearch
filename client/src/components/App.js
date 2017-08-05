import React, { Component } from 'react';
import Header from './Header';
import InputForm from './InputForm';
import SearchResults from './SearchResults';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    };
    this.getMedMatches = this.getMedMatches.bind(this);
  }
  getMedMatches(medicine) {
    console.log('client', medicine);
    axios.post('/api', { medicine })
      .then(data => {
        let results = data.data.drugGroup.conceptGroup[1].conceptProperties;
        console.log('data', results);
        this.setState({searchResults: results});
        return results;
      })
      .catch(err => {
        console.log('errhwere', err);
      });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <InputForm getMedMatches={this.getMedMatches} />
        <SearchResults results={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;
