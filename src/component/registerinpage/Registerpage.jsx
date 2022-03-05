import React,{useState} from 'react';
import './registerinpage.css'
export default function Registerpage(props) {
  
  const [registerUser, setUser] = useState('');
  const [registerPass, setregisterPass] = useState('');
  const [reRegisterPass, setreRegisterPass] = useState('');
  let [inputCount , setInputCount] = useState(1);
  const checkUserExistance =(arr)=>{
    console.log("array in storage",arr);
  }

  const submitDetails =()=>{
    // props.AddList.splice(0, props.AddList.length);// in case page is not refreshed and data is entered again in register
    console.log("after array set empty",props.AddList);
    props.AddList.push(window.localStorage.getItem('List'));  // case when page is refreshed then array needs to have old vlaues and push new to storage 

    checkUserExistance(props.AddList);

    let registeredDetails = {
      registerName : registerUser,
      password: registerPass
    }
    let registeredDetailsStringify = JSON.stringify(registeredDetails);  // localstorage does not store objects only works with string format
    //(serilization) process data in format that network support
    props.AddList.push(registeredDetailsStringify);
    console.log("data is pushed in array");
    window.localStorage.setItem('List',props.AddList);
    window.location.reload();

  }

  const handleKeyPress = (e)=>{
    if(e.charCode === 13){
      if(registerPass !== reRegisterPass){
        alert("Password is not correct");
        window.location.reload();
      }else{
        submitDetails();
      }
    }
  }
   console.log(inputCount);
  const getToNextInput =(e)=>{
    // let list = JSON.parse(window.localStorage.getItem('List'));  
       //-------------------------------------------error search for item in existing file ----------------------------------------------------
    // console.log("type of",typeof list); 
    // console.log("list details",list);
    if(e.charCode === 13){
      // if(e.target.value.length <= 10 && list.indexOf(toString(e.target.value))){
        if(e.target.value.length <= 10 ){
          console.log("goint to next",inputCount)
          setInputCount(prevState=>prevState+1);
          let inputElement = document.getElementsByClassName("input"+inputCount)[0];
          inputElement.focus();
      }else{
        e.target.focus();
        alert("UserName should be of atmost of 14 character Or username exist");
      }
      
    }
  }

  return <div className='flex flex-col justify-center items-center'>
      <div>      <input type="text" id="userName"className=' input0 bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter User Name' onChange={(e)=>{setUser(e.target.value)}} onKeyPress={getToNextInput} onClick ={()=>{setInputCount(1)}} required></input>
      <label htmlFor="userName"><i className="fas fa-user colorWhite cursor-pointer"></i></label></div>
      <div>  <input type="text" id="Password"className=' input1 bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter Password' onChange={(e)=>{setregisterPass(e.target.value)}} onKeyPress={getToNextInput} onClick ={()=>{setInputCount(1)}} required></input>
      <label htmlFor="Password"><i className="fas fa-lock fill-red-300 colorWhite cursor-pointer"></i></label></div>
      <div>      <input type="text" id="rePassword"className='input2 bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Re Enter Password' onChange={(e)=>{setreRegisterPass(e.target.value)}} onKeyPress={handleKeyPress} required></input>
      <label htmlFor="rePassword"><i className="fas fa-key colorWhite cursor-pointer"></i></label></div>
  </div>;
}


// Validation check
// username character length                              => check
// username must not be existing                          => undergoing
// password 1 ==== password2                               => check
// password must have some specific character present     
//Add details in correct format in local storage          => check
//All filed required.