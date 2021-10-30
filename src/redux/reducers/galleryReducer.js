import {picturesData} from '../../picturesData';

const initialState = {
    picturesData
}

export const galleryReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'EDIT_COMMENT':
            console.log('editComment')
            
            return{
                ...state
            }
        default:
            return state
    }
}

