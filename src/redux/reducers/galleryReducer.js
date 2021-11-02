import {picturesData} from '../../picturesData';




const setPicturesData = (data) => window.localStorage.setItem('picturesData', JSON.stringify(data))
const getPicturesData = () => JSON.parse(window.localStorage.getItem('picturesData'))

if(!getPicturesData()) {
    setPicturesData(picturesData)
}

console.log(getPicturesData());

const initialState = {
    picturesData: getPicturesData()
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
            ];

            setPicturesData(newPicturesData);
            console.log(newPicturesData);
            return{
                ...state,
                picturesData: newPicturesData
            }
        case 'ADD_PHOTO':
            return(()=>{
                const newPhotoData = [
                    {
                        id: action.id,
                        url: action.url,
                        comment: action.comment
                    }
                ];

                const newPicturesData = [
                    ...state.picturesData,
                    ...newPhotoData
                ];

                setPicturesData(newPicturesData);
    
                return{
                    ...state,
                    picturesData: newPicturesData
    
                }
            })();
            
            
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

                setPicturesData(newPicturesData);


                return{
                    ...state,
                    picturesData: newPicturesData
                }

            })();

            
        default:
            return state
    }
}

