"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const DogSearchItem_1 = require("./DogSearchItem");
const dogFinderActions_1 = require("../../actions/dogFinderActions");
require("./Component.scss");
class SearchResultsPage extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            error: null,
            searchResults: null,
            breedSearch: false,
            searchTerm: null
        };
    }
    componentDidMount() {
        console.log("SEARCH PAGE - COMPONENT DID MOUNT");
        this.props.dogSearch(this.props.searchTerm, this.props.breedSearch);
    }
    render() {
        const searchResults = this.props.searchResults;
        if (searchResults != null && searchResults.dogCount && searchResults.dogCount > 0) {
            if (searchResults.dogCount === 1 && false) {
                return (react_1.default.createElement(react_router_dom_1.Redirect, { to: "/detail/" + searchResults.dogResults[0].breed + ((searchResults.dogResults[0].subBreed) ? "/" + searchResults.dogResults[0].subBreed : "") }));
            }
            else {
                // Render the search results
                let dogsLabel = "Dog";
                if (searchResults.dogCount > 1 || searchResults.dogCount === 0) {
                    dogsLabel = "Dogs";
                }
                return (react_1.default.createElement("div", { id: "dogSearchResults", className: "row w-100 p-2 justify-content-center" },
                    react_1.default.createElement("div", { id: "dogCount", className: "row w-100 justify-content-center mt-2" },
                        react_1.default.createElement("h4", null,
                            searchResults.dogCount,
                            " ",
                            dogsLabel,
                            " Found")),
                    react_1.default.createElement("div", { id: "searchTerm", className: "row w-100 justify-content-center mb-2 text-capitalize" },
                        searchResults.breedSearch ? "Breed: " : "Searched For: ",
                        " ",
                        searchResults.searchTerm),
                    react_1.default.createElement("div", { id: "dogResultsList", className: "row w-100 justify-content-center m-2" }, searchResults.dogResults.map((dogResult, index) => (react_1.default.createElement(DogSearchItem_1.default, { key: index, itemIndex: index, dog: dogResult, history: this.props.history })))),
                    react_1.default.createElement("div", { style: { clear: 'both' } })));
            }
        }
        else {
            // Render an empty div, no search results yet.
            return (react_1.default.createElement("div", { id: "dogSearchResults", className: "row w-100 p-2 justify-content-center dogSearchResults" },
                react_1.default.createElement("div", { id: "dogCount", className: "row w-100 justify-content-center mt-2" },
                    react_1.default.createElement("h4", null, "No Dogs Found.")),
                react_1.default.createElement("div", { id: "searchTerm", className: "row w-100 justify-content-center mb-2 text-capitalize" }, ((searchResults.searchTerm) ? "Searched For: " + searchResults.searchTerm : ""))));
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
            dispatch(dogFinderActions_1.dogSearch(searchTerm, breedSearch));
        }
    };
}
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage));
//# sourceMappingURL=SearchResultsPage.js.map