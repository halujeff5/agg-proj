import React, { useContext } from 'react'
import YoutubeFeed from './YoutubeFeed'
import YoutubeDropdown from './YoutubeDropdown'
import YoutubeCard from './YoutubeCard'
import YoutubeVideos from './YoutubeVideos'
import MyContext from '../hooks/MyContext';
import ButtonCardPub from './ButtonCardPub';
import '../App.css'
import ToolBar from './ToolBar'

const Youtube = () => {

    const ytCtx = useContext(MyContext)

    return (
        <>
            <div className='yt-element'>
                <ToolBar />
            </div>
            <h1 className='podcast-title'>Youtube</h1>

            <YoutubeDropdown />

            <div className='list-of-pubs'>
            {ytCtx.yt.map(c => (
                <ButtonCardPub prop={c} />
            ))}
</div>
            <div className='yt-div'>
                <YoutubeFeed />
            </div>

        </>
    )

}


export default Youtube