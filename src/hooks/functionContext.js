import React, { useState, createContext, useContext } from 'react'
import '../App.css'
import { handleClick } from './utils';


const functionContext = createContext();


export const MyContextProvider = ({ children }) => {

    const [data, setData] = useState('Initial Data');
    const contextValue = {
        data,
        handleClick 
    }



return (
    <functionContext.Provider value ={contextValue}>
        {children}
    </functionContext.Provider>
)
}
export const useMyContext = () => useContext(functionContext)