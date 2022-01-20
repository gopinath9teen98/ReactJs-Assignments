import React, {useState} from 'react'

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
    // const handleEmailChange =(event)=>{
    //     console.log(event)
    //     console.log('name', event.target.name);
    //     console.log('value', event.target.value);
    //     //1.take a copy of the value
    //     const userDetailsCopy ={...userDetails}
    //     userDetailsCopy.email=event.target.value
    //     setuserDetails(userDetailsCopy) 
    // }
    // const handlePasswordChange =(event)=>{
    //     console.log(event)
    //     console.log('name', event.target.name);
    //     console.log('value', event.target.value);
    //     //1.take a copy of the value
    //     const userDetailsCopy ={...userDetails}
    //     userDetailsCopy.password=event.target.value
    //     setuserDetails(userDetailsCopy) 
    // }

    const handleChange =(event)=>{
        console.log(event.target.name);
        const userDetailsCopy = {...userDetails}
        userDetailsCopy[event.target.name] =event.target.value
        setuserDetails(userDetailsCopy)
    }
    return (
        <div>
            <form onSubmit={login}>
            <div>
                {/* to make it change in UI if change in object bind that object in value .. we call
                it as controlled component  */}
                <input type="email" name="email" placeholder="Enter email" onChange={(event)=>{
                    handleChange(event)
                }} />
            </div>
            <div>
            <input type="password" name="password" placeholder="Enter password" onChange={(event)=>{
                    handleChange (event)}} value={userDetails.email} />
            </div>
            <div>
                <input type="submit" value="login" />
            </div>

            </form>
        </div>
    )
}

export default Login


