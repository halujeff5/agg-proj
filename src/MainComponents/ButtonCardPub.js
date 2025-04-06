import React, { useState, useContext, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import '../App.css'
import delIcon from '../static/icons8-x-48.jpg'
import MyContext from '../hooks/MyContext'

// take in contextAPI state for optionSelected to be a prop and text value

const ButtonCardPub = (prop) => {
    // const stateCtx = useContext(MyContext)
    const delCtx = useContext(MyContext)
    const pubCtx = useContext(MyContext)

    function handleClick(event) {
        event.preventDefault()
        // apiCtx.addPrefs(event.target.value)
        pubCtx.getSelectedPub(event.target.value)
    }

    let text = prop.prop

    function handleDelete() {
 
        pubCtx.delPublication(text)
    
    }

    // useEffect(() => {
    //     handleDelete();
    // },[])

    return (
        <>
            <button className='new-button-special' value={text} onClick={handleClick}>{text}
                <img className='icon-relative' onClick={handleDelete} src={delIcon} alt='small-icon'></img>
            </button>
        </>
    )

}

export default ButtonCardPub