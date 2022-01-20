// import React from 'react'

import React, {useState} from 'react'
import './login.css'

function Login(props) {
    const [userDetails , setuserDetails]=useState({
        email:'email@mail.com',
        password:'ssss'
    })
   
    const login =(event)=>{
        console.log(event)
        event.preventDefault()
        console.log(userDetails)
        if(userDetails.email&&userDetails.password){
            //programmatically navigate
            console.log('props', props)
            props.history.push('/home')
        } else{
            console.error('not valid');
        }
    }
    const handleEmailChange =(event)=>{
        console.log(event)
        console.log('name', event.target.name);
        console.log('value', event.target.value);
        //1.take a copy of the value
        const userDetailsCopy ={...userDetails}
        userDetailsCopy.email=event.target.value
        setuserDetails(userDetailsCopy) 
    }
    const handlePasswordChange =(event)=>{
        console.log(event)
        console.log('name', event.target.name);
        console.log('value', event.target.value);
        //1.take a copy of the value
        const userDetailsCopy ={...userDetails}
        userDetailsCopy.password=event.target.value
        setuserDetails(userDetailsCopy) 
    }

    const handleChange =(event)=>{
        console.log(event.target.name);
        const userDetailsCopy = {...userDetails}
        userDetailsCopy[event.target.name] =event.target.value
        setuserDetails(userDetailsCopy)
    }
    return (
        <div className='main'>
            <h1>Login</h1>
            <form onSubmit={login}>
            <div>
                {/* to make it change in UI if change in object bind that object in value .. we call
                it as controlled component  */}
                enter email:
                <input type="email" name="email" placeholder="Enter email" onChange={(event)=>{
                    handleEmailChange(event)
                }} />
            </div>
            <div>
                enter password:
            <input type="password" name="password" placeholder="Enter password" onChange={(event)=>{
                    handlePasswordChange (event)}} value={userDetails.email} />
            </div>
            <div>
                <input className='btn' type="submit" value="login" />
            </div>

            </form>
        </div>
    )
}

export default Login


