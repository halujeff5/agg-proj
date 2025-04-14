import React, { useContext } from 'react'
import '../App.css'
import 'axios'
import delIcon from '../static/icons8-x-48.jpg'
import MyContext from '../hooks/MyContext'


// take in contextAPI state for optionSelected to be a prop and text value

const ButtonCardPub = (prop) => {
    const ytCtx = useContext(MyContext)
    const delCtx = useContext(MyContext)
    const pubCtx = useContext(MyContext)

    async function handleClick(event) {
        event.preventDefault()
        ytCtx.fetchYTAPI(event.target.value)
        pubCtx.getSelectedPub(event.target.value)

    }

    let text = prop.prop

    function handleDelete() {
        pubCtx.delPublication(text)
        ytCtx.delYTchannel(text)
    
    }

    // useEffect(() => {
    //     handleDelete();
    // },[])

    return (
        <>
            <button className='new-button-special' value={text} onClick={handleClick}>{text}
                <img className='icon-relative' onClick={handleDelete} src={delIcon} alt='small-icon'></img>
            </button>
        </>
    )

}

export default ButtonCardPub