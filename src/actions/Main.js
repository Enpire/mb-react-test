/**
 * Created by enpire on 07/05/2017.
 */
import * as types from '../constants/ActionTypes';

export function saveAlbum(id, info) {
  return {
    type: types.SAVE_ALBUM,
    albumId: id,
    albumInfo: info
  };
}

export function deleteAlbum(id) {
  return {
    type: types.DELETE_ALBUM,
    albumId: id
  };
}

export function searchRequest(query) {
  return {
    type: types.SEARCH_REQUEST,
    query: query
  };
}

export function searchResult(albumInfoList) {
  return {
    type: types.SEARCH_RESULT,
    albumInfoList: albumInfoList
  }
}

export function searchError(error) {
  return {
    type: types.SEARCH_ERROR,
    error: error
  }
}

export function showSaved() {
  return {
    type: types.SHOW_SAVED
  }
}
