"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const services_1 = require("../../services");
const md_1 = require("react-icons/md");
const react_spinners_1 = require("react-spinners");
class DogImage extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            loading: false,
            imageUrl: null
        };
        this.fetchImage = (breed, subBreed) => {
            this.setState({
                loading: true
            });
            const dogImage = services_1.getDogImage(breed, subBreed);
            this.setState({
                imageUrl: (dogImage ? dogImage : '../images/notFound.jpg')
            });
        };
        this.componentDidMount = () => {
            this.fetchImage(this.props.breed, this.props.subBreed);
        };
        this.componentDidUpdate = (prevProps) => {
            if (prevProps.breed && prevProps.breed !== this.props.breed) {
                this.fetchImage(this.props.breed, this.props.subBreed);
            }
        };
        this.renderImage = () => (react_1.default.createElement("div", { style: { position: 'relative' } },
            react_1.default.createElement("img", { className: "dogResultImg", src: this.state.imageUrl, alt: this.props.breedName, onClick: this.props.onClick }),
            react_1.default.createElement("div", { title: "Click for another picture", style: { position: 'absolute', bottom: '0', right: '50%', cursor: 'pointer', color: 'yellow', font: '18px' }, onClick: () => { this.fetchImage(this.props.breed, this.props.subBreed); } },
                react_1.default.createElement(md_1.MdRefresh, { size: 24 }))));
        this.renderLoading = () => (react_1.default.createElement("div", { style: { position: 'relative' } },
            react_1.default.createElement(react_spinners_1.FadeLoader, { loading: this.state.loading })));
        this.render = () => {
            return this.state.loading ? this.renderLoading : this.renderImage;
        };
    }
}
exports.default = DogImage;
;
//# sourceMappingURL=DogImage.js.map