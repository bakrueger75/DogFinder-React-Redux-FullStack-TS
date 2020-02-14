"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
//import headerIcon from '../../images/dogfinder-icon.png'
const SearchForm_1 = require("./SearchForm");
require("./common.scss");
exports.default = () => (react_1.default.createElement("div", { id: "headerWidget", className: "mt-2 mb-2" },
    react_1.default.createElement("div", { className: "row" },
        react_1.default.createElement("div", { id: "headerIcon", className: "col-3 col-md-4 justify-content-right text-right" }),
        react_1.default.createElement("div", { className: "col-9 col-md-8" },
            react_1.default.createElement("div", { className: "col-12" },
                react_1.default.createElement("h2", { id: "font-red", className: "" }, "Dog Finder")),
            react_1.default.createElement("div", { className: "col-12" },
                react_1.default.createElement("div", { id: "navbar", className: "text-left align-bottom" },
                    react_1.default.createElement("nav", null,
                        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", activeClassName: "active" }, "Home"),
                        "  |  ",
                        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/about", activeClassName: "active" }, "About")))))),
    react_1.default.createElement("div", { className: "row mt-2" },
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement(SearchForm_1.default, null)))));
//# sourceMappingURL=header.js.map