import React, { Component } from 'react';
import guid from '../../utils';
import Tag from '../Tag/Tag';

import './TagRenderer.css'

export default class TagRenderer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyPress(event) {
    const { value } = this.state;
    if ((value === '') && (event.key === 'Backspace')) {
      const { tags } = this.props;
      tags.splice(tags.length - 1, 1);
      this.props.onChange(tags)
    }
    if ((event.key === "Enter") && (value !== '')) {
      const { tags } = this.props;
      tags.push({id: guid(), text: this.state.value})
      this.setState({value: ''})
      this.props.onChange(tags)
    }
  }

  onDeleteButton(id) {
    const { tags } = this.props;
    const elem = tags.find(item => item.id === id )
    const elemId  = tags.indexOf(elem);
    tags.splice(elemId, 1)
    this.props.onChange(tags)
  }


  render() {
    return (
      <div className="Box">
        {this.props.tags.map(tag => <Tag key={tag.id} id={tag.id} text={tag.text} onDelete={this.onDeleteButton.bind(this)}/>)}
        <input className="input" type="text" onChange={this.handleChange.bind(this)} value={this.state.value} onKeyUp={this.handleKeyPress.bind(this)}/>
      </div>
    )
  }
}