import React, { Component } from 'react';

class SingleAlternative extends Component {
  render() {
    const { name, synonym } = this.props.alternative;
    return (
      <div className="single-alternative" >
        <div>{name}</div>
        <div>{synonym}</div>
      </div>
    );
  }
}


export default SingleAlternative ;
