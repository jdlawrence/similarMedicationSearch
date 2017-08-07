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
      searchResults: [],
      errorInSearch: false
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
        console.log('error', err);
      });
  }
  getMedMatches(medicine) {
    axios.post('/api/search', { medicine })
      .then(data => {
        let results = data.data.drugGroup.conceptGroup[1].conceptProperties;
        this.setState({
          searchResults: results,
          errorInSearch: false,
          alternatives: []
        });
      })
      .catch(err => {
        console.log('error in search', err);
        this.setState({
          errorInSearch: true,
          alternatives: []
        });
      });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="column-wrapper">
          <div className="left-column">
            <InputForm getMedMatches={this.getMedMatches} />
            <SearchResults
              errorInSearch={this.state.errorInSearch}
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
      </div>
    );
  }
}

export default App;
