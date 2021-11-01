import './addPhotoForm.scss';

import {useDispatch, useSelector} from 'react-redux';

import {useState} from 'react';

import uniqid from 'uniqid';

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
        dispatch({type: 'ADD_PHOTO', url: url, comment: comment, id: uniqid()});

    }


    return(
        <form onSubmit={handleSubmit} className="add-photo-form">
            <h4>press enter to add a new photo</h4>
            <div>
                <input type="text" placeholder="enter url" onChange={changeUrl}/>
                <input type="text" placeholder="enter comment" onChange={changeComment}/>
                <input type="submit" hidden/>
            </div>
        </form>
    )
};


export default AddPhotoForm;