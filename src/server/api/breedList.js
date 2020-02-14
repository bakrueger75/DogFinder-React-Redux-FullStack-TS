"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as config from 'config';
const fetchService_1 = require("../../utils/fetchService");
//import * as apicache from 'apicache';
//const cache = apicache.middleware;
exports.default = (router) => {
    router.use('/breedList', 
    //cache(config.get('apiCacheTime'), (req, res) => res.statusCode === 200),
    async (req, res) => {
        try {
            //const listUrl = config.get('apis.breedList'),
            const listUrl = 'https://dog.ceo/api/breeds/list', listService = new fetchService_1.FetchService({ url: listUrl });
            const breedList = await listService.getData();
            res.json({
                data: breedList
            });
        }
        catch (e) {
            console.log('Fetching Breed List - Error:', e);
        }
    });
};
//# sourceMappingURL=breedList.js.map