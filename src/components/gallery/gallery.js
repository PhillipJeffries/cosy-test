
import './gallery.scss';

import CommentForm from '../commentForm/commentForm';

import {useDispatch, useSelector} from 'react-redux';

import {useEffect, useState} from 'react';





const Gallery = () => {

    const dispatch = useDispatch();   



    const galleryState = useSelector(state => {
        
        const Data = state.galleryReducer.picturesData;
        
        return Data
    });

   
    

    
    const [state, setState] = useState(galleryState);

    useEffect(()=>{
        
        setState(galleryState)
    }, [galleryState])

    
    
    

    const showPic = (e) => {
        dispatch({type: 'SHOW_SLIDER', hidden: false, index: +e.target.id+1})
    }


  

    
    const CloseButton = ({id, classname, onClick}) => {
        return (
            <svg id={id} onClick={onClick} className={classname} width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.43964 29.2319L27.9026 3.76902" stroke="#A70000" stroke-width="4" stroke-linecap="round"/>
                <path d="M2.26807 2.93963L27.731 28.4025" stroke="#A70000" stroke-width="4" stroke-linecap="round"/>
            </svg>
        )

    }
    
    const deletePhoto = (e) => {
        dispatch({type: 'DELETE_PHOTO', id: e.target.id})
    }
   

    


    
  
    return(
        <ul className="gallery-wrapper">
            {
                state.map((el,i)=>{
                    return(
                        <li key={el.id} className="card-wrapper">
                            <div className='img-wrapper'>
                                <img id={i} onClick={showPic} alt={el.comment} src={el.url}/>
                                <CloseButton id={el.id} onClick={deletePhoto} classname="close-button"/>
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
