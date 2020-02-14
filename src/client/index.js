"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
require("./scss/styles.scss");
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("./app");
const configureStore_1 = require("./store/configureStore");
const store = configureStore_1.default();
ReactDOM.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(app_1.default, null))), document.getElementById('dog-finder-app'));
//# sourceMappingURL=index.js.map