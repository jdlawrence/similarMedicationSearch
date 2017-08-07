import React, { Component } from 'react';

class SingleAlternative extends Component {
  render() {
    const { name, synonym } = this.props.alternative;
    return (
      <div className="single-alternative" >
        <span>
          <div>Name: {name}</div>
        </span>
        <span>
          <div>Synonym: {synonym}</div>
        </span>
      </div>
    );
  }
}


export default SingleAlternative;
