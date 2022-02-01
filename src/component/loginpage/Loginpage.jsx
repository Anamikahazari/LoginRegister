import React from 'react';
import './loginpage.css';
export default function Loginpage() {
  return <div className='flex flex-col justify-center items-center'>
            <div>      
              <input type="text" id="userName"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter User Name'></input>
              <label for="userName" className='cursor-pointer'><i class="fas fa-user colorWhite"></i></label>
            </div>
            <div>  
              <input type="text" id="Password"className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter Password'></input>
              <label for="Password" className='cursor-pointer'><i class="fas fa-unlock-alt colorWhite"></i></label>
            </div>
    </div>;
}
