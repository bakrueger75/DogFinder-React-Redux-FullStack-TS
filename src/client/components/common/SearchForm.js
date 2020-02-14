"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
//import spinnerImage from '../../images/spinner-gif-17.gif';
//import * as dogFinderActions from '../../actions/dogFinderActions';
const md_1 = require("react-icons/md");
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
require("./common.scss");
const react_spinners_1 = require("react-spinners");
class SearchForm extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            error: null,
            searchLoading: false,
            dogSearchTerm: null,
            breedList: null
        };
        this.dogSearch = (searchTerm, breedSearch) => {
            this.props.history.push('/search/' + (breedSearch ? "breed/" : "") + searchTerm);
        };
        this.breedSelected = (e) => {
            this.dogSearch(e.target.value, true);
        };
        this.dogSearchKeyup = (e) => {
            if (e.key === "Enter") {
                this.dogSearch(e.target.value, false);
            }
        };
        this.handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
        };
        this.dogSearchClick = () => {
            this.dogSearch(this.state.dogSearchTerm, false);
        };
    }
    render() {
        const { breedList } = this.props;
        if (this.state.error) {
            return (react_1.default.createElement("div", { id: "dogSearchForm", className: "row justify-content-left text-danger m-4" }, "Failed to load, please try again later."));
        }
        else if (this.props.breedList.length === 0 || this.state.searchLoading) {
            return (react_1.default.createElement("div", { id: "dogSearchForm", className: "row justify-content-center text-center" },
                react_1.default.createElement(react_spinners_1.FadeLoader, null)));
        }
        else {
            return (react_1.default.createElement("div", { id: "dogSearchForm", className: "form-row align-items-center justify-content-center mt-2" },
                react_1.default.createElement("div", { className: "col-12 col-md-3 justify-content-right" },
                    react_1.default.createElement("select", { className: "form-control text-capitalize", id: "breedList", onChange: this.breedSelected, ref: "breedList" },
                        react_1.default.createElement("option", { className: "text-capitalize", value: "" }, "Choose a Breed"),
                        breedList.map((breed, index) => (react_1.default.createElement("option", { className: "text-capitalize", key: index, value: breed }, breed))))),
                react_1.default.createElement("div", { className: "col-12 col-md-1 p-md-1 p-2 justify-content-center text-center font-weight-bold" }, "OR"),
                react_1.default.createElement("div", { className: "col-12 col-md-3 justify-content-left" },
                    react_1.default.createElement("div", { className: "input-group" },
                        react_1.default.createElement("input", { className: "form-control", name: "dogSearchTerm", id: "dogSearchTerm", placeholder: "Search for a dog", type: "input", ref: "dogSearchTerm", onChange: this.handleChange, onKeyUp: this.dogSearchKeyup }),
                        react_1.default.createElement("div", { className: "input-group-append", style: { cursor: 'pointer' } },
                            react_1.default.createElement("div", { className: "input-group-text" },
                                react_1.default.createElement(md_1.MdSearch, { onClick: this.dogSearchClick })))))));
        }
    }
}
//
// SearchForm.contextTypes = {
//   router: PropTypes.object
// };
function mapStateToProps(state, ownProps) {
    return {
        breedList: state.breedList
    };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(dogFinderActions, dispatch)
//   };
// }
exports.default = react_router_1.withRouter(react_redux_1.connect(mapStateToProps, null)(SearchForm));
//# sourceMappingURL=SearchForm.js.map