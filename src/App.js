import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Crew from './components/pages/Crew';
import Destination from './components/pages/Destination';
import Home from './components/pages/Home';
import wrapper from './components/Wrapper';

function App() {
  let WrappedHomeComponent = wrapper(Home, "home"); 
  let WrappedDestinationComponent = wrapper(Destination, "destination"); 
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<WrappedHomeComponent/>} />
        <Route path='/destination' element={<WrappedDestinationComponent/>} />
        <Route path='/crew' element={<Crew/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
