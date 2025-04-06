import { createContext, useState } from 'react'


export const MyContext = createContext({ states: 'artificial intelligence', pref: null, del: null, pub: 'BBC News'})


export function MyContextProvider(props) {

    //this is context to get term for API call according to topic 
    const [activeState, setActiveState] = useState(['artificial intelligence'])
    
    // this is context to get term for API call according to keyword
    const [getAPI, setGetAPI] = useState([])

    // this context that captures the delete button value
    const [delState, setDelState] = useState([])

    //this is the context of selected publications
    const [pubState, setPubState] = useState(['BBC News'])

    //this is the context to get API call from publications
    const [getPublisher, setGetPublisher] = useState([])

    // this context is to delete publisher from publisher list (pubState)
    const [delPubState, setDelPubState] = useState([])


    // function context to add state context into main context
    function addSelected(states) {
        setActiveState([...activeState, states])
    }
    // function context to return arr without the selceted state 
    function deleteSelected(states) {
        setActiveState(activeState.filter((item) => item !== states))
    }
    // function to add publication state to list
    function addSelectedPub(pub) {
        setPubState([...pubState, pub])
    }
    // function to add publication to make API call
    function getSelectedPub(pub) {
        setGetPublisher(pub)
    }
    // function to delete publication from list
    function delPublication(pub) {
        setPubState(pubState.filter((item) => item !== pub))
    }

    // function context to pass term for keyword onto keyword context to be used app wide
    function passPref(pref) {
        setGetAPI(pref)
    }

    // function makes the del term available app wide via delCTX 
    function addSelected1(del) {
        setDelState(del)
    }

   
    const context = { states: activeState, pref: getAPI, del: delState, pub: pubState }

    // the values and functions we will need to accomplish our goal
    const value = {
        states : activeState,
        pref : getAPI,
        del : delState,
        pub: pubState,
        puboption: getPublisher,
        addStates : addSelected,
        addPrefs: passPref,
        addStates1: addSelected1,
        deleteSelected : deleteSelected,
        addSelectedPub: addSelectedPub,
        getSelectedPub: getSelectedPub,
        delPublication : delPublication,
       
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