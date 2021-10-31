import {useDispatch, useSelector} from 'react-redux';

import {useState} from 'react';

const AddPhotoForm = () => {

    const dispatch = useDispatch();

    const [url, setUrl] = useState('');
    const [comment, setComment] = useState('');

    const changeUrl = (e) =>{
        setUrl(e.target.value)
    };

    const changeComment = (e) =>{
        setComment(e.target.value)
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_PHOTO', url: url, comment: comment});

    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter url" onChange={changeUrl}/>
            <input type="text" placeholder="enter comment" onChange={changeComment}/>
            <input type="submit" hidden/>
        </form>
    )
};

export default AddPhotoForm;