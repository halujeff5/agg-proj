import React, { useEffect, useState, useContext } from 'react'
import '../App.css'
import MyContext from '../hooks/MyContext'
import axios from 'axios'
import YoutubeVideos from './YoutubeVideos'
import delicon from '../static/icons8-x-48.jpg'

const YoutubeFeed = () => {
    const ytCtx = useContext(MyContext)
    const urlCtx = useContext(MyContext)
    const hiddenCtx = useContext(MyContext)

    const [ytdata, setYTdata] = useState([])
  
    const term = ytCtx.sel
    let subj = term == null ? null : term
   
    async function getVideoByCat() {
        const term = ytCtx.sel
        console.log(term)

        try {
            let res = await axios.request(`http://0.0.0.0:3001/youtube?term=${term}`)
            console.log(res.data)
            setYTdata(res.data)
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
console.log(ytdata)
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