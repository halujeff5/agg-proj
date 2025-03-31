import React, { useState, useContext, createContext } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
// import { useMyContext } from '../hooks/functionContext'


const TagButton = (prop) => {

    const navigate = useNavigate()
    function handleClick(event) {
        
        event.preventDefault()
    
        console.log('EVENT', event.target.value)
        let ansArr = []
        ansArr = [...ansArr, event.target.value] 
        console.log('A', ansArr[0])
        ansArr.filter(item => item !== event.target.value) 
        console.log('ansArr', ansArr)
    
        localStorage.setItem('ans', ansArr)
        navigate('/')
    }

    
    let text = prop.prop
    console.log('PROP', prop.prop)

    

    return (
        <button className='selection' value= {prop.prop} onClick={handleClick}>{text}</button>
    )
}


export default TagButton