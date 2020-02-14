"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as config from 'config';
const fetchService_1 = require("../../utils/fetchService");
//import * as apicache from 'apicache';
//const cache = apicache.middleware;
exports.default = (router) => {
    router.use('/dogImage/:searchTeram/:breedSearch?', 
    //cache(config.get('imageApiCacheTime'), (req: any, res: any) => res.statusCode === 200),
    async (req, res) => {
        const { searchTerm, breedSearch } = req.params, searchResults = {
            "dogCount": 0,
            "searchTerm": searchTerm,
            "breedSearch": Boolean(breedSearch),
            "dogResults": []
        };
        try {
            //const allBreedsService = new FetchService({url: `/${config.get('basePath')}/api/allBreeds`}),
            const allBreedsService = new fetchService_1.FetchService({ url: `/dogfinder/api/allBreeds` }), allBreeds = await allBreedsService.getData();
            if (allBreeds != null && searchTerm != null && searchTerm.length > 0) {
                let dogMatches = [];
                let matchCount = 0;
                let breedList = Object.keys(allBreeds);
                let searchTerms = decodeURI(searchTerm.toLowerCase()).split(" ");
                let searchMatches = [...breedList.filter(dogBreed => {
                        let termCount = 0;
                        searchTerms.forEach((searchTerm) => {
                            if (dogBreed.indexOf(searchTerm) >= 0) {
                                termCount++;
                            }
                        });
                        // Only filter the result if the breedName has a match on all of the search terms.
                        return (termCount === searchTerms.length);
                    })];
                if (searchMatches.length > 0) {
                    searchMatches.forEach((breedName) => {
                        matchCount++;
                        let dogMatch = {
                            "breed": allBreeds[breedName].breed,
                            "breedName": breedName,
                            "subBreed": allBreeds[breedName].subBreed
                        };
                        dogMatches.push(dogMatch);
                    });
                }
                searchResults.dogCount = matchCount;
                searchResults.searchTerm = searchTerm;
                searchResults.breedSearch = Boolean(breedSearch);
                if (dogMatches.length > 0) {
                    // Sort the dog results alphabetically by breedName
                    dogMatches.sort((a, b) => {
                        if (a.breedName < b.breedName)
                            return -1;
                        if (a.breedName > b.breedName)
                            return 1;
                        return 0;
                    });
                    searchResults.dogResults = dogMatches;
                }
                else {
                    searchResults.dogResults = [];
                }
            } // performDogSearch
        }
        catch (e) {
            console.log('Failed Dog Search: ', e);
        }
        res.json({
            data: searchResults
        });
    });
};
//# sourceMappingURL=dogSearch.js.map