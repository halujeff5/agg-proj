import { createContext, useState } from 'react'


export const MyContext = createContext({ states: 'artificial intelligence', pref: null, del: null, pub: 'BBC News', yt: 'Bloomberg Television', genState: null, url: null, hidden: false})


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

    //this context gets yt state
    const [ytState, setYTState] = useState([])

    //this context get yt option for API call 
    const [getYTAPI, setGetYTAPI] = useState([])

    //this context is to delete the yt option
    const [delYT, setDelYT] = useState([])

    const [urlState, setUrlState] = useState([])

    function addUrlState(url) {
        setUrlState(url)
    }

    // function context to add state context into main context
    function addSelected(states) {
        setActiveState([...activeState, states])
    }
    // function context to pass term for keyword onto keyword context to be used app wide
    function passPref(states) {
        setGetAPI(states)
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

    // function makes the del term available app wide via delCTX 
    function addSelected1(del) {
        setDelState(del)
    }
    //functional list of selected YT channels
    function addYtChannel(yt) {
        setYTState([...ytState, yt])
    }
    // get the right channel to make API call
    function addYtAPI(yt) {
        setGetYTAPI(yt)
    }
    // get the right channel marked for deletion
    function delYTchannel(yt) {
        setYTState(ytState.filter((item) => item !== yt))
    }

    // get the state from general buttons
    const [ activeGenState, setActiveGenState ] = useState([])
    
    function addSelected2(genState) {
            setActiveGenState(genState)
        }

    const [hiddenState, setHiddenState] = useState(false)
    function changeHiddenState() {
        setHiddenState(!hiddenState)
    }

    const context = { states: activeState, pref: getAPI, del: delState, pub: pubState, yt: ytState, sel: getYTAPI, genState: activeGenState, url: urlState, hidden: hiddenState  }

    // the values and functions we will need to accomplish our goal
    const value = {

        genState: activeGenState,
        addSelected : addSelected2,

        //news category states/functions
        states : activeState,
        addStates : addSelected,
        addPrefs: passPref,
        addStates1: addSelected1,
        pref : getAPI,
        del : delState,

        //publication states/functions
        pub: pubState,
        puboption: getPublisher,
        deleteSelected : deleteSelected,
        addSelectedPub: addSelectedPub,
        getSelectedPub: getSelectedPub,
        delPublication : delPublication,
       
        //yt channel states/functions
        yt: ytState,
        addYT: addYtChannel,
        fetchYTAPI: addYtAPI,
        delYTchannel : delYTchannel,
        sel : getYTAPI,

        url : urlState,
        addUrl : addUrlState,

        hiddenState : hiddenState,
        change : changeHiddenState,
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