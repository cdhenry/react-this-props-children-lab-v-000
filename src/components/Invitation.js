// Code Invitation Component Here
import React from 'react'

export default class Invitation extends React.Component {
  render() {
    const invited = "You've been invited!"
    return (
      <div className="Invitation">
        <h1>{invited}</h1>
        {this.props.children}
      </div>
    );
  }
}
