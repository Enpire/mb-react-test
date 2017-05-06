/**
 * Created by enpire on 07/05/2017.
 */
const MUSiC_BRAINZ_API = 'http://musicbrainz.org/ws/2/';
const ALBUM_SEARCH_URI = 'release/?fmt=json&query=release:';

export function searchAlbumUrl(text) {
  return MUSiC_BRAINZ_API + ALBUM_SEARCH_URI + encodeURIComponent(text);
}