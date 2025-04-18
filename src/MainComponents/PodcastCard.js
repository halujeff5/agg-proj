import React from 'react'
import '../Vault.css'

const PodcastCard = ({ audio, key, audioLength, link, url, thumbnail }) => {

    let runtime = Math.round(audioLength / 60)

    return (
        <>
       
            <div className='card'>
                <div className='separate'>
                    <img className='welcome-4' src={thumbnail} />
                </div>

                <div className='podcast-details'>
                    <a className='welcome-4' href={link} target='_blank' rel ='noreferrer'>podcast</a>
                    <h3 className='welcome-4'>{runtime} min</h3>
                    <a className='welcome-4' href={url} target='_blank' rel = 'noreferrer'>podcast link</a>
                    <h3 className='welcome-4'>{link}</h3>
                </div>
            </div>
        </>
    )
}

export default PodcastCard