"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("./actionTypes");
const services_1 = require("../services");
function searchSuccess(searchResults) {
    return { type: types.SEARCH_SUCCESS, searchResults };
}
exports.searchSuccess = searchSuccess;
function dogSearch(searchTerm, breedSearch) {
    return function (dispatch) {
        const searchResults = services_1.dogSearch(searchTerm, breedSearch);
        searchResults.then((data) => {
            return dispatch(searchSuccess(data));
        });
    };
}
exports.dogSearch = dogSearch;
//# sourceMappingURL=dogFinderActions.js.map