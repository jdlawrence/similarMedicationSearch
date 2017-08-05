import React, { Component } from 'react';
import Header from './Header';
import InputForm from './InputForm';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.getMedMatches = this.getMedMatches.bind(this);
  }
  getMedMatches(medicine) {
    console.log('client', medicine);
    axios.post('/api', { medicine })
      // axios.get('/api')
      .then((a, b, c) => {
        console.log('data', a, b, c);
      })
      .catch(err => {
        console.log('err', err);
      });
  }
  render() {
    return (
      <div>
        <Header />
        <InputForm getMedMatches={this.getMedMatches} />
      </div>
    );
  }
}

export default App;
