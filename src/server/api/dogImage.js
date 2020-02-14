"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as config from 'config';
const fetchService_1 = require("../../utils/fetchService");
//import * as apicache from 'apicache';
//const cache = apicache.middleware;
exports.default = (router) => {
    router.use('/dogImage/:breed/:subBreed?', 
    //cache(config.get('imageApiCacheTime'), (req, res) => res.statusCode === 200),
    async (req, res) => {
        try {
            const { breed, subBreed } = req.params, subBreedUrl = (subBreed && subBreed.length > 0) && ("/" + subBreed), breedUrl = 'https://dog.ceo/api/breed/<BREED>/images/random'.replace('<BREED>', breed + subBreedUrl), 
            //breedUrl = config.get('apis.dogImage').replace('<BREED>', breed+subBreedUrl),
            imageService = new fetchService_1.FetchService({ url: breedUrl });
            const imageUrl = await imageService.getData();
            res.json({
                data: imageUrl
            });
        }
        catch (e) {
            console.log('Fetching Dog Image - Error:', e);
        }
    });
};
//# sourceMappingURL=dogImage.js.map