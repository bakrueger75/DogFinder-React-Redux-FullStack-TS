import * as types from './actionTypes';
import { dogSearch as dogSearchService } from '../services';
//import { SearchResults } from "../../models/searchResults";

interface SearchResults {
  dogCount: number,
  searchTerm: string,
  breedSearch: boolean,
  dogResults: any[]
}

export function searchSuccess(searchResults: SearchResults) {
  return {type: types.SEARCH_SUCCESS, searchResults};
}

export function dogSearch(searchTerm: string, breedSearch: boolean) {
  return function(dispatch) {
    const searchResults = dogSearchService(searchTerm, breedSearch);
    searchResults.then( (data) => {
      return dispatch(searchSuccess(data));
    })
  };
}
