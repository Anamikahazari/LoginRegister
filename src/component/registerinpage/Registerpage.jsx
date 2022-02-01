import React from 'react';
import './registerinpage.css';
import {connect} from 'react-redux';
import {updateUser} from '../redux/index.js';
function Registerpage(props) {
    
    const mapStateToProps = state =>{
        return{
            userName : state.userName
        }
    }

    const mapDispatchToProps = dispatch =>{
        return{
            updateUser:  () =>{dispatch(updateUser())}
        }
    }
    return <div className='flex flex-col justify-center items-center'>
        <div>{props.userName}</div>
        <div>
            <input type="text" id="userName" className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter User Name'></input>
            <label for="userName"><i className="fas fa-user colorWhite cursor-pointer"></i></label>
        </div>
        <div>
            <input type="text" id="Password" className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Enter Password'></input>
            <label for="Password"><i className="fas fa-lock fill-red-300 colorWhite cursor-pointer"></i></label>
        </div>
        <div>
            <input type="text" id="rePassword" className='bg-transparent text-white cursor-pointer belowBorderLine p-3 text-gray-600' placeholder='Re Enter Password'></input>
            <label for="rePassword"><i className="fas fa-key colorWhite cursor-pointer"></i></label>
        </div>
    </div>;
}
export default  connect(mapStateToProps, mapDispatchToProps)(Registerpage)