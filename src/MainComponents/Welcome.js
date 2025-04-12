import React from 'react'
import '../App.css'
import logo from '../static/AMPLIFY.png'
import NewsFeed from './NewsFeed'
import ToolBar from './ToolBar'

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
        <ToolBar />
        
        <NewsFeed />
     
      
        </body>
    )
}

export default Welcome;