
import './gallery.scss';


import {useDispatch, useSelector} from 'react-redux';

import {useState} from 'react';




const Gallery = () => {

    const dispatch = useDispatch();

    const galleryState = useSelector(state => {
        console.log(state)
        const picturesData = state.galleryReducer.picturesData;
        return picturesData
    });
      
    const sliderOpenState = useSelector(state => {
        console.log(state.sliderReducer);
        const sliderOpenData = state.sliderReducer;
        return sliderOpenData
    })



    

    
    
     
      const [big, setBig] = useState(false);

      
    
    
    
    
      const showPic = (e) => {
        console.log(e.target)
        dispatch({type: 'SHOW_SLIDER', hidden: false, index: +e.target.id+1})
     }

     const overTargetClose = (e) => {
         if(e.target.classList.contains('big')){
             e.target.classList.remove('big');
             e.target.classList.add('small');
         }
     }
        
     
     
     return(
         <ul className="gallery-wrapper">
            {
                galleryState.map((el,i)=>{
                    return(
                        <li className="card-wrapper">
                        <div className='img-wrapper' onClick={overTargetClose}>
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
