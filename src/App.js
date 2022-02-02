import react, {useState} from 'react';
import './App.css';
import Loginregister from './component/loginRegister/Loginregister';
import Loginpage from './component/loginpage/Loginpage';
import Registerpage from './component/registerinpage/Registerpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [AddList,setList] = useState([]);

  return (
    <div className="App absolute inset-0 flex flex-col justify-center items-center">
       <Router>
        <Routes>
              <Route exact path="/" element={<Loginpage AddList ={AddList}/>}/>
              <Route path="/register" element={<Registerpage setList={setList} AddList ={AddList} />}/>
        </Routes>
        <Loginregister/>
    </Router>

    </div>
  );
}

export default App;
