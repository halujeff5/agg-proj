import React, { useState, useEffect, createContext, useContext } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
import ArticleCard from '../Cards/ArticleCard'
import axios from 'axios'
import { cleanData, getImagesOnly } from '../hooks/utils'
import { MyContextProvider } from '../hooks/functionContext';
import Dropdown from './Dropdown'
import ButtonCard from './ButtonCard'

// accepts a state from contextAPI appends to checkboxes.
// iterate over checkboxes state to map out the ButtonCards

const NewsFeed = () => {
    let selectedOption = localStorage.getItem('context')
    console.log('test', selectedOption)
    
    const [checkboxes, setCheckboxes] = useState(['art', 'general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']);   
    const [articles, setArticles] = useState([]);
    let pref = localStorage.getItem('ans')
    console.log('IM HERE', pref)
    const navigate = useNavigate()

    // localStorage.setItem('checks', checkboxes)

    function addTopic() {
    
        setCheckboxes([...checkboxes, selectedOption])
    }
    console.log('checks', checkboxes)

    async function getCategory() {

        console.log('pref', pref)

        let apiKey = process.env.REACT_APP_APIKEY


                let options = `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${pref}&languages=en&limit=70`
                try {
                    const resp = await axios.request(options);
                    console.log('+1', 1)

                    let arr1 = resp.data.data

                    let cleanedData = cleanData(arr1)
                    let cleaner = getImagesOnly(cleanedData)
                    setArticles(cleaner)
                  
                } catch (err) {
                    console.log(err)
                }

            }

    let topicSelection = ['math', 'Donald Trump', 'gun control']

    useEffect(() => {
        getCategory();
        addTopic()
    }, [pref, selectedOption]
    )

    return (
        <>
            <MyContextProvider>
                <h1 className='newsfeed'>
                    Morning Feed</h1>
                
                {/* accepts an array of chosen topics to be rendered through map */}

        
                {checkboxes.map(c => (
                    <ButtonCard prop = {c} />
                ))};
                


                <Dropdown {...topicSelection} />
                <h1 className = 'welcome-2'>{pref}</h1>
                <div className='container'>

                    {articles.map(c => (
                        <ArticleCard title={c.title}
                            key={c.key}
                            url={c.url}
                            description={c.description}
                            author={c.author}
                            image={c.image}
                            publishedAt={c.published_at}
                            publisher={c.source}
                        />

                    ))}
                </div>

            </MyContextProvider>

        </>





    )

};

export default NewsFeed