"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const homePage_1 = require("./components/homePage");
const DogDetailPage_1 = require("./components/DogDetail/DogDetailPage");
const aboutPage_1 = require("./components/about/aboutPage");
const SearchResultsPage_1 = require("./components/SearchResults/SearchResultsPage");
const header_1 = require("./components/common/header");
const footer_1 = require("./components/common/footer");
class App extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { id: 'App', className: 'container' },
            react_1.default.createElement(header_1.default, null),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: homePage_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/home", component: homePage_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/detail/:breed/:subBreed?", component: DogDetailPage_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/search/:breedTerm?/:searchTerm", component: SearchResultsPage_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/about", component: aboutPage_1.default }),
            react_1.default.createElement(footer_1.default, null)));
    }
}
exports.default = react_router_dom_1.withRouter(App);
//# sourceMappingURL=app.js.map