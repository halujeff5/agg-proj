import React, { useCallback, useState } from 'react'
import '../App.css'
import axios from 'axios'
import placeholder from '../static/placeholder.jpg'
import downloadImg from '../static/download.jpeg'
import ClipboardLink from '../MainComponents/ClipboardLink'

const ArticleCard = ({ title, key, url, description, author, image, published_at }) => {

    const imageURL = image

    function timeSince(timestamp) {
        const now = new Date().getTime();
        const timeDifference = now - timestamp;
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));

        if (hours < 1) {
            const minutes = Math.floor(timeDifference / (1000 * 60));
            return `${minutes} minutes${minutes !== 1 ? '' : 's'} ago`;
        } else {
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        }
    }

    async function postToVault() {

        let options = {
            method: 'POST',
            url: 'http://0.0.0.0:3001/vault',
            params: {
                username: 'SnoopDogg',
                title: title,
                url: url,
                description: description,
                author: author,
                image: image,
                published_at: published_at
            }
        }
        try {
            let res = await axios.request(options)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

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
                <div className='details'>
                    <img className='image-dl' onClick={postToVault} src={downloadImg} alt='news-image' />
                    <ClipboardLink url />
                </div>

            </div>
        </>
    )
}

export default ArticleCard;