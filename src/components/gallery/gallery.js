
import './gallery.scss';


import {useDispatch, useSelector} from 'react-redux';

import {useEffect, useState} from 'react';




const Gallery = () => {

    const dispatch = useDispatch();   



    const galleryState = useSelector(state => {
        
        const Data = state.galleryReducer.picturesData;
        //localStorage.setItem('state', JSON.stringify(Data));
        
        return Data
    });

   
    

    
    const [state, setState] = useState(galleryState);

    useEffect(()=>{
        
        setState(galleryState)
    }, [galleryState])

    
    
    

    const showPic = (e) => {
        dispatch({type: 'SHOW_SLIDER', hidden: false, index: +e.target.id+1})
    }
  
    return(
        <ul className="gallery-wrapper">
            {
                state.map((el,i)=>{
                    return(
                        <li className="card-wrapper">
                            <div className='img-wrapper'>
                                <img id={i} onClick={showPic} alt={el.comment} src={`${process.env.PUBLIC_URL}${el.url}`}/>
                            </div>
                            
                            <input  value={el.comment} className="comment" onClick={(e)=>console.log(e.target)}/>
                            

                        </li>
                    )
                })
            }
        </ul>
    )
};
    
    
    
    

     
        
     
     


export default Gallery;
