import React, { useEffect, useState } from 'react'
import '../App.css'
// import MyContext from '../hooks/MyContext'
import { Helpers } from '../helpers'
import YoutubeCard from './YoutubeCard'

const YoutubeFeed = () => {

    const [ytdata, setYTdata] = useState([])

   
    async function getVideoByCat() {

        try{
            let resp = await Helpers.fetchYoutube()
            console.log(resp)
            setYTdata(resp)
            return resp
        } catch(e) {
    console.log(e)
}
    
    }

    useEffect(()=> {
        getVideoByCat();
    }, [])

    console.log(ytdata)
    return (
        <>
        <div className= 'youtube'>
        
        {ytdata.map(c => (
            <YoutubeCard 
            videoId= {c.id.videoId}
            channelTitle= {c.snippet.channelTitle}
            thumbnails_def= {c.snippet.thumbnails.high.url}
            thumbTitle= {c.snippet.title} />
        ))}
        
        </div>
        </>
    )

}


export default YoutubeFeed