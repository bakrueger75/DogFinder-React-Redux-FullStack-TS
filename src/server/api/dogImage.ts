import { Router } from 'express';
//import * as config from 'config';
import { FetchService } from '../../utils/fetchService';
//import * as apicache from 'apicache';

//const cache = apicache.middleware;

export default (router: Router) => {
    router.use('/dogImage/:breed/:subBreed?',
        //cache(config.get('imageApiCacheTime'), (req, res) => res.statusCode === 200),
        async (req, res) => {
        try {
            const { breed, subBreed } = req.params,
                subBreedUrl = (subBreed && subBreed.length > 0) && ("/" + subBreed),
                breedUrl = 'https://dog.ceo/api/breed/<BREED>/images/random'.replace('<BREED>', breed+subBreedUrl),
                //breedUrl = config.get('apis.dogImage').replace('<BREED>', breed+subBreedUrl),
                imageService = new FetchService({ url: breedUrl });

            const imageUrl = await imageService.getData();

            res.json({
                data: imageUrl
            })
        } catch (e) {
            console.log('Fetching Dog Image - Error:', e);
        }
    })
};