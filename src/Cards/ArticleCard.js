import React from 'react'
import '../App.css'
import placeholder from '../static/placeholder.jpg'


const ArticleCard = ({ title, key, url, description, author, image, publishedAt, publisher }) => {

    const imageURL = image

    function timeSince(timestamp) {
        const now = new Date().getTime();
        const timeDifference = now - timestamp;
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));

        if (hours < 1) {
            const minutes = Math.floor(timeDifference / (1000 * 60));
            return `${minutes} minutes${minutes !== 1 ? 's' : ''} ago`;
        } else {
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        }
    }


    const dateStr = new Date(publishedAt)

    const hrsAgo = timeSince(dateStr)
    return (
        <>
            <div className='article-box'>
                <div className= 'intro-title'>
                <img className='image-serve' src={imageURL && imageURL.trim() !== '' ? image : placeholder}></img>
                </div>
                <div className = 'intro-title'>
                <a className='no-underline' href={url} target='_blank' rel="noreferrer"><h2 className='headline'>{title}</h2></a>
                </div>
                <h5 className='welcome'>Author: {author}</h5>
                <h5 className='welcome'>Publication: {publisher}</h5>
                <h6 className='earlier'>{hrsAgo}</h6>

<hr
style = {{
    color: '#FDFFE2',
    backgroundColor: '#FDFFE2',
    height: .25,
    width: '1200px',
    marginLeft: '10px'
}}
/>
            
            </div>
        </>
    )
}

export default ArticleCard;