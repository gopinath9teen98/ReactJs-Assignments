import React, { useState } from "react"
import { Link } from "react-router-dom"
import './Register.css';




function Register(props) {

    const [userDetails, setuserDetails] = useState({
        firstName:'',
        lastName:'',
        phoneNumber:'',
        email: '',
        password: '',
        confirmPassword:'',
        dob:''


    })

    const [isFirstNameValid, setisFirstNameValid] = useState(true)
    const [firstNameError, setFirstNameError] = useState('')

    const [isLastNameValid, setisLastNameValid] = useState(true)
    const [LastNameError, setLastNameError] = useState('')
 

    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')

    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setPasswordError] = useState('')

    const [isConfirmPasswordValid, setisConfirmPasswordValid] = useState(true)
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const [isPhoneNumberValid, setisPhoneNumberValid] = useState(true)
    const [phoneNumberError, setPhoneNumberError] = useState('')

    const [isDobValid, setisDobValid] = useState(true)
    const [dobError, setDobError] = useState('')

    // const [formData, setFormData] = useState(true);
    // const [genderError,setGenderError]=useState("")

    const login = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(userDetails);

        const isValid = validateEmail(userDetails.email)
        const isValidPass = validatePassword(userDetails.password)
        const isValidFName = validateFirstName(userDetails.firstName)
        const isValidLName = validateLastName(userDetails.lastName)
        const isValidPhnum = validatePhoneNumber(userDetails.phoneNumber)
        const isValiddate1 = validateDob(userDetails.dob)
        const isValidConfirmPass = validateConfirmPassword(userDetails.confirmPassword)
        // const validateGen= validateGender(userDetails.gen)


        
        if (isValid && isValidPass && isValidFName && isValidLName ) {
            // Programatically navigate
            console.log('props', props);
            props.history.push('/home')
        } else {
            console.error('not valid');
        }
    }

    const isValiedName = (firstName,lastName) => {
        const re1 = /^[a-zA-Z]+$/;
        return re1.test(String(firstName,lastName));
      };
 
      const isValidNum = (phoneNumber) =>{
          const re1 = /^[0-9]+$/;
          return re1.test(phoneNumber);
      }
      const isValidDate = (dob) =>{
            var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
            return pattern.test(dob)
      }

      const isValidEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
        return re.test(String(email).toLowerCase());
      };

    //   const validateGender = (gen)=>{
    //     if (!gender) {
    //         messages.push("Please select a Gender");
    // }

    const validateEmail = (email) => {       
           
        if(email==''){
            setisEmailValid(false)
            setemailError('Please enter  email')
        }       
        else if(!isValidEmail(email)) {
            setisEmailValid(false)
            setemailError('Please enter valid email')
            return false
        }else{
            setisEmailValid(true)
            setemailError('')
            return true
        }
    }
    const isValidPassword = (password,confirmPassword) => {
        const regp = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );
        return regp.test(password,confirmPassword);
      };
    const validatePassword = (password) =>{      
      
         if(password==''){
            setisPasswordValid(false)
            setPasswordError('please enter password')
            return false
        }else if(!isValidPassword(password)){
            setisPasswordValid(false)
            setPasswordError("Password must be at least 8 character & must include one  Uppercase one lowercase and one special character.")
            return false
        }else{
            setisPasswordValid(true)
            setPasswordError('')
            return true
        }
    }

    const validateConfirmPassword = (confirmPassword) =>{      
      
        if(confirmPassword==''){
           setisConfirmPasswordValid(false)
           setConfirmPasswordError('please enter password')
           return false
       }else if(!isValidPassword(confirmPassword)){
           setisConfirmPasswordValid(false)
           setConfirmPasswordError("Confirm Password must be at least 8 character & must include one  Uppercase one lowercase and one special character.")
           return false
       }else{
           setisConfirmPasswordValid(true)
           setConfirmPasswordError('')
           return true
       }
   }

   const validateFirstName = (firstName) =>{
    if(firstName==''){
        setisFirstNameValid(false)
        setFirstNameError('please enter Firstname')
        return false
    }else if(!isValiedName(firstName)){
        setisFirstNameValid(false)
        setFirstNameError('Firstname must contain only alphabets')
        return false
    }else{
        setisFirstNameValid(true)
        setFirstNameError('')
        return true
    }
}
const validateLastName = (lastName) =>{
    if(lastName==''){
        setisLastNameValid(false)
        setLastNameError('please enter Lastname')
        return false
    }else if(!isValiedName(lastName)){
        setisLastNameValid(false)
        setLastNameError('Lastname must contain only alphabets')
        return false
    }else{
        setisLastNameValid(true)
        setLastNameError('')
        return true
    }
}

