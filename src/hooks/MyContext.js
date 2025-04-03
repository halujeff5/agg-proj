import { createContext, useState } from 'react'


export const MyContext = createContext({ states: 'artificial intelligence', pref: null, del: null})


export function MyContextProvider(props) {

    //this is context to get term for API call according to topic 
    const [activeState, setActiveState] = useState(['artificial intelligence'])
    
    // this is context to get term for API call according to keyword
    const [getAPI, setGetAPI] = useState([])

    // this context that captures the delete button value
    const [delState, setDelState] = useState([])


    // function context to add state context into main context
    function addSelected(states) {
        setActiveState([...activeState, states])
    }
    // function context to return arr without the selceted state 
    function deleteSelected(states) {
        setActiveState(activeState.filter((item) => item != states))
    }

    // function context to pass term for keyword onto keyword context to be used app wide
    function passPref(pref) {
        setGetAPI(pref)
    }

    // function makes the del term available app wide via delCTX 
    function addSelected1(del) {
        setDelState(del)
    }

   
    const context = { states: activeState, pref: getAPI, del: delState }

    // the values and functions we will need to accomplish our goal
    const value = {
        states : activeState,
        pref : getAPI,
        del : delState,
        addStates : addSelected,
        addPrefs: passPref,
        addStates1: addSelected1,
        deleteSelected : deleteSelected,
       
    }

    return (
        <>
        <MyContext.Provider value={value}>
            {props.children}
        </MyContext.Provider>

        </>
    )
}

export default MyContext