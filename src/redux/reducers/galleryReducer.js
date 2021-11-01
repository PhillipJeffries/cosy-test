import {picturesData} from '../../picturesData';

const initialState = {
    picturesData
}

export const galleryReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'EDIT_COMMENT':
         
            const {comment, id} = action;
            const {picturesData} = state;
            const itemIndex = picturesData.findIndex(res => res.id === id);
            const newPicturesData = [
                ...picturesData.slice(0, itemIndex),
                {url: picturesData[itemIndex].url, comment: comment, id: id},
                ...picturesData.slice(itemIndex+1)
            ]

            return{
                ...state,
                picturesData: newPicturesData
            }
        case 'ADD_PHOTO':
            
            
            const newLocalState = [
                {
                    id: action.id,
                    url: action.url,
                    comment: action.comment
                }
            ]
            return{
                ...state,
                picturesData: [...state.picturesData, ...newLocalState]

            }
        case 'DELETE_PHOTO':
            return(()=>{
                console.log('deletePhoto')
                const id = action.id;
               
                const {picturesData} = state;
                const itemIndex = picturesData.findIndex(res => res.id === id);
           
                const newPicturesData = [
                    ...picturesData.slice(0, itemIndex),
                    ...picturesData.slice(itemIndex+1)
                ];


                return{
                    ...state,
                    picturesData: newPicturesData
                }

            })();

            
        default:
            return state
    }
}

