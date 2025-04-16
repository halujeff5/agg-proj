import React from 'react'
import '../App.css'

const ToolBar = () => {

return (
    <div className = 'toolbar-links'>
    <button className = 'link'><a href = 'http://localhost:3000/subscribe' className ='link'>Subscribe</a></button>
    <button className = 'link'><a href= 'http://localhost:3000/vault' className = 'link'>Vault</a></button>
    <button className = 'link'><a className = 'link'>Logout</a></button>
    <button className = 'link'><a className = 'link'>Preferences</a></button>
    </div>
)

}

export default ToolBar