const validatePhoneNumber = (phoneNumber) =>{
    if(phoneNumber == ''){
        setisPhoneNumberValid(false);
        setPhoneNumberError('please enter phone number')
    }else if(!isValidNum(phoneNumber) && phoneNumber.length<10){
        setisPhoneNumberValid(false);
        setPhoneNumberError('phone number can contain only numbers')
    }else{
        setisPhoneNumberValid(true);
        setPhoneNumberError('')
    }
}

const validateDob = (dob) =>{
    if(dob==''){
        setisDobValid(false)
        setDobError('please enter DOB')
        return false
    }else if(!isValidDate(dob)){
        setisDobValid(false)
        setDobError('please enter valid DOB')
        return false
    }else{
        setisDobValid(true)
        setDobError('')
        return true
    }
}

// const validateGender = (gen)=>{
//     if (!gender) {
//         messages.push("Please select a Gender");
// }

const handleChange = (event) => {
    console.log(event.target.name);
    const userDetailsCopy = { ...userDetails }
    userDetailsCopy[event.target.name] = event.target.value
    setuserDetails(userDetailsCopy)
}






    return (
        <div className="container">
        <form onSubmit={login} className="form1">

            <div>Form Validation</div>
<div>
    
    <input type="text"
        name="firstName"
        placeholder="Enter firstName"
        onChange={(event) => {
            handleChange(event)
        }}
        value={userDetails.firstName}
    /><br />
    {!isFirstNameValid ? <span style={{color:'red',
fontSize:'8px', display:'block',marginLeft:'-0px',fontSize:'15px'}}>{firstNameError}</span> : null} 
</div>

<div>
    <input type="text"
        name="lastName"
        placeholder="Enter lastName"
        onChange={(event) => {
            handleChange(event)
        }}
        value={userDetails.lastName}
    />
    {!isLastNameValid ? <span style={{color:'red',
fontSize:'8px', display:'block',marginLeft:'-0px',fontSize:'15px'}}>{LastNameError}</span> : null} 
</div>
<div>
    <input type="email"
        name="email"
        placeholder="Enter email"
        onChange={(event) => {
            handleChange(event)
        }}
        value={userDetails.email}
    />
    {!isEmailValid ? <span style={{color:'red',
fontSize:'8px', display:'block',marginLeft:'-0px',fontSize:'15px'}}>{emailError}</span> : null}
</div>
<div>
    <input type="password"
        name="password"
        placeholder="Enter password"
        onChange={(event) => {
            handleChange(event)
        }}
        value={userDetails.password}
    />
    {!isPasswordValid ? <span style={{color:'red',
fontSize:'8px', display:'block',marginLeft:'-0px',fontSize:'15px'}}>{passwordError}</span> : null} 
</div>

<div>
    <input type="password"
        name="confirmPassword"
        placeholder="Re-Enter password"
        onChange={(event) => {
            handleChange(event)
        }}
        value={userDetails.confirmPassword}
    />
    {!isConfirmPasswordValid ? <span style={{color:'red',
fontSize:'8px', display:'block',marginLeft:'-0px',fontSize:'15px'}}>{confirmPasswordError}</span> : null} 
</div>


<div>
    <input type="tel"
        name="phoneNumber"
        placeholder="Enter PhoneNumber"
        onChange={(event) => {
            handleChange(event)
        }}
        value={userDetails.phoneNumber}
    />
    {!isPhoneNumberValid ? <span style={{color:'red',
fontSize:'8px', display:'block',marginLeft:'-0px',fontSize:'15px'}}>{phoneNumberError}</span> : null} 
</div>

<div>
    <input type="text"
        name="dob"
        placeholder="Enter Date of birth"
        onChange={(event) => {
            handleChange(event)
        }}
        value={userDetails.dob}
    />
    {!isDobValid ? <span style={{color:'red',
fontSize:'8px', display:'block',marginLeft:'0px',fontSize:'15px'}}>{dobError}</span> : null} 
</div>
<div>
    <div>
        {/* <input value="Male" checked={formData.gender === "Male"}
            onChange={handleChange} type="radio" name="gender" />Male
        <input value="Female" checked={formData.gender === "Female"}
            onChange={handleChange} type="radio" name="gender" />Female */}
            <input onChange={(event)=>{
                handleChange(event)
            }} type="radio" value="male" name="male"  /> male
            <input onChange={(event)=>{
                 handleChange(event)
            }} type="radio" value="female" name="male" />female
            {/* {!formData ? <span style={{color:'red',fontSize:'8px',display:'block',marginLeft:'-100px',fontSize:'6px'}}>{genderError}</span> :null }   */}

            
    </div>
    <div>
        
        </div>

<div>
    </div>
    <input type="submit" value="Register" />
    {/* <p style={{fontSize:'8px'}}>Already have an account <Link to='/login'>login</Link></p> */}
</div>
</form>
</div>
    )
}

export default Register
