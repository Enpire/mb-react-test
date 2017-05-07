/**
 * Created by enpire on 07/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: this.props.value || '',
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          autoFocus="true"
          placeholder="Name of album to find"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}/>
        <button onClick={this.onButton.bind(this)}>
          Find!
        </button>
      </div>
    );
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onKeyDown(event) {
    if (event.which === 13) {
      this.props.searchRequest(event.target.value.trim());
    }
  }

  onButton() {
    this.props.searchRequest(this.state.value.trim());
  }
}