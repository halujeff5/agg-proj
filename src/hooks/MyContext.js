import { createContext, useState } from 'react'


export const MyContext = createContext({ states: 'artificial intelligence', pref: null})


export function MyContextProvider(props) {

    const [activeState, setActiveState] = useState([])
    const [getAPI, setGetAPI] = useState([])

    function addSelected(states) {
        setActiveState(states)
    }


    function passPref(pref) {
        setGetAPI(pref)
    }
    const context = { states: activeState, pref: getAPI }

    const value = {
        states : activeState,
        pref : getAPI,
        addStates : addSelected,
        addPrefs: passPref,

       
    }

    return (
        <>
        <MyContext.Provider value={value}>
            {props.children}
        </MyContext.Provider>
        {/* <APIContext.Provider value= {value1}>
            {props.children}
        </APIContext.Provider> */}
        </>
    )
}

export default MyContext