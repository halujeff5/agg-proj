import React, { useEffect, useState, useContext } from 'react'
import '../App.css'
import MyContext from '../hooks/MyContext'
import { Helpers } from './helpers'
import YoutubeVideos from './YoutubeVideos'

const YoutubeFeed = () => {

    const ytCtx = useContext(MyContext)

    const [ytdata, setYTdata] = useState([])
    
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

    console.log('IM HERE 2', ytdata)
    return (
        <>
  
            <div className='youtube'>
       
                <h1 className= 'welcome-2'>{subj} Breaking</h1>
                {ytdata.map(c => (
                    <YoutubeVideos
                        videoId={c.id.videoId}
                        />
                ))}

            </div>
        </>
    )

}


export default YoutubeFeed