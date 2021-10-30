import {combineReducers} from 'redux';

import {galleryReducer} from './galleryReducer';
import {sliderReducer} from './sliderReducer';



export const rootReducer = combineReducers({
    galleryReducer,
    sliderReducer
});