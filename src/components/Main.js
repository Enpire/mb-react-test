/**
 * Created by enpire on 07/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../components/SearchForm';
import AlbumList from '../components/AlbumList';
import * as Actions from '../actions/Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetch from 'isomorphic-fetch';
import * as URL from '../constants/URL';


class Main extends Component {
  static propTypes = {
    isPerformingSearch: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  content(actions) {
    if (this.props.error !== null) {
      return <div>{this.props.error.toString()}</div>;
    }
    else if (this.props.isPerformingSearch) {
      return <div>Loading...</div>;
    }
    else return <AlbumList actions={actions}/>;
  }

  render() {
    const actions = bindActionCreators(Actions, this.props.dispatch);
    return (
      <div>
        <div>
          <SearchForm searchRequest={this.searchRequest.bind(this)}/>
          <button onClick={actions.showSaved}>Show saved</button>
        </div>
        {this.content(actions)}
      </div>
    );
  }

  showSaved() {
    this.props.dispatch(Actions.showSaved());
  }

  searchRequest(text) {
    this.props.dispatch(Actions.searchRequest(text));
    fetch(URL.searchAlbumUrl(text))
      .then(response => response.json())
      .then(json => this.props.dispatch(Actions.searchResult(this.parseSearchResult(json))))
      .catch(error => {
        this.props.dispatch(Actions.searchError(error));
      });
  }

  parseSearchResult(json) {
    return json.releases.map(data => ({
      id: data.id,
      title: data.title,
      date: data.date,
      tracks: data['track-count'],
      artist: data['artist-credit'].map(credit => credit.artist.name),
    }));
  }
}

export default connect(state => ({
  isPerformingSearch: state.actions.isPerformingSearch,
  error: state.actions.error,
}))(Main);