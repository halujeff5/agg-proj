import React, { useState } from 'react'
import '../Vault.css'

const Podcast = () => {
 
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    
    return (
    <form>
        <input className= 'podcast-input' type= 'text' name = 'podcast-input' placeholder='Enter search' value= {inputValue} onChange = {handleInputChange} />
        </form>
    )
}


export default Podcast