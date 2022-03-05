import react, {useState} from 'react';
import './App.css';
import Loginregister from './component/loginRegister/Loginregister';
import Loginpage from './component/loginpage/Loginpage';
import Registerpage from './component/registerinpage/Registerpage';
import NotVerified from './component/notVerified/NotVerified';
import Home from './component/onceVerified/homepage/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [AddList,setList] = useState([]);
  const [verified, setVerified] = useState(true);
  return (
    <div className="App absolute inset-0 flex flex-col justify-center items-center">
       <Router>
       <Loginregister/>
        <Routes>
              <Route exact path="/" element={<Loginpage  verified ={verified} setVerified ={setVerified} AddList ={AddList}/>}/>
              <Route path="/register" element={<Registerpage setList={setList} AddList ={AddList} />}/>
              <Route path="/loggedin" element={verified ? <Home/> : <NotVerified/>} />
        </Routes>
     

    </Router>

    </div>
  );
}

export default App;
