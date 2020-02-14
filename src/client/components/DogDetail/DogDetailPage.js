"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const DogImage_1 = require("../DogImage/DogImage");
const DogDetailTxt_1 = require("./DogDetailTxt");
const react_router_1 = require("react-router");
const react_redux_1 = require("react-redux");
require("./Component.scss");
class DogDetail extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            breed: '',
            subBreed: ''
        };
    }
    render() {
        return (react_1.default.createElement("div", { id: "dogDetail" },
            react_1.default.createElement("div", { className: "row justify-content-center" },
                react_1.default.createElement("div", { className: "row col-12 mt-2" },
                    react_1.default.createElement("div", { className: "col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12 justify-content-right text-center mb-4 mb-sm-4 mb-xs-4 mb-md-0" },
                        react_1.default.createElement(DogImage_1.default, { breed: this.state.breed, subBreed: this.state.subBreed })),
                    react_1.default.createElement("div", { className: "col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 justify-content-left align-top" },
                        react_1.default.createElement(DogDetailTxt_1.default, { breed: this.state.breed, subBreed: this.state.subBreed }))))));
    }
}
const mapStateToProps = (state, { match }) => {
    const { breed, subBreed } = match.params;
    return {
        breed: breed,
        subBreed: subBreed
    };
};
exports.default = react_router_1.withRouter(react_redux_1.connect(mapStateToProps)(DogDetail));
//# sourceMappingURL=DogDetailPage.js.map