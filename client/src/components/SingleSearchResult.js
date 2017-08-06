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
    const { rxcui, name, synonym } = this.props.result;
    return (
      <div className="single-search-result" onClick={this.handleClick}>
        <div>{name}</div>
        <div>{synonym}</div>
      </div>
    );
  }
}


export default SingleSearchResult;
