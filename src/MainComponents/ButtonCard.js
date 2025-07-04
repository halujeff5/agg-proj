import React, { useContext } from 'react'
import '../App.css'
import delIcon from '../static/icons8-x-48.jpg'
import MyContext from '../hooks/MyContext'

// take in contextAPI state for optionSelected to be a prop and text value

const ButtonCard = (prop) => {

    const stateCtx = useContext(MyContext)
    const apiCtx = useContext(MyContext)
    const delCtx = useContext(MyContext)

    function handleClick(event) {
        event.preventDefault()
        apiCtx.addPrefs(event.target.value)
        // pubCtx.addSelectedPub(event.target.value)
    }

    let text = prop.prop

    function handleDelete() {
        delCtx.addStates1(prop.prop)
        // pubCtx.delPublication(prop.prop)
    }

    return (
        <>
            <button className='new-button-special' value={text} onClick={handleClick}>{text}
                <img className='icon-relative' onClick={handleDelete} src={delIcon} alt='small-icon'></img>
            </button>
        </>
    )

}

export default ButtonCard