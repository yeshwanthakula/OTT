
import './App.css';
// eslint-disable-next-line
import {BrowserRouter as Router ,  Route,Routes} from "react-router-dom";

import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
   <Header/>
    <Routes>

     <Route exact path ="/" element={<Login/>}/>
     <Route  path ="/home" element={<Home/>}/>
     <Route path ="/detail/:id" element ={<Details/>}/>
     

    </Routes>



 
    
    </div>
  );
}

export default App;
