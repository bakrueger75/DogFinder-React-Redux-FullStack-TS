import { Router } from 'express';
//import * as config from 'config';
import { FetchService } from '../../utils/fetchService';
//import * as apicache from 'apicache';

//const cache = apicache.middleware;

export default (router: Router) => {
    router.use('/breedList',
        //cache(config.get('apiCacheTime'), (req, res) => res.statusCode === 200),
        async (req, res) => {
        try {
            //const listUrl = config.get('apis.breedList'),
            const listUrl = 'https://dog.ceo/api/breeds/list',
                listService = new FetchService({ url: listUrl });

            const breedList = await listService.getData();

            res.json({
                data: breedList
            })
        } catch (e) {
            console.log('Fetching Breed List - Error:', e);
        }
    })
};