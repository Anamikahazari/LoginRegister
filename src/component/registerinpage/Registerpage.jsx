import React,{useState} from 'react';
import './registerinpage.css'
export default function Registerpage(props) {
  
  const [registerUser, setUser] = useState('');
  const [registerPass, setregisterPass] = useState('');
  const [reRegisterPass, setreRegisterPass] = useState('');

  const submitDetails =()=>{
    props.AddList.push(registerUser);
    console.log("data is pushed in array");
    console.log(props.AddList);
    window.localStorage.setItem('List',JSON.stringify(...props.AddList));
  }

  const handleKeyPress = (e)=>{
    if(e.charCode === 13){
      console.log("handeling key press, inside if")
      submitDetails();
    }
  }

  return <div className='flex flex-col justify-center items-center'>
      <div>      <input type="text" id="userName"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter User Name' onChange={(e)=>{setUser(e.target.value)}}></input>
      <label htmlFor="userName"><i className="fas fa-user colorWhite cursor-pointer"></i></label></div>
      <div>  <input type="text" id="Password"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter Password' onChange={(e)=>{setregisterPass(e.target.value)}}></input>
      <label htmlFor="Password"><i className="fas fa-lock fill-red-300 colorWhite cursor-pointer"></i></label></div>
      <div>      <input type="text" id="rePassword"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Re Enter Password' onChange={(e)=>{setreRegisterPass(e.target.value)}} onKeyPress={handleKeyPress}></input>
      <label htmlFor="rePassword"><i className="fas fa-key colorWhite cursor-pointer"></i></label></div>
  </div>;
}
