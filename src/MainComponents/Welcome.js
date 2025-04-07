import React from 'react'
import '../App.css'
import logo from '../static/AMPLIFY.png'
import NewsFeed from './NewsFeed'
import Sidebar from './Sidebar'
import YoutubeFeed from './YoutubeFeed'

const Welcome = () => {

    return (
        <body>
        <div className= 'tab'>
        <img className='logo-size' src = {logo} alt='logo' />
        <div className='slogan'>
        <h1 className = 'welcome-1'>Your</h1> 
        <h1 className = 'welcome-1'>News Media</h1>
        </div>
        </div>
      
        <NewsFeed />
     
      
        </body>
    )
}

export default Welcome;