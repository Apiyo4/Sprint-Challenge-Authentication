import React, {useRef} from 'react';
import axios from 'axios';
function Signup(props){
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (event)=>{
        event.preventDefault();

        axios.post('http://localhost:3300/api/auth/register', 
        {
            username: usernameRef.current.value ,
            password: passwordRef.current.value
        }
        )
        .then(res =>{
            props.history.push('/login')
          
        })
        .catch(er=>{
            
            debugger
        })
    }
    return(
        <div className='signUpDiv'>
            <h1 className='signUpHeading'>Signup</h1>
            <form>
                <label> <span className='nameSpacing'>Name:</span>
                    <input ref={usernameRef} name='name' type='text' placeholder='...enter name'/>
                </label>
                <br/>
                <label><span className='passwordSpacing'>Password:</span>
                    <input ref={passwordRef} id='inputSpacing' type='text' name='password' placeholder='...enter password' />
                </label>
                <br/>
                <button onClick={handleSubmit}>Login</button>
               
            </form>
        </div>
    )
}
export default Signup;