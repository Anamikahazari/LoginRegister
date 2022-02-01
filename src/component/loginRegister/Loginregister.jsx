import React from 'react';
import {Link} from "react-router-dom";

export default function Loginregister() {
  return <div className='flex justify-center  items-center mt-8'>
    <Link className="link" to ="/"> <button className='text-gray-600 text-xl mr-6'>Login</button></Link>
    <Link className="link" to ="/Register"><button className='text-gray-600 text-xl'>Register</button></Link>
  </div>;
}
