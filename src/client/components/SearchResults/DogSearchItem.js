"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const DogImage_1 = require("../DogImage/DogImage");
const md_1 = require("react-icons/md");
const DogSearchItem = ({ itemIndex, dog, history }) => {
    let detailUrl = "/detail/" + dog.breed + ((dog.subBreed) ? "/" + dog.subBreed : "");
    return (react_1.default.createElement("div", { id: "dogBreed_" + itemIndex, className: 'col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 justify-content-center text-center p-2', key: itemIndex, style: { cursor: 'pointer' } },
        react_1.default.createElement(DogImage_1.default, { breedName: dog.breedName, breed: dog.breed, subBreed: dog.subBreed, onClick: () => { history.push(detailUrl); } }),
        react_1.default.createElement("div", { id: "dogBreedName_" + itemIndex, onClick: () => { history.push(detailUrl); } },
            react_1.default.createElement("strong", { className: "text-capitalize text-red text-center" },
                dog.breedName,
                " ",
                react_1.default.createElement(md_1.MdInfoOutline, null)))));
};
exports.default = react_router_dom_1.withRouter(DogSearchItem);
//# sourceMappingURL=DogSearchItem.js.map