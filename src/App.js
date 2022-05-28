import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Crew from './components/pages/Crew';
import Destination from './components/pages/Destination';
import Home from './components/pages/Home';
import wrapper from './components/Wrapper';

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [hasError, setHasError] = useState(null);
   let fetchApi = async () => {
      setIsloading(true);
      await fetch("data.json")
      .then(response => {
        if(!response.ok) setHasError(response.statusText)
        else return response.json();
      })
      .then(res => {
        setData(res);
        setIsloading(false);
      })
      .catch(e => setHasError(e.message))
    };
    useEffect(() => {
      window.addEventListener("load", fetchApi);
      
      return () => {
        window.removeEventListener("load", fetchApi);
      }
    }, [])
    
  let WrappedHomeComponent = wrapper(Home, "home"); 
  let WrappedDestinationComponent = wrapper(Destination, "destination", data, isLoading, hasError); 
  let WrappedCrewComponent = wrapper(Crew, "crew", data, isLoading, hasError);

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<WrappedHomeComponent />} />
        <Route path='/destination' element={<WrappedDestinationComponent/>} />
        <Route path='/crew' element={<WrappedCrewComponent/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
