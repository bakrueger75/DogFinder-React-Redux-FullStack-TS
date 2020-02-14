import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import { getBreedList } from "../services";
import thunk from 'redux-thunk';

const getInitialState = () : any => {
  const breedList = getBreedList();
  initialState.breedList = breedList;
  return initialState;
};


export default function configureStore() {
  const initState = getInitialState();
  return createStore(
    rootReducer,
    initState,
    applyMiddleware(thunk)
  );
}
