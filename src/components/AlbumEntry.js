/**
 * Created by enpire on 07/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AlbumEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    isSaved: PropTypes.bool.isRequired,
    saveAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
  };

  render() {
    return <li>
      <h3>{this.props.data.title}</h3>
      <span>By {this.props.data.artist}, {this.props.data.date}</span>
      <button onClick={this.toggleSave.bind(this)}>
        Saved: {this.props.isSaved.toString()}
      </button>
    </li>;
  }

  toggleSave() {
    if (this.props.isSaved) {
      this.props.deleteAction(this.props.data.id);
    }
    else {
      this.props.saveAction(this.props.data.id, this.props.data);
    }
  }
}