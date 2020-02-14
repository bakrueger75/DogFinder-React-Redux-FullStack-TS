"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = require("../reducers");
const initialState_1 = require("../reducers/initialState");
const services_1 = require("../services");
const redux_thunk_1 = require("redux-thunk");
const getInitialState = () => {
    const breedList = services_1.getBreedList();
    initialState_1.default.breedList = breedList;
    return initialState_1.default;
};
function configureStore() {
    const initState = getInitialState();
    return redux_1.createStore(reducers_1.default, initState, redux_1.applyMiddleware(redux_thunk_1.default));
}
exports.default = configureStore;
//# sourceMappingURL=configureStore.js.map