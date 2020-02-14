"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("../actions/actionTypes");
const initialState_1 = require("./initialState");
function breedListReducer(state = initialState_1.default.breedList, action) {
    switch (action.type) {
        case types.BREED_LIST_LOADED:
            return action.breedList;
        default:
            return state;
    }
}
exports.default = breedListReducer;
//# sourceMappingURL=breedListReducer.js.map