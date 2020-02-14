"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as config from 'config';
const fetchService_1 = require("../../utils/fetchService");
//import * as apicache from 'apicache';
//const cache = apicache.middleware;
exports.default = (router) => {
    router.get('/allBreeds', 
    //cache(config.get('apiCacheTime'), (req, res) => res.statusCode === 200),
    async (req, res) => {
        try {
            //const listUrl = config.get('apis.allBreeds'),
            const listUrl = 'https://dog.ceo/api/breeds/list/all', breedsService = new fetchService_1.FetchService({ url: listUrl });
            const allBreeds = await breedsService.getData(), dogBreeds = {};
            Object.keys(allBreeds).map((breedName) => {
                dogBreeds[breedName] = { breed: breedName, subBreed: '' };
                if (allBreeds[breedName].length > 0) {
                    allBreeds[breedName].map((subBreedName) => {
                        dogBreeds[subBreedName + ' ' + breedName] = { breed: breedName, subBreed: subBreedName };
                    });
                }
            });
            res.json({
                data: dogBreeds
            });
        }
        catch (e) {
            console.log('Fetching All Breeds - Error:', e);
        }
    });
};
//# sourceMappingURL=allBreeds.js.map