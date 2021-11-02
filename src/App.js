import './App.scss';
import Gallery from './components/gallery/gallery';
import Slider from './components/slider/slider';
import AddPhotoForm from './components/addPhotoForm/addPhotoForm';


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







