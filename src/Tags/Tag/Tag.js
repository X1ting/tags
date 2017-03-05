import React, { Component } from 'react';
import './Tag.css'

export default class Tag extends Component {

  render() {
    return (
      <div className="Tag">
        <span>{this.props.text}</span>
        <span onClick={() => this.props.onDelete(this.props.id)} className="close">×</span>
      </div>
    )
  }
}