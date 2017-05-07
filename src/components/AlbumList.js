/**
 * Created by enpire on 07/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AlbumEntry from './AlbumEntry';


class AlbumList extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    savedAlbumIds: PropTypes.array.isRequired,
  };


  render() {

    const children = this.props.list.map((data) => {
      return (<AlbumEntry
        key={data.id}
        data={data}
        saveAction={this.props.actions.saveAlbum}
        deleteAction={this.props.actions.deleteAlbum}
        isSaved={this.props.savedAlbumIds.indexOf(data.id) >= 0}/>);
    });
    return <ul>
      {children}
    </ul>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    list: state.actions.showSaved ? state.actions.savedAlbums : state.actions.searchResult,
    savedAlbumIds: state.actions.savedAlbumIds,
  };
}

export default connect(mapStateToProps)(AlbumList);