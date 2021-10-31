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
        case 'ADD_PHOTO':
            console.log('addPhoto', picturesData);
            const url = !action.url ? '' : action.url;
            const comment = !action.comment ? '' : action.comment;
            const newLocalState = [
                {
                    url: action.url,
                    comment: action.comment
                }
            ]
            return{
                ...state,
                picturesData: [...state.picturesData, ...newLocalState]

            }
        default:
            return state
    }
}

