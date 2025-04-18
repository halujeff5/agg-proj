import React from 'react'
import '../Vault.css'
import { useNavigate } from 'react-router-dom'


const Goodbye = () => {
    const navigate = useNavigate()

    function deleteLocalStorage() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }


    setTimeout(() => {
        deleteLocalStorage();
        navigate('/')
    }, 3000)
    
    return (

    <h2 className='goodbye'>See you again, soon</h2>
    
    )
    };


export default Goodbye