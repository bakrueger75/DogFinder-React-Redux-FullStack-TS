"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("../actions/actionTypes");
const initialState_1 = require("./initialState");
function searchResultsReducer(state = initialState_1.default.searchResults, action) {
    switch (action.type) {
        case types.SEARCH_SUCCESS:
            return action.searchResults;
        default:
            return state;
    }
}
exports.default = searchResultsReducer;
//# sourceMappingURL=searchResultsReducer.js.map