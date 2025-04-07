import React from 'react'
import '../App.css'

const YouTubeVideos = (videoId) =>  {

    const url = `https://www.youtube.com/embed/${videoId.videoId}`
   

return (
    <>
    <iframe className = 'videos'
    width='400'
    height= '315'
    src= {url}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    />
    </>
)
};



export default YouTubeVideos;