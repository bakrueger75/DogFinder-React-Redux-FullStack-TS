"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchService_1 = require("../../utils/fetchService");
//import * as config from 'config';
const basePath = 'dogfinder';
exports.getBreedList = () => {
    //const allBreedsService = new FetchService({ url:`${config.get('basePath')}/api/breedList` });
    const allBreedsService = new fetchService_1.FetchService({ url: `${basePath}/api/breedList` });
    allBreedsService.getData().then((data) => {
        return data;
    });
};
exports.dogSearch = async (searchTerm, breedSearch) => {
    //const dogSearchService = new FetchService({ url: `${config.get('basePath')}/api/dogSearch/${searchTerm}/${breedSearch}`});
    const dogSearchService = new fetchService_1.FetchService({ url: `${basePath}/api/dogSearch/${searchTerm}/${breedSearch}` });
    return dogSearchService.getData();
};
exports.getDogImage = async (breed, subBreed) => {
    //const dogImageService = new FetchService({ url: `${config.get('basePath')}/api/dogImage/${breed}/${subBreed}`});
    const dogImageService = new fetchService_1.FetchService({ url: `${basePath}/api/dogImage/${breed}/${subBreed}` });
    return dogImageService.getData();
};
exports.getDogDetails = async (breed, subBreed) => {
    //const dogImageService = new FetchService({ url: `${config.get('basePath')}/api/dogImage/${breed}/${subBreed}`});
    const dogImageService = new fetchService_1.FetchService({ url: `${basePath}/api/dogImage/${breed}/${subBreed}` });
    return dogImageService.getData();
};
//# sourceMappingURL=index.js.map