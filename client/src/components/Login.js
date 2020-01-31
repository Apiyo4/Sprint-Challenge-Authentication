import React, { useRef } from 'react';
import axios from 'axios';

function LoginPage(props){
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (event)=>{
        event.preventDefault();

        axios.post('http://localhost:3300/api/auth/login', {
            username: usernameRef.current.value ,
            password: passwordRef.current.value
        })
        .then(res =>{
            console.log(res.data.token)
            console.log(props)
      
            localStorage.setItem('token', res.data.token);
            props.history.push('/jokes')
          
        })
        .catch(er=>{
            debugger
            alert(er.response.data.message)
        })
    }
    return(
        <div className='loginDiv'>
            <h1 className='loginHeading'>Login</h1>
            <form>
                <label> <span className='nameSpacing'>Name:</span>
                    <input ref={usernameRef} name='name' type='text' placeholder='...enter name'/>
                </label>
                <br/>
                <label><span className='passwordSpacing'>Password:</span>
                    <input ref={passwordRef} id='inputSpacing' type='text' name='password' placeholder='...enter password' />
                </label>
                <br/>
                <button onClick={handleLogin}>Login</button>
               
            </form>
        </div>
    )
}

export default LoginPage;