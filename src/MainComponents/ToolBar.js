import React from 'react'
import '../App.css'

const ToolBar = () => {

return (
    <div className = 'toolbar-links'>
    <a href = '/subscribe' className ='link'>Subscribe</a>
    <a className = 'link'>Vault</a>
    <a className = 'link'>Logout</a>
    <a className = 'link'>Preferences</a>
    </div>
)

}

export default ToolBar