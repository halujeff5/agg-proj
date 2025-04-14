import '../App.css'
import React from 'react'
import placeholder from '../static/placeholder.jpg'
import { timeSince } from '../hooks/utils'

const VaultCard = ({title, key, url, description, author, image, published_at }) => { 

    const imageURL = image
    
    const dateStr = new Date(published_at)

    const hrsAgo = timeSince(dateStr)

return (
    <>
        <div className='article-box'>
            <div className='intro-title'>
                <img className='image-serve' src={imageURL && imageURL.trim() !== '' ? image : placeholder}></img>
            </div>
            <div className='intro-title'>
                <a className='no-underline' href={url} target='_blank' rel="noreferrer"><h2 className='headline'>{title}</h2></a>
                <h6 className='earlier'>{hrsAgo}</h6>
            </div>
            </div>
            </>
)
}

export default VaultCard