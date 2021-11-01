//import {picturesData} from '../../picturesData';

const initialState = {
    hidden: true,
    index: 1
}

export const sliderReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SHOW_SLIDER':
           
            
            return{
                ...state,
                hidden: action.hidden,
                index: action.index
            }
        default:
            return state
    }
}

