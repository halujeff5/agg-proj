import React, { useState, useEffect, createContext, useContext } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
import ArticleCard from '../Cards/ArticleCard'
import axios from 'axios'
import { cleanData } from '../hooks/utils'
import TagButton from './TagButton'
import { MyContextProvider } from '../hooks/functionContext';


const NewsFeed = () => {

    const [checkboxes, setCheckboxes] = useState([]);
    const [articles, setArticles] = useState([]);
    let pref = localStorage.getItem('ans')
    const navigate = useNavigate()

    localStorage.setItem('checks', checkboxes)



    // const myTopicParams = {

    //     'business': 'business',
    //     'entertainment': 'entertainment',
    //     'general': 'general',
    //     'health': 'health',
    //     'science': 'science',
    //     'sports': 'sports',
    //     'technology': 'technology',

    // }

    async function getCategory() {

        console.log('pref', pref)
        setCheckboxes([...checkboxes, pref])
        console.log('checks', checkboxes)
        let apiKey = process.env.REACT_APP_APIKEY
        // for (const [key, value] of Object.entries(myTopicParams)) {


        //     if (checkboxes[0] === key || checkboxes[1] === key || checkboxes[2] === key || checkboxes[3] === key || checkboxes[4] === key) {

                let options = `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${pref}&languages=en&limit=42`
                try {
                    const resp = await axios.request(options);
                    console.log('+1', 1)

                    let arr1 = resp.data.data

                    let cleanedData = cleanData(arr1)

                    setArticles((prevData) => [...prevData, ...cleanedData])
                    navigate('/feed')

                } catch (err) {
                    console.log(err)
                }

            }

            // function savePreferences() {
            //     localStorage.setItem('checks', checkboxes)
            // }
            // savePreferences()

            // };
        // }
    // };

    useEffect(() => {
        getCategory()
    }, [setCheckboxes]
    )

    return (
        <>
            <MyContextProvider>
                <h1 className='newsfeed'>
                    Morning Feed</h1>

                <div className='checkboxes'>
                    <TagButton prop='general' />
                    <TagButton prop='business' />
                    <TagButton prop='entertainment' />
                    <TagButton prop='health' />
                </div>
                <div className='checkboxes'>
                    <TagButton prop='science' />
                    <TagButton prop='sports' />
                    <TagButton prop='technology' />
                </div>
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