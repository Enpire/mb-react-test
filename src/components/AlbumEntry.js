/**
 * Created by enpire on 07/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/main.sass'

export default class AlbumEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    isSaved: PropTypes.bool.isRequired,
    saveAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
  };

  action() {
    if (this.props.isSaved) {
      return  <button onClick={this.deleteAlbum.bind(this)}>
                Delete album
              </button>;
    }
    else {
      return  <button onClick={this.saveAlbum.bind(this)}>
                Save album
              </button>;
    }
  }

  render() {
    return <li>
      <div className="albumEntry">
        <div className="albumInfo">
          <h3>{this.props.data.title}</h3>
          <span>By {this.props.data.artist}, {this.props.data.date}</span>
        </div>
        <div className="albumActions">
          {this.action()}
        </div>
      </div>
    </li>;
  }

  deleteAlbum() {
    console.log(this);
    this.props.deleteAction(this.props.data.id);
  }

  saveAlbum() {
    console.log(this);
    this.props.saveAction(this.props.data.id, this.props.data);
  }
}