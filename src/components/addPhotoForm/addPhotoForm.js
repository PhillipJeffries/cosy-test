import './addPhotoForm.scss';
import {useDispatch} from 'react-redux';
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_PHOTO', url: url, comment: comment, id: uniqid()});
        setUrl('');
        setComment('');
    };

    return(
        <form onSubmit={handleSubmit} className="add-photo-form">
            <div className="input-wrapper">
                <input type="text" placeholder="enter url" value={url} onChange={changeUrl}/>
                <input type="text" placeholder="enter comment" value={comment} onChange={changeComment}/>
            </div>
                <input type="submit" value="enter"/>
            <h4>press enter to add a new photo</h4>
        </form>
    )
};


export default AddPhotoForm;