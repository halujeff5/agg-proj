import React, { useContext } from 'react'
import '../App.css'
import MyContext from '../hooks/MyContext'


// take in contextAPI state for optionSelected to be a prop and text value

const ButtonCardDefault = (prop) => {

    const genCtx = useContext(MyContext)
    
    function handleClick(event) {
        event.preventDefault()
        genCtx.addSelected(event.target.value)
    }

    let text = prop.prop

    return (
        <button className='new-button' value= {text} onClick={handleClick}>{text}
        </button>
   
    )

}

export default ButtonCardDefault