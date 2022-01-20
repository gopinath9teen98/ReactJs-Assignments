import React from "react";
import { withRouter } from 'react-router-dom'

function Test(props){
    console.log('Test props', props);
    const navigateToLogin=()=>{
        props.history.push('/login')
    }
    return (
        <div>
             Test Component
             <button onClick={()=>{
                 navigateToLogin()
             }}>Login</button>



        </div>
    )
}
export default withRouter(Test)