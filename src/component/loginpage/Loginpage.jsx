import React,{useState} from 'react';
import './loginpage.css';
export default function Loginpage(props) {
  // props.manageUpdateState(,updatevariable);
  const [passWord, setPassWord] = useState('');
  const [userName, setUserName] = useState('');

  const checkExistance = ()=>{
    // props.AddList = [];
    props.AddList.push(window.localStorage.getItem('List'));
    console.log(props.AddList);
    console.log("password", passWord);
    console.log("username",userName);
    // props.AddList.forEach(element => {
    //   if((typeof element) != null){
    //     // console.log("element 11=",element["registerName"], "\n"); 
    //   }
    //   for (var key in element){
    //     if(element.hasOwnProperty(key)){
    //       console.log(key + "=>" + element[key]);
    //     }
    //   }
    //   console.log("element 11=",element["registerName"], "\n"); 
    // });
    console.log("inside check array");
    console.log("window location",window.location);
    window.location = '/loggedin'; 
    console.log("props.verified set", props.verified);
  }

  const handleKeyPress =(e)=>{
    if(e.charCode === 13){
      console.log("inside login page", passWord );
      console.log(userName);
      console.log("props.verified", props.verified);
      checkExistance();
    }
  }
  return <div className='flex flex-col justify-center items-center'>
            <div>      
              <input type="text" id="userName"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter User Name' onChange={(e)=>{setUserName(e.target.value)}}></input>
              <label htmlFor="userName" className='cursor-pointer'><i className="fas fa-user colorWhite"></i></label>
            </div>
            <div>  
              <input type="text" id="Password"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter Password' onChange={(e)=>{setPassWord(e.target.value)}} onKeyPress={handleKeyPress}></input>
              <label htmlFor="Password" className='cursor-pointer'><i className="fas fa-unlock-alt colorWhite"></i></label>
            </div>
    </div>;
}
