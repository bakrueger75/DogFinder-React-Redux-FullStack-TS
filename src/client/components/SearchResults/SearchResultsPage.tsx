import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DogSearchItem from './DogSearchItem';
import { dogSearch } from "../../actions/dogFinderActions";
import './Component.scss';
import { SearchResults } from "../../../models/searchResults";

interface PropTypes {
	error: any,
	searchResults: SearchResults,
	breedSearch: boolean,
	searchTerm: string,
	history: any,
	dogSearch: any
}

class SearchResultsPage extends React.Component<PropTypes> {
	state = {
		error: null,
		searchResults: null,
		breedSearch: false,
		searchTerm: null
	};

	componentDidMount() {
console.log("SEARCH PAGE - COMPONENT DID MOUNT");
		this.props.dogSearch(this.props.searchTerm, this.props.breedSearch);
	}

  render() {
    const searchResults = this.props.searchResults;
    if (searchResults != null && searchResults.dogCount && searchResults.dogCount > 0) {
    	if (searchResults.dogCount === 1 && false) {
    		return (
    			<Redirect to={"/detail/" + searchResults.dogResults[0].breed + ((searchResults.dogResults[0].subBreed) ? "/" + searchResults.dogResults[0].subBreed : "")} />
			);
		} else {
			// Render the search results
			let dogsLabel = "Dog";
			if (searchResults.dogCount > 1 || searchResults.dogCount === 0) {
				dogsLabel = "Dogs";
			}
			return (
				<div id="dogSearchResults" className="row w-100 p-2 justify-content-center">
					<div id="dogCount" className="row w-100 justify-content-center mt-2">
						<h4>{searchResults.dogCount} {dogsLabel} Found</h4></div>
					<div id="searchTerm"
						 className="row w-100 justify-content-center mb-2 text-capitalize">{searchResults.breedSearch ? "Breed: " : "Searched For: "} {searchResults.searchTerm}</div>
					<div id="dogResultsList" className="row w-100 justify-content-center m-2">
						{searchResults.dogResults.map((dogResult, index) => (
							<DogSearchItem key={index} itemIndex={index} dog={dogResult} history={this.props.history}/>
						))}
					</div>
					<div style={{clear: 'both'}} />
				</div>
			);
		}
  	} else {
  		// Render an empty div, no search results yet.
  		return (
  		  <div id="dogSearchResults"  className="row w-100 p-2 justify-content-center dogSearchResults">
          <div id="dogCount" className="row w-100 justify-content-center mt-2"><h4>No Dogs Found.</h4></div>
          <div id="searchTerm" className="row w-100 justify-content-center mb-2 text-capitalize">{((searchResults.searchTerm) ? "Searched For: " + searchResults.searchTerm : "")}</div>
        </div>
  		);
  	}
  }
}

function mapStateToProps(state, { match }) {
	const { breedTerm, searchTerm } = match.params;
	const breedSearch = !!breedTerm;
	const searchResults = state.searchResults;
	if (breedTerm) {

	}
	console.log("breedTerm: " + breedTerm);
	console.log("searchTerm: " + searchTerm);
    return {
      searchResults,
	  breedSearch,
	  searchTerm
    };
}

function mapDispatchToProps(dispatch) {
	return {
		dogSearch: (searchTerm, breedSearch) => {
			dispatch(dogSearch(searchTerm, breedSearch));
		}
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage));
