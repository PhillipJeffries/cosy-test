import {useState, useEffect} from 'react';

import { useDispatch } from 'react-redux';


const CommentForm = ({data}) => {

    const [commentText, setCommentText] = useState('');
    const {comment} = data;
    const dispatch = useDispatch();
    
    
    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch({type:'EDIT_COMMENT', comment: commentText, id: data.id})
    }


    useEffect(()=>{
        if(comment){
            setCommentText(comment)
        }
    }, [comment]);

    const handleInput = (e) => {
        setCommentText(e.target.value)
    };

    return(
        <form className="comment-form" onSubmit={handleUpdate}>
            <input onChange={handleInput}  value={commentText} className="comment"/>
            <input type="submit" hidden/>
        </form>
    )
}

export default CommentForm;
