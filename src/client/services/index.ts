import { FetchService } from '../../utils/fetchService';
//import * as config from 'config';

const basePath = 'dogfinder';

export const getBreedList = () : any => {
    //const allBreedsService = new FetchService({ url:`${config.get('basePath')}/api/breedList` });
    const allBreedsService = new FetchService({ url:`${basePath}/api/breedList` });
    allBreedsService.getData().then((data) => {
        return data;
    });
};

export const dogSearch = async (searchTerm: string, breedSearch: boolean) => {
    //const dogSearchService = new FetchService({ url: `${config.get('basePath')}/api/dogSearch/${searchTerm}/${breedSearch}`});
    const dogSearchService = new FetchService({ url: `${basePath}/api/dogSearch/${searchTerm}/${breedSearch}`});
    return dogSearchService.getData();
};

export const getDogImage = async (breed: string, subBreed: boolean) => {
    //const dogImageService = new FetchService({ url: `${config.get('basePath')}/api/dogImage/${breed}/${subBreed}`});
    const dogImageService = new FetchService({ url: `${basePath}/api/dogImage/${breed}/${subBreed}`});
    return dogImageService.getData();
};

export const getDogDetails = async (breed: string, subBreed: boolean) => {
    //const dogImageService = new FetchService({ url: `${config.get('basePath')}/api/dogImage/${breed}/${subBreed}`});
    const dogImageService = new FetchService({ url: `${basePath}/api/dogImage/${breed}/${subBreed}`});
    return dogImageService.getData();
};