import React, { Component } from 'react';
import Header from './Header';
import InputForm from './InputForm';
import SearchResults from './SearchResults';
import Alternatives from './Alternatives';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      alternatives: [],
      searchResults: []
    };
    this.getMedMatches = this.getMedMatches.bind(this);
    this.getAlternatives = this.getAlternatives.bind(this);
  }
  getAlternatives(rxcui) {
    axios.post('/api/lookup', { rxcui })
      .then(data => {
        let alternatives = data.data.relatedGroup.conceptGroup[0].conceptProperties;
        this.setState({ alternatives });
      })
      .catch(err => {
        console.log('errhwere', err);
      });
  }
  getMedMatches(medicine) {
    axios.post('/api/search', { medicine })
      .then(data => {
        let results = data.data.drugGroup.conceptGroup[1].conceptProperties;
        this.setState({ searchResults: results });
      })
      .catch(err => {
        console.log('errhwere', err);
      });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="left-column">
          <InputForm getMedMatches={this.getMedMatches} />
          <SearchResults
            getAlternatives={this.getAlternatives}
            results={this.state.searchResults}
          />
        </div>
        <div className="right-colum">
          <Alternatives
            alternatives={this.state.alternatives}
          />
        </div>
      </div>
    );
  }
}

export default App;
