import React from 'react'
import '../App.css'
import logo from '../static/AMPLIFY.png'
import NewsFeed from './NewsFeed'

const Welcome = () => {
    localStorage.setItem('context', 'artificial intelligence')
    return (
        <body>
        <div className= 'tab'>
        <img className='logo-size' src = {logo} alt='logo' />
        <h1 className = 'welcome-1'>News. Your Way.</h1>
        </div>
      
        <NewsFeed />
        </body>
    )
}

export default Welcome;