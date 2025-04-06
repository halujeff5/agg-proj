import React, { useState, useContext, createContext } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
import MyContext from '../hooks/MyContext'

const PublicationDropdown = (options) => {

    const pubCtx = useContext(MyContext)
    const navigate = useNavigate()
    
    const topics = Object.values(options)  
    const [isOpen, setIsOpen] = useState(false)
    // const [selectedOption, setSelectedOption] = useState([])
    // const [optionState, setOptionState] = useState([])

    const handleClickOption = (option) => {
        // setSelectedOption(option);
        // setOptionState(option)
        setIsOpen(false);
        pubCtx.addSelectedPub(option);

        // navigate('/');  
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

export default PublicationDropdown