import React, { Component } from 'react';

class SingleAlternative extends Component {
  constructor() {
    super();
  }
  render() {
    console.log('props', this.props);
    const { rxcui, name, synonym } = this.props.alternative;
    return (
      <div className="single-alternative" >
        <div>{name}</div>
        <div>{synonym}</div>
      </div>
    );
  }
}


export default SingleAlternative ;
