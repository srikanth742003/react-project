
import './App.css';
import Registerform from './voterid/Registerform';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './voterid/home';
import TableComponent from './voterid/voteridlist';
import Delete from './voterid/delete';
import Login from './voterid/login';
import Signup from './voterid/signup';

//import Voteridlist from './voterid/voteridlist';

function App() {
  return (
    
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/register" element={<Registerform/>}/>
  <Route path="/voteridlist" element={<TableComponent/>}/>
  <Route path="/delete" element={<Delete/>}/>
  </Routes>
  </BrowserRouter>
  



    
  );
}

export default App;
