import React, { useState } from 'react'
import '../Vault.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';


const Subscribe = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    let secretKey = process.env.REACT_APP_JWT_SECRET

    let firstname = formData.firstname
    let lastname = formData.lastname
    let username = formData.username
    let password = formData.password
    let email = formData.email

    async function signUp() {
        let options = {
            method: 'POST',
            url: `http://0.0.0.0:3001/register`,
            params: {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
                email: email
            }
        }
        const res = await axios.request(options)

        let token = res.data.jwtToken
        let user = res.data.user
        let ans = jwtDecode(token)

        if (user && ans) {
            navigate('/')
        }
    }



    return (
        <>
            {/* <Modal /> */}

            <div className='signup-title'>Sign Up Form
                {/* <div className='register-form'> */}
                    <form className='form-register' >
                        <input type='text' id='firstname' name='firstname' placeholder='first name' onChange={handleChange} autoComplete='on' />
                        <input type='text' id='lastname' name='lastname' placeholder='last name' onChange={handleChange} autoComplete='on' />
                        <input type='text' id='username' name='username' placeholder='username' onChange={handleChange} autoComplete='on' />
                        <input type='password' id='password' name='password'
                            placeholder='password' onChange={handleChange} autoComplete='on' />
                        <input type='text' id='email' name='email' placeholder='email' onChange={handleChange} autoComplete='on' />
                    </form>
                {/* </div> */}

                <div className='log-in-form'>
                    <button id='log' onClick={signUp}>Sign Up</button>
                </div>
            </div>
        </>
    )

}


export default Subscribe