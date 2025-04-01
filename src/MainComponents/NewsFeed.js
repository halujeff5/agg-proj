import React, { useState, useEffect, useContext } from 'react'
import '../App.css'
import ArticleCard from '../Cards/ArticleCard'
import axios from 'axios'
import { cleanData, getImagesOnly, removeDups } from '../hooks/utils'
import Dropdown from './Dropdown'
import ButtonCard from './ButtonCard'
import MyContext from '../hooks/MyContext'


// accepts a state from contextAPI appends to checkboxes.
// iterate over checkboxes state to map out the ButtonCards


let topicArr = []
const NewsFeed = () => {

    const stateCtx = useContext(MyContext);
    console.log('PASS', stateCtx.states)
    const apiCtx = useContext(MyContext)
    let newTopic = stateCtx.states
    let pref = apiCtx.pref
    console.log('new topic', newTopic)

    const [checkboxes, setCheckboxes] = useState(['artificial intelligence']);
    const [articles, setArticles] = useState([]);
  
    function addTopic() {
        setCheckboxes([...checkboxes, newTopic])  
    };

    function cleanTopic() {
        let noDups = removeDups([...checkboxes, newTopic])

        setCheckboxes(noDups)
    }

    
    console.log('checksMan', checkboxes)

    async function getCategory() {

        let apiKey = process.env.REACT_APP_APIKEY
        let options = `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${pref}&languages=en&limit=70`
        try {
            const resp = await axios.get(options);
            console.log('+1', 1)

            let arr1 = resp.data.data

            let cleanedData = cleanData(arr1)
            let cleaner = getImagesOnly(cleanedData)
            setArticles(cleaner)
        } catch (err) {
            console.log(err)
        }
    }

    let topicSelection = ['math', 'Donald Trump', 'gun control', 'sexuality', 'China', 'Europe', 'India', 'Japan', 'Korea', 'internet', 'Africa']

    useEffect(() => {
        getCategory();
        addTopic();
        cleanTopic();
     
    }, [pref, newTopic]
    )

    return (
        <>

            <h1 className='newsfeed'>
                Morning Feed</h1>

            {/* accepts an array of chosen topics to be rendered through map */}

            <div className='button-display' >
                <ButtonCard prop='general' />
                <ButtonCard prop='business' />
                <ButtonCard prop='entertainment' />
                <ButtonCard prop='health' />
                <ButtonCard prop='science' />
                <ButtonCard prop='sports' />
                <ButtonCard prop='technology' />


                {checkboxes.map(c => (
                    <ButtonCard prop={c} />
                ))}
            </div>
            <div>
                <Dropdown {...topicSelection} />
            </div>

            <div className='article-begin'>
                <h1 className='welcome-2'>{pref}</h1>
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
            </div>

        </>

    )

};

export default NewsFeed