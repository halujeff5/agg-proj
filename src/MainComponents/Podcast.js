import React, { useState, useEffect } from 'react'
import '../Vault.css'
import ToolBar from './ToolBar'
import axios from 'axios'
import PodcastCard from './PodcastCard'



const Podcast = () => {

    const [podcastData, setPodcastData] = useState([])
    const [inputValue, setInputValue] = useState('')


    const handleInputChange = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    async function term() {
        let options = {
            method : 'GET',
            url : `http://0.0.0.0:3001/podcasts`,
            params : {
                term : inputValue
            }
        }
        const res = await axios.request(options)
        console.log("ANS", res)
        setPodcastData(res.data)

    }

    console.log(podcastData)

    return (
        <>
            <ToolBar />
            <h1 className= 'podcast-title'>Podcasts</h1>
            <form>
                <input className='podcast-input' type='text' name='podcast-input' placeholder='Enter search topic' value={inputValue} onChange={handleInputChange} />
            </form>
            <button aria-label = 'finds podcasts' className='dropdown-button' onClick={term}>search</button>

            <div className = 'podcasts'>

            {podcastData.map(c => (
                <PodcastCard audio = {c.audio} 
                key= {c.key} 
                audioLength = {c.audio_length_sec} 
                link = {c.link} 
                url= {c.listennotes_url} 
                thumbnail = {c.thumbnail} />
            ))};
            </div>
        </>
        )
};

export default Podcast