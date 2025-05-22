import React, { useState, useContext, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import placeholder from '../static/placeholder.jpg';
import downloadImg from '../static/download.jpeg';
import ClipboardLink from '../MainComponents/ClipboardLink';
import readTTSImg from '../static/readTTS.jpeg'
import { timeSince, convertToStream } from '../hooks/utils';
import MP3Player from '../MainComponents/MP3Player';
import MyContext from '../hooks/MyContext';


const ArticleCard = ({ title, url, description, author, image, published_at }) => {

    const apiCtx = useContext(MyContext)
    const genCtx = useContext(MyContext)
    let username = localStorage.getItem('user')
    const imageURL = image
    const [urlState, setUrlState] = useState(null)
    const [errorState, setErrorState] = useState(null)

    async function postToVault() {

        let options = {
            method: 'POST',
            url: 'http://0.0.0.0:3001/vault',
            params: {
                username: username,
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

    async function textToSpeech() {

        let passURL = {
            url: 'http://0.0.0.0:3001/newsTTS',
            method: 'GET',
            'Content-Type': 'application/json',
            params: {
                url: url
            }
        }
        try {
            let resp = await axios.request(passURL);
            let array = resp.data.data.data
            let res = convertToStream(array)
            setUrlState(res)
            setErrorState( null)
            }
          catch (e) {
            setErrorState('stream not available')
            console.log(e)   
        }
    }

    useEffect(() => {
        setUrlState(null)
        setErrorState(null)
    }, [apiCtx.pref, genCtx.genState])
    const dateStr = new Date(published_at)
    // console.log(urlState)
    const hrsAgo = timeSince(dateStr)
    return (
        <>
            <div className='article-box'>
                <div className='intro-title'>
                    <img className='image-serve' src={imageURL !== null ? image : placeholder}></img>
                </div>
                <div className='intro-title'>
                    <a className='no-underline' href={url} target='_blank' rel="noreferrer"><h2 className='headline'>{title}</h2></a>
                    <h6 className='earlier'>{hrsAgo}</h6>
                    <div>
                        <MP3Player audioUrl={urlState} error= {errorState} />
                    </div>
                </div>
                <div className='details'>
                    <img className='image-dl' onClick={postToVault} src={downloadImg} alt='news-image' />
                    <ClipboardLink url />
                </div>
                <div className='details-1'>
                    <img className='image-dl' onClick={textToSpeech} src={readTTSImg} />
                </div>

            </div>
        </>
    )
}

export default ArticleCard;