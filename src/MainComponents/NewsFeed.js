import React, { useState } from 'react'
import '../App.css'
import ArticleCard from '../Cards/ArticleCard'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { cleanData } from '../hooks/utils'

const NewsFeed = () => {
    const navigate = useNavigate()
    const [checkboxes, setCheckboxes] = useState([])
    const [articles, setArticles] = useState([]);
    
    
    const handleCheckboxChange = (event) => {
        event.preventDefault()
        console.log('EVENT', event.target.value)
        if (event.target.checked === true);
        setCheckboxes([...checkboxes, event.target.value]);

        if (event.target.checked === false)
        setCheckboxes(checkboxes.filter(topic => topic !== event.target.value))
        console.log('TEST', checkboxes)
      };
// console.log('checkboxes', {checkboxes})

    localStorage.setItem('checks', checkboxes)





    const myTopicParams = {

        'business': 'business',
        'entertainment': 'entertainment',
        'general': 'general',
        'health': 'health',
        'science': 'science',
        'sports': 'sports',
        'technology': 'technology',
       
    }

async function getCategory() {
    let pref = localStorage.getItem('checks')
    console.log('prefs', pref)
    let subj = pref ? pref.split(',') : '';
    console.log('BING', subj)
    let apiKey = process.env.REACT_APP_APIKEY
    for (const [key, value] of Object.entries(myTopicParams))
    {        
    let options = `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${value}&languages=en` 
    
    if (subj[0] === key || subj[1] ===key || subj[2] === key || subj[3] === key || subj[4] === key)
    try {
        const resp = await axios.request(options);
        console.log(resp.data.data)

        let cleanedData = cleanData(resp.data.data)

        setArticles((prevData) => [...prevData, ...cleanedData])
        navigate('/')

    }catch(err) {
        console.log(err)
    }}
  
};

    
    return (
        <>    
        <h1 className= 'newsfeed'>
        Morning Feed Topics</h1>
        <div className='checkboxes'>
        <label className = 'labels'>
        <input
          type="checkbox"
          name='general'
          value = 'general'
          onChange={handleCheckboxChange}
        />General
      </label>

      <label className = 'labels'>
        <input
          type="checkbox"
          name='business'
          value='business'
        //   checked={checkboxes.business}
          onChange={handleCheckboxChange}
        />Business
      </label>

      <label className = 'labels'>
        <input
          type="checkbox"
          name='entertainment'
          value='entertainment'
        //   checked={checkboxes.entertainment}
          onChange={handleCheckboxChange}
        />Entertainment
      </label>

      <label className = 'labels'>
        <input
          type="checkbox"
          name='health'
          value= 'health'
        //   checked={checkboxes.health}
          onChange={handleCheckboxChange}
        />Health
      </label>
      </div>
<div className= 'checkboxes'>

      <label className = 'labels'>
        <input
          type="checkbox"
          name='science'
          value = 'science'
        //   checked={checkboxes.science}
          onChange={handleCheckboxChange}
        />Science
      </label>


      <label className = 'labels'>
        <input
          type="checkbox"
          name='sports'
          value = 'sports'
        //   checked={checkboxes.sports}
          onChange={handleCheckboxChange}
        />Sports
      </label>

      <label className = 'labels'>
        <input
          type="checkbox"
          name='technology'
          value = 'technology'
        //   checked={checkboxes.technology}
          onChange={handleCheckboxChange}
        />Technology
      </label>
      </div>

      <button className='save' onClick= {getCategory}>Feed</button>
      <div className='container'>
    {articles.map(c=> (
        <ArticleCard title= {c.title}
        key = {c.key}
        url= {c.url}
        description= {c.description} 
        author = {c.author}
        image= {c.image}
        publishedAt= {c.published_at}
        publisher= {c.source}
        />
        
    ))}
</div>

    
</>

     
        
    )

}

export default NewsFeed