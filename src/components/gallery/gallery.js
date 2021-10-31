
import './gallery.scss';


import {useDispatch, useSelector} from 'react-redux';

import {useEffect, useState} from 'react';

import uniqid from 'uniqid';




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


    const [commentText, setCommentText] = useState('');
    const [commentId, setCommentId] = useState('');

    const onChangeComment = (e) => {
        setCommentText(e.target.value);
        setCommentId(e.target.id);
        e.target.value= commentText;
        console.log(commentText, commentId)
    }

    const changeComment = (e) => {
        e.preventDefault();
        console.log('changeComment')
        dispatch({type: 'EDIT_COMMENT', id: commentId, comment: commentText})
    }


    useEffect(() =>{
        if(commentText){
            setCommentText(commentText);
        }
    },[commentText])


  
    return(
        <ul className="gallery-wrapper">
            {
                state.map((el,i)=>{
                    return(
                        <li className="card-wrapper">
                            <div className='img-wrapper'>
                                <img id={i} onClick={showPic} alt={el.comment} src={`${process.env.PUBLIC_URL}${el.url}`}/>
                            </div>
                            <form className="comment-form" onSubmit={changeComment}>
                                <input id={el.id} onChange={onChangeComment}  value={el.comment} className="comment" onClick={(e)=>console.log(e.target)}/>
                                <input type="submit" hidden/>
                            </form>
                            

                        </li>
                    )
                })
            }
        </ul>
    )
};
    
    
    
    

     
        
     
     


export default Gallery;
