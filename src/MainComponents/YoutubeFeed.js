import React, { useEffect, useState, useContext } from 'react'
import '../App.css'
import MyContext from '../hooks/MyContext'
import { Helpers } from './helpers'
import YoutubeVideos from './YoutubeVideos'
import delicon from '../static/icons8-x-48.jpg'

const YoutubeFeed = () => {
    const ytCtx = useContext(MyContext)
    const urlCtx = useContext(MyContext)
    const hiddenCtx = useContext(MyContext)
    
    console.log('checking up', urlCtx.url)
    const [ytdata, setYTdata] = useState([])
    const [URLState, setURLState ] = useState('')
   
    
    console.log(ytCtx.sel)
    const term = ytCtx.sel
    let subj = term == null ? null : term
   
    async function getVideoByCat() {
        try {
            let res = await Helpers.fetchYoutube(term)
            console.log('checking', res)

            setYTdata(res)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getVideoByCat();
    }, [term])

    function handleDelete() {
        hiddenCtx.change(!hiddenCtx.hiddenState)
    }

    return (
        <>
        <img src= {delicon} className= 'close-video' onClick={handleDelete} 
        hidden={!hiddenCtx.hiddenState} 
        /> 
            <div className='youtube'>
            <div className='video-title' hidden= {!hiddenCtx.hiddenState}> 
                <iframe className='videos'
                    width='850'
                    height='505'
                    src={urlCtx.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
         
            </div> 

                <h1 className='welcome-2'>{subj}</h1>
                {ytdata.map(c => (
                    <YoutubeVideos
                        videoId={c.id.videoId}
                        description={c.snippet.description}
                        publishTime={c.snippet.publishTime}
                        thumbnail = {c.snippet.thumbnails.default.url}
                    />
                ))}

            </div>
        </>
    )

}


export default YoutubeFeed