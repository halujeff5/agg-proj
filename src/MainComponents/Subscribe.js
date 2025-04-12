import React, { useState } from 'react'
import '../Vault.css'
import { Helpers } from './helpers'
import { useNavigate } from 'react-router-dom'



const Subscribe = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState([])

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(formData => ({...formData, [name]: value }))

}

let firstname = formData.firstname
let lastname = formData.lastname
let username = formData.username
let password = formData.password
let email = formData.email

async function signUp() {
    const res = await Helpers.signUpUser(firstname, lastname, username, password, email)
    console.log(res)
    navigate('/')
    }



return (
    <>
    <h1 className = 'signup-title'>Sign Up Form</h1>
    <div className = 'register-form'>
    <form className= 'form-register' >
        <input type = 'text' id= 'firstname' name= 'firstname' placeholder= 'first name' onChange = {handleChange} autoComplete='on'/>
        <input type = 'text' id= 'lastname' name= 'lastname' placeholder = 'last name' onChange = {handleChange} autoComplete='on' />
        <input type = 'text' id= 'username' name= 'username' placeholder = 'username' onChange = {handleChange} autoComplete='on' />
        <input type = 'password' id= 'password' name= 'password' 
        placeholder = 'password' onChange = {handleChange} autoComplete='on'/>
        <input type = 'text' id= 'email' name= 'email' placeholder = 'email' onChange = {handleChange} autoComplete='on' />
    </form>
    </div>

<div className='log-in-form'>
<button id='log' onClick={signUp}>Sign In</button>
</div>

</>
)

}


export default Subscribe