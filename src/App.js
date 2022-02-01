
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
  return (
    <div className="App absolute inset-0 flex flex-col justify-center items-center">
       <Router>
        <Routes>
              <Route exact path="/" element={<Loginpage/>}/>
              <Route path="/register" element={<Registerpage/>}/>
        </Routes>
        <Loginregister/>
    </Router>

    </div>
  );
}

export default App;
