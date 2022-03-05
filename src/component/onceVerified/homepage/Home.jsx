import React from 'react';
import { useState } from 'react';
import './home.css';
import Tasklist from '../taskList/Tasklist';
export default function Home(props) {
   const [taskList , setTask] = useState([]);
   const [task, updateTask] = useState('');
    const saveDataToList = ()=>{
      setTask(prevState => [...prevState, task]);
    }
      console.log("home page");

  return (
    <div className='homePage w-full h-4/5 flex items-center flex-col '>
      <div className='entertask  flex mt-7 '>
        <input className='addTaskTitle  bg-transparent cursor-pointer belowBorderLine p-3 text-black' type="text" onChange={(e)=>{updateTask(e.target.value)}}></input>
        <div className='addTask w-7 h-7 cursor-pointer ml-3' ><button className='bg-white' onClick={saveDataToList}> Add </button></div>
      </div>
      <div className='flex taskWrapper z-50'>
      <Tasklist taskList ={taskList} setTask={setTask}/>
      </div>
    </div>
  )
  
}
