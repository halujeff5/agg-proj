import React, { useEffect, useState, useContext } from 'react'
import '../App.css'
import MyContext from '../hooks/MyContext'
import { Helpers } from './helpers'
import YoutubeCard from './YoutubeCard'

const YoutubeFeed = () => {

    const ytCtx = useContext(MyContext)

    const [ytdata, setYTdata] = useState([])
    
    console.log(ytCtx.sel)
    const term = ytCtx.sel

    async function getVideoByCat() {
        try {
            let res = await Helpers.fetchYoutube(term)
            console.log('checking', res)
            localStorage.setItem('test', res)
            setYTdata(res)    
        } catch (e) {
            console.log(e)
        }
    }

    console.log(localStorage.getItem('test'))
    useEffect(() => {
        getVideoByCat();
    }, [term])

    console.log('IM HERE 2', ytdata)
    return (
        <>
            <div className='youtube'>
                
                {ytdata.map(c => (
                    <YoutubeCard
                        videoId={c.id.videoId}
                        channelTitle={c.snippet.channelTitle}
                        thumbnails_def={c.snippet.thumbnails.high.url}
                        thumbTitle={c.snippet.title} />
                ))}

            </div>
        </>
    )

}


export default YoutubeFeed