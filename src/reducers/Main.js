/**
 * Created by enpire on 07/05/2017.
 */
import * as types from '../constants/ActionTypes';

const initialState = {
  isPerformingSearch: false,
  error: null,
  savedAlbumIds: [],
  savedAlbums: [],
  searchResult: [],
  showSaved: false,
};

export default function actions(state = initialState, action) {
  switch (action.type) {

    case types.SEARCH_REQUEST:
      return {
        ...state,
        isPerformingSearch: true,
        error: null,
        showSaved: false,
      };

    case types.SEARCH_RESULT:
      return {
        ...state,
        isPerformingSearch: false,
        error: null,
        searchResult: action.albumInfoList,
      };

    case types.SEARCH_ERROR:
      return {
        ...state,
        isPerformingSearch: false,
        error: action.error,
      };

    case types.SAVE_ALBUM:
      return {
        ...state,
        savedAlbumIds: state.savedAlbumIds.concat(action.albumId),
        savedAlbums: state.savedAlbums.concat([action.albumInfo]),
      };

    case types.DELETE_ALBUM:
      return {
        ...state,
        savedAlbums: state.savedAlbums.filter(album => album.id !== action.albumId),
        savedAlbumIds: state.savedAlbumIds.filter(entry => entry !== action.albumId),
      };

    case types.SHOW_SAVED:
      return {
        ...state,
        showSaved: true,
      };

    default:
      return state;
  }
}