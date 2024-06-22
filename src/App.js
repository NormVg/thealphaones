
import './App.css';


import { NavBarContextProvider} from "./context/NavBarContext"
import MainPage from './page/MainPage';

function App() {
  
  return (

    <NavBarContextProvider>
    <div className="App" >
      
      <MainPage/>
    </div>
    </NavBarContextProvider>
  );
}

export default App;
