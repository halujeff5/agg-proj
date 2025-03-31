import React, { useState, useContext, createContext } from 'react'
import '../App.css'
import 'react-dropdown/style.css'
import { useNavigate } from 'react-router'


const Dropdown = (options) => {

    const navigate = useNavigate()

  
    const topics = Object.values(options)
    console.log(topics)    
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState([])
    const [optionState, setOptionState] = useState([])

    const handleClickOption = (option) => {
        setSelectedOption(option);
        setOptionState(option)
        setIsOpen(false);
        localStorage.setItem('context', selectedOption) 
        navigate('/')  
    };
    
    

    
    return (
     <>

            
        <div className = 'dropdown'>
            <button onClick={() => setIsOpen(!isOpen)} className= 'dropdown-button'>Add Feed Topic
            </button>

            {isOpen && (
                <ul className= 'dropdown-list'>
                    {topics.map((option)=> (
                        <li key = {option.value} onClick={()=> handleClickOption(option)} >{option}</li>
                    ))}
                </ul>
            )}          
           </div>
           </>
    )



}

export default Dropdown