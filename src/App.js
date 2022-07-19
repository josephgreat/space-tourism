import {
  useEffect,
  useState
} from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Crew from './components/pages/Crew';
import Destination from './components/pages/Destination';
import Home from './components/pages/Home';
import Technology from './components/pages/Technology';
import wrapper from './components/Wrapper';

function App() {
  const [data, setData] = useState({});
  const [screenSize, setScreenSize] = useState("mobile");
  const [isLoading, setIsloading] = useState(false);
  const [hasError, setHasError] = useState(null);
  let fetchApi = async () => {
    setIsloading(true);
    await fetch("data.json")
      .then(response => {
        if (!response.ok) setHasError(response.statusText)
        else return response.json();
      })
      .then(res => {
        setData(res);
        setIsloading(false);
      })
      .catch(e => setHasError(e.message))
  };
  let checkScreenSize = () => {
    let w = window.innerWidth;
    if (w <= 375) setScreenSize("mobile");
    else if (w <= 960 && w > 375) setScreenSize("tablet");
    else if (w <= 1440 && w > 960) setScreenSize("desktop");
    else setScreenSize("desktop");
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      fetchApi();
      checkScreenSize()
    });
    window.addEventListener("resize", checkScreenSize); 
  }, []);

  let WrappedHomeComponent = wrapper(Home, "home", screenSize);
  let WrappedDestinationComponent = wrapper(Destination, "destination", screenSize, data, isLoading, hasError);
  let WrappedCrewComponent = wrapper(Crew, "crew", screenSize, data, isLoading, hasError);
  let WrappedTechnologyComponent = wrapper(Technology, "technology", screenSize, data, isLoading, hasError);

  return ( 
  <BrowserRouter >
      <Routes >
      <Route path = '/'
        element = {<WrappedHomeComponent />}
      /> 
      <Route path = '/destination'
        element = {
          <WrappedDestinationComponent />
        }
      /> 
      <Route path = '/crew'
        element = {
          <WrappedCrewComponent />
        }
      /> 
      <Route path = '/technology'
        element = {
          <WrappedTechnologyComponent screenSize={screenSize}/>
        }
      /> 
      </Routes> 
    </BrowserRouter>
  );
}

export default App;