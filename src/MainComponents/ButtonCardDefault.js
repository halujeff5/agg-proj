import React, { useState, useContext, createContext, useEffect } from 'react'
import '../App.css'
import delIcon from '../static/icons8-x-48.jpg'
import MyContext from '../hooks/MyContext'

// take in contextAPI state for optionSelected to be a prop and text value

const ButtonCardDefault = (prop) => {
    const stateCtx = useContext(MyContext)
    const apiCtx = useContext(MyContext)
    console.log(prop.prop)

    const [isHovered, setIsHovered] = useState(false)
    
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

    return (
      
        // <div className = 'entire-button'>
        <button className='new-button' value= {text} onClick={handleClick}>{text}
        </button>
        // </div>
    )

}

export default ButtonCardDefault