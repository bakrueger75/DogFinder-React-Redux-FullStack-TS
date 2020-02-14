import { Router } from 'express';
//import * as config from 'config';
import { FetchService } from '../../utils/fetchService';
//import * as apicache from 'apicache';

//const cache = apicache.middleware;

export default (router: Router) => {
    router.use('/dogDetails/:breed/:subBreed?',
        //cache(config.get('apiCacheTime'), (req, res) => res.statusCode === 200),
        async (req, res) => {
        try {
            const { breed, subBreed } = req.params,
                wikiSearch = ((subBreed) ? subBreed + '%20' + breed: breed),
                //dogDetailService = new FetchService({ url: config.get('apis.dogDetails')+wikiSearch+"%20dog" });
                dogDetailService = new FetchService({ url: `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=search&srlimit=1&srsearch=${wikiSearch}%20dog` });

            const searchData = await dogDetailService.getData();
            const pageId = searchData.query.search[0].pageid,
                //dogDetailsExtractService = new FetchService({ url: config.get('apis.dogDetailsExtract')+pageId });
                dogDetailsExtractService = new FetchService({ url: `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&redirects=1&pageids=${pageId}` });

            // Using the pageId from the first search result, call wikipedia to get the summary extract.
            const dogExtract = await dogDetailsExtractService.getData();
            let dogDetails = {
                pageId: pageId,
                details: dogExtract.pages[pageId].extract
            };
            res.json({
                data: dogDetails
            })
        } catch (e) {
            console.log('Fetching Dog Details - Error:', e);
        }
    })
};