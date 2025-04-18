import React from 'react'
import '../App.css'

function ToolBar({onClose}) {

    let user = localStorage.getItem('user')
    let token = localStorage.getItem('token')



    if (!user || !token) {
        return (
        <div className='toolbar-links-unsubscribed'>
            <button className='link'><a href='/' className='link-1'>Newsfeed</a></button>
            <button className='link'><a href='/modal' className='link-1'>Plan</a></button>
            <button className='link' onClick={onClose}><a href='/login' className='link-1'>LogIn/Out</a></button>
            <button className='link'><a className='link-1'>Preferences</a></button>
        </div>
        )
    }

    if (user && token) {
        return (
            <>
            <div className='toolbar-links'>
                <button className='link'><a href='/' className='link-1'>Newsfeed</a></button>
                <button className='link'><a href='/modal' className='link-1'>Plan</a></button>
                <button className='link'><a href='/vault' className='link-1'>Vault</a></button>
                <button className='link'><a href='/youtube' className='link-1'>Youtube</a></button>

                <button className='link'><a href='/podcasts' className='link-1'>Podcasts</a></button>
                <button className='link'>
                <a href='/goodbye' className='link-1'>LogIn/Out</a></button>

                <button className='link'><a className='link-1'>Preferences</a></button>
            </div>
            </>
        )
    }

}

export default ToolBar