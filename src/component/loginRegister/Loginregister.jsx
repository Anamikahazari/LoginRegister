import React from 'react';
import {Link} from "react-router-dom";


export default function Loginregister() {
  return <div className='flex justify-center  items-center absolute  top-0'>
    <Link className="link" to ="/"> <button className='text-gray-600 text-xl mr-6'>Login</button></Link>
    <Link className="link" to ="/Register"><button className='text-gray-600 text-xl mr-6'>Register</button></Link>
    <Link className="link" to ="/loggedin"><button className='text-gray-600 text-xl'>Loggedin</button></Link>
    
  </div>;
}
