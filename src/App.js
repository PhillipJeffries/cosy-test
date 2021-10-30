import './App.scss';
import classNames from 'classnames';

import {useDispatch, useSelector} from 'react-redux';

import {useState} from 'react';

import Gallery from './components/gallery/gallery';

import Slider from './components/slider/slider';

console.log(document.location.href)



function App() {
  return (
    <div className='App'>
      <Gallery/>
      <Slider/>
    </div>
  );
}

export default App;
