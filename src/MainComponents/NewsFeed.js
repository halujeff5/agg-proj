import React, { useState, useEffect, useContext } from 'react'
import '../App.css'
import ArticleCard from '../Cards/ArticleCard'
import axios from 'axios'
import { cleanData, getImagesOnly, removeDups } from '../hooks/utils'
import Dropdown from './Dropdown'
import ButtonCard from './ButtonCard'
import MyContext from '../hooks/MyContext'
import ButtonCardDefault from './ButtonCardDefault'

// accepts a state from contextAPI appends to checkboxes.
// iterate over checkboxes state to map out the ButtonCards

const NewsFeed = () => {

    const apiKey = process.env.REACT_APP_APIKEY
    const stateCtx = useContext(MyContext);
    console.log('PASS', stateCtx.states)
    const apiCtx = useContext(MyContext)
    const newTopic = stateCtx.states
    let pref = apiCtx.pref
    console.log('new topic', newTopic)
    
    const delCtx = useContext(MyContext)
    console.log('jackpot!', delCtx.del)


    const [checkboxes, setCheckboxes] = useState([`${stateCtx.states}`]);
    const [articles, setArticles] = useState([]);
    const [newTopics, setNewTopics] = useState(checkboxes)

    
    function addTopic() {
        setNewTopics([...newTopics, newTopic]);  
    };

       
    function cleanTopic() {
        let noDups = removeDups(newTopics)

        // setNewTopics([...newTopics, noDups])
    }

    console.log(newTopics)
    // console.log(checkboxes)

    function deleteNewTopic() {
    setNewTopics(newTopics.filter(item => item !== delCtx.del))
    }


    async function getCategory() {
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

    async function getAdditional() {
        
        let options = `http://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=${pref}&languages=en&limit=70`

        try {
            const resp = await axios.get(options);

            let arr1 = resp.data.data
            let cleanedData = cleanData(arr1)
            let cleaner = getImagesOnly(cleanedData)
            setArticles(cleaner)
        } catch(err) {
            console.log(err)
        }
    }

    let topicSelection = ['math', 'Donald Trump', 'gun control', 'sexuality', 'China', 'Europe', 'India', 'Japan', 'Korea', 'internet', 'Africa']

    useEffect(() => {
        getCategory();
        getAdditional();
        addTopic();
        cleanTopic();
        deleteNewTopic();
     
    }, [pref, newTopic]
    )

    console.log('P', newTopics)
    console.log('G', checkboxes)

 
    return (
        <>

            <h1 className='newsfeed'>
                Morning Feed</h1>

            {/* accepts an array of chosen topics to be rendered through map */}

            <div className='button-display' >
                <ButtonCardDefault prop='general' />
                <ButtonCardDefault prop='business' />
                <ButtonCardDefault prop='entertainment' />
                <ButtonCardDefault prop='health' />
                <ButtonCardDefault prop='science' />
                <ButtonCardDefault prop='sports' />
                <ButtonCardDefault prop='technology' />
            </div>

            <div className = 'added'>
            <h2 className = 'newsfeed'>Additional</h2>
                {newTopics.map(c => (
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