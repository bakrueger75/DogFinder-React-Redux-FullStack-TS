"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const services_1 = require("../../services");
class DogDetail extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            dogDetails: {
                pageId: 0,
                details: ''
            }
        };
        this.fetchDogDetails = (breed, subBreed) => {
            const dogDetails = services_1.getDogDetails(breed, subBreed);
            this.setState({
                dogDetails: dogDetails
            });
        };
    }
    componentDidMount() {
        this.fetchDogDetails(this.props.breed, this.props.subBreed);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.breed !== this.props.breed) {
            this.fetchDogDetails(this.props.breed, this.props.subBreed);
        }
    }
    render() {
        if (this.state.dogDetails.pageId === 0) {
            return (react_1.default.createElement("div", { id: "dogDetailTxt" }, "Loading"));
        }
        else {
            return (react_1.default.createElement("div", { id: "dogDetailTxt" },
                react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.dogDetails.details } }),
                react_1.default.createElement("div", null,
                    "For more information visit ",
                    react_1.default.createElement("a", { href: "http://en.wikipedia.org/?curid=" + this.state.dogDetails.pageId, target: "_blank" }, "Wikipedia"),
                    ".")));
        }
    }
}
exports.default = DogDetail;
//# sourceMappingURL=DogDetailTxt.js.map