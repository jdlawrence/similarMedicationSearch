import React, { Component } from 'react';

class SingleSearchResult extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.getAlternatives(this.props.result.rxcui);
  }
  render() {
    const { name, synonym } = this.props.result;
    return (
      <div className="single-search-result" >
        <button className="result-button">
          <div onClick={this.handleClick}>Name: <span>{name}</span></div>
        </button>
        <button className="result-button">
          <div onClick={this.handleClick}>Synonym: <span>{synonym}</span></div>
        </button>
      </div>
    );
  }
}


export default SingleSearchResult;
