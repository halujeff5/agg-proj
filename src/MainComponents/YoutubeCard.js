import React from 'react';
import placeholder from '../static/placeholder.jpg'


const YoutubeCard = ({videoId, channelTitle, thumbnails_def, thumbTitle }) => {

    const imageURL = thumbnails_def

    return (
        <>
        <div className='video'>
            <h1 className='header'>{thumbTitle} - {channelTitle}</h1>

            <img className = 'image-serve' src = {imageURL} />

        </div>
        </>
    )
}


export default YoutubeCard