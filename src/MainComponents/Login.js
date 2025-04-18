import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Vault.css'
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({ ...formData, [name]: value }))

    }

    let username = formData.username
    let password = formData.password

    async function logIn() {
        let options = {
            method: 'GET',
            url: `http://0.0.0.0:3001/login`,
            params: {
                username: username,
                password: password
            }
        }
        const res = await axios.request(options)
        console.log('login successful', res.data)

        let token = res.data.jwtToken
        let user = res.data.user
        let ans = jwtDecode(token)
        console.log('token', ans)

        localStorage.setItem('user', user)
        localStorage.setItem('token', token)

        if (user && ans) {
            setLoggedIn(true)
            navigate('/')
        }
    }

    if (loggedIn == false) {
        return (
            <>
                <div className='model-overlay'>
                    <div className='signup-title'>Log In Form
                        <form className='form-register' >
                            <input type='text' id='username' name='username' placeholder='username' onChange={handleChange} autoComplete='on' />
                            <input type='password' id='password' name='password'
                                placeholder='password' onChange={handleChange} autoComplete='on' />
                        </form>

                        <div className='log-in-form'>
                            <button id='log' onClick={logIn}>Log In</button>
                        </div>

                        <div className = 'welcome-5'>Not yet a user, subscribe <a className = 'link-1' href='/subscribe'>HERE</a></div>

                    </div>
                </div>
            </>
        )
    };

    if (loggedIn == true) {

    }
}


export default Login