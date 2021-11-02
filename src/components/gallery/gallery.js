import './gallery.scss';
import CommentForm from '../commentForm/commentForm';
import {useDispatch, useSelector} from 'react-redux';


const Gallery = () => {
    const dispatch = useDispatch();   
    const galleryState = useSelector(state => state.galleryReducer.picturesData);
        

    const showPic = (e) => {
        dispatch({type: 'SHOW_SLIDER', hidden: false, index: +e.target.id+1})
    }

    const deletePhoto = (id) => dispatch({type: 'DELETE_PHOTO', id})


    return(
        <ul className="gallery-wrapper">
            {
                galleryState.map((el,i)=>{
                    return(
                        <li key={el.id} className="card-wrapper">
                            <div className='img-wrapper'>
                                <img id={i} onClick={showPic} alt={el.comment} src={el.url}/>
                                <button className="close-button" id={el.id} onClick={()=>deletePhoto(el.id)}>
                                    <svg   width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.43964 29.2319L27.9026 3.76902" stroke="#A70000" strokeWidth="4" strokeLinecap="round"/>
                                        <path d="M2.26807 2.93963L27.731 28.4025" stroke="#A70000" strokeWidth="4" strokeLinecap="round"/>
                                    </svg>
                                </button>
                                
                            </div>
                            <CommentForm data={el}/>
                            

                        </li>
                    )
                })
            }
        </ul>
    )
};

export default Gallery;








   
    

    
    
    
    



  

    
   
    
   

    


    
  





    
    
    
    

     
        
     
     


