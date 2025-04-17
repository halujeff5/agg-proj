import React from 'react'
import '../App.css'

const ToolBar = () => {

return (
    <div className = 'toolbar-links'>
    <button className = 'link'><a href = 'http://localhost:3000/modal' className ='link-1'>Plan</a></button>
    <button className = 'link'><a href= 'http://localhost:3000/vault' className = 'link-1'>Vault</a></button>
    <button className = 'link'><a className = 'link-1'>LogIn/Out</a></button>
    <button className = 'link'><a className = 'link-1'>Preferences</a></button>
    </div>
)

}

export default ToolBar