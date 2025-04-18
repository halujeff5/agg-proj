import React, { useContext, useState } from 'react'
import '../App.css'
import { timeSince } from '../hooks/utils';
import MyContext from '../hooks/MyContext'

const YouTubeVideos = ({ videoId, description, publishTime, thumbnail }) => {

    const hiddenCtx = useContext(MyContext)
    const urlCtx = useContext(MyContext)

    console.log('videoId', videoId)

    let elapsed = timeSince(publishTime)
    console.log(elapsed)

    let desc = description == null ? 'Untitiled' : description

    function handleClick(e) {
        e.preventDefault()
        console.log('jeff', e.target.value)
        urlCtx.addUrl(`https://www.youtube.com/embed/${e.target.value}`)
        hiddenCtx.change(true)
    }

    return (
        <>
            <div className='metadata'>
                <img className='thumbnail' src={thumbnail} alt='intro-pic' />
                <div className='yt-headline'>
                    <button type='button' className='desc' name={videoId} value={videoId} onClick={handleClick}>{desc}</button>
                    <h4 className='desc-1'>{elapsed}</h4>
                </div>
            </div>
        </>
    )
};



export default YouTubeVideos;