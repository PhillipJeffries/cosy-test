import {picturesData} from '../../picturesData';

const initialState = {
    picturesData
}

export const galleryReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'EDIT_COMMENT':
            console.log('editComment')
            // const id = action.id;
            // const newComment = action.comment
            // const {oldData} = state;
            // const itemIndex = picturesData.findIndex(res => res.id === action.id);            
            
            const arr = [];
            picturesData.forEach(elem =>{
                if(elem.id===action.id){
                    elem.comment = action.comment;
                    arr.push(elem);
                }

            })

            

            return{
                ...state,
                picturesData: arr
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

