import './App.scss';
import moment from 'moment';

import Gallery from './components/gallery/gallery';
import Slider from './components/slider/slider';
import AddPhotoForm from './components/addPhotoForm/addPhotoForm';


console.log(moment())

const date = new Date();

console.log(date.getFullYear())


function App() {
  return (
    <div className='App'>
      <AddPhotoForm/>
      <Gallery/>
      <Slider/>
    </div>
  );
}

export default App;