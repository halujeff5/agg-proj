import React, { useState, useContext } from 'react';
import '../Vault.css';
import MyContext from '../hooks/MyContext';

const TextBox = () => {
    const apiCtx = useContext(MyContext)
    const [text, setText] = useState(null)

    const handleChange = (e) => {
        let searchTerm = []
        console.log(e.target.value)
        searchTerm.push(e.target.value);
        setText(searchTerm)
    }

    function handleSubmit() {
        apiCtx.addPrefs({text})
    }

    return (
        <div className= 'search-panel'>
        <input
        name= 'search'
        className='textbox-search'
        type ='text'
        placeholder= 'Enter topic...'
        value= {text}
        onChange= {handleChange}
        />
        <button onSubmit = {handleSubmit} className = 'search-query-button'>Query news</button>
        </div>
    )
}


export default TextBox;