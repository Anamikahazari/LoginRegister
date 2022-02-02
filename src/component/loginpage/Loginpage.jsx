import React,{useState} from 'react';
import './loginpage.css';
export default function Loginpage(props) {
  console.log("password",props.passWord);
  // props.manageUpdateState(,updatevariable);
  const [passWord, setPassWord] = useState('');
  const [userName, setUserName] = useState('');
 

  return <div className='flex flex-col justify-center items-center'>
            <div>      
              <input type="text" id="userName"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter User Name'></input>
              <label htmlFor="userName" className='cursor-pointer'><i className="fas fa-user colorWhite"></i></label>
            </div>
            <div>  
              <input type="text" id="Password"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter Password' ></input>
              <label htmlFor="Password" className='cursor-pointer'><i className="fas fa-unlock-alt colorWhite"></i></label>
            </div>
    </div>;
}
