"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const breedListReducer_1 = require("./breedListReducer");
const searchResultsReducer_1 = require("./searchResultsReducer");
const rootReducer = redux_1.combineReducers({
    breedList: breedListReducer_1.default,
    searchResults: searchResultsReducer_1.default
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map