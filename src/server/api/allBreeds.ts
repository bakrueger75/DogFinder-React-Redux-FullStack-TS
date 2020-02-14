import { Router } from 'express';
//import * as config from 'config';
import { FetchService } from '../../utils/fetchService';
//import * as apicache from 'apicache';

//const cache = apicache.middleware;

export default (router: Router) => {
    router.get('/allBreeds',
        //cache(config.get('apiCacheTime'), (req, res) => res.statusCode === 200),
        async (req, res) => {
        try {
            //const listUrl = config.get('apis.allBreeds'),
            const listUrl = 'https://dog.ceo/api/breeds/list/all',
                breedsService = new FetchService({ url: listUrl });

            const allBreeds = await breedsService.getData(),
                dogBreeds = {};

            Object.keys(allBreeds).map((breedName) => {
                dogBreeds[breedName] = {breed: breedName, subBreed: ''};
                if (allBreeds[breedName].length > 0) {
                    allBreeds[breedName].map((subBreedName) => {
                        dogBreeds[subBreedName + ' ' + breedName] = {breed: breedName, subBreed: subBreedName};
                    });
                }
            });

            res.json({
                data: dogBreeds
            })
        } catch (e) {
            console.log('Fetching All Breeds - Error:', e);
        }
    })
};