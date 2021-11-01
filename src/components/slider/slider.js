
import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import './slider.scss';








const Slider = ({i}) => {

    const dispatch = useDispatch();

    const sliderOpenState = useSelector(state => {
    
        const sliderOpenData = state.sliderReducer;
        return sliderOpenData
    })

    const {hidden, index} = sliderOpenState;
    
    const [slideIndex, setSlideIndex] = useState(0);
    
    useEffect(() => {
        setSlideIndex(index);
      }, [index]);

    const galleryState = useSelector(state => {
      
        const picturesData = state.galleryReducer.picturesData;
        return picturesData
    });

    const closeSlider = (e) => {
        if(e.target.className==='slider-wrapper'){

            dispatch({type: 'SHOW_SLIDER', hidden: true})
        }
    }

    

    const nextSlide = () => {
        if(slideIndex !== galleryState.length) {
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === galleryState.length){
            setSlideIndex(1)
        }
    }
    
    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(galleryState.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    

    return(
        <div className="slider-wrapper" hidden={hidden} onClick={closeSlider}>
            <div className="slider">
                
                    <button className="slider-button prev-slide" onClick={prevSlide}>
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1L1 10L9 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="slider-button next-slide" onClick={nextSlide}>
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 10L1 19" stroke="#EEEEEE" strokeWidth="2" strokeLnecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <ul className="slider-breadcrumbs-list">
                        {
                        galleryState.map((slide, index) => {
                            return(
                            <li 
                                key={slide.id}
                                className={slideIndex === index+1 ? "slider-breadcrumbs-list-item slider-breadcrumbs-list-item_active" : "slider-breadcrumbs-list-item"}
                                onClick={()=>moveDot(index+1)}>
                                <img alt={slide.comment} src={slide.url}/>
                            </li>
                                
                            )
                        })
                        }
                    </ul>
                {
                    galleryState.map((slide, index) => {
                        return(
                            <div key={slide.id} className={slideIndex === index+1 ? "slide" : "hidden-slide"}>
                                <img alt={slide.comment}  src={galleryState[index].url}/>
                                <div className="slide-comment">{slide.comment}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default Slider;