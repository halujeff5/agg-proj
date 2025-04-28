import React from 'react';
import '../App.css';
import axios from 'axios';
import placeholder from '../static/placeholder.jpg';
import downloadImg from '../static/download.jpeg';
import ClipboardLink from '../MainComponents/ClipboardLink';
import readTTSImg from '../static/readTTS.jpeg'
import { timeSince, tts } from '../hooks/utils';

const APIKEY = process.env.REACT_APP_PLAYHTAPIKEY
const USERID = process.env.REACT_APP_USER_ID

const ArticleCard = ({ title, url, description, author, image, published_at }) => {

    let username = localStorage.getItem('user')
    const imageURL = image

    // useEffect(() => {textToSpeech()}, 
    // [])

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
            method: 'GET',
            'Content-Type' : 'application/json',
            url : 'http://0.0.0.0:3001/newsTTS',
            params: {
                url : url
            }
        }
        try {
            let resp = await axios.request(passURL)
            let ans = resp.data
            const input = ans.join('')
            console.log('INPUT', input)
            let speechFile = await tts(input, APIKEY, USERID)
            console.log('I AM HERE!!')
            console.log(speechFile)
        }catch (e) {
            console.log(e)
        }
    }

    const dateStr = new Date(published_at)

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
                </div>
                <div className='details'>
                    <img className='image-dl' onClick={postToVault} src={downloadImg} alt='news-image' />
                    <ClipboardLink url />
                </div>
                <div className = 'details-1'>
                    <img className  ='image-dl' onClick={textToSpeech} src={readTTSImg} />
                </div>
                <div>
    </div>
            </div>
        </>
    )
}

export default ArticleCard;