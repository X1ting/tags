import React, { Component } from 'react';
import './TagBox.css';

import TagRenderer from '../TagRenderer/TagRenderer';
import guid from '../../utils';



export default class TagBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tags: [
        {
          id: guid(),
          text: 'Example'
        }
      ]
    };
  }

  onChange(tags) {
    this.setState({ tags });
  }


  render() {
    return (
      <div className="TagList">
        <TagRenderer tags={this.state.tags} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}