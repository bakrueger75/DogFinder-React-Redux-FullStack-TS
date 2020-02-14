import { Router } from 'express';
import dogImage from '../api/dogImage';
import breedList from '../api/breedList';
import allBreeds from '../api/allBreeds';
import dogDetails from '../api/dogDetails';
import dogSearch from '../api/dogSearch';

const router = Router();

dogImage(router);
breedList(router);
allBreeds(router);
dogDetails(router);
dogSearch(router);

export default router;