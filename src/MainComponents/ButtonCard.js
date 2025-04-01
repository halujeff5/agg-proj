import React, { useState, useContext, createContext, useEffect } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
import MyContext from '../hooks/MyContext'

// take in contextAPI state for optionSelected to be a prop and text value

const ButtonCard = (prop) => {
    const stateCtx = useContext(MyContext)
    const apiCtx = useContext(MyContext)
    console.log(prop.prop)
    
    function handleClick(event) {
        
        event.preventDefault()
    
        console.log('EVENT', event.target.value)
        let ansArr = []
        ansArr = [...ansArr, event.target.value] 
        console.log('A', ansArr[0])
        ansArr.filter(item => item !== event.target.value) 
        console.log('ansArr', ansArr)
        localStorage.setItem('ans', ansArr)
        apiCtx.addPrefs(ansArr)
        
    }

    
    let text = prop.prop
    console.log('PROP', text)

    // if (stateCtx.states) {
    //     return (
    //         <button className='new-button' value= {text} onClick={handleClick}>{stateCtx.states}</button>
    //     )
    // }

    return (
        <button className='new-button' value= {text} onClick={handleClick}>{text}</button>
    )

}

export default ButtonCard