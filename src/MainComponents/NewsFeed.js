import React, { useState, useEffect, useContext, useMemo } from 'react';
import '../App.css';
import ArticleCard from '../Cards/ArticleCard';
import axios from 'axios';
import { cleanData, getImagesOnly, removeDups } from '../hooks/utils';
import Sidebar from './Sidebar';
import MyContext from '../hooks/MyContext';
import YoutubeFeed from './YoutubeFeed';

// accepts a state from contextAPI appends to checkboxes.
// iterate over checkboxes state to map out the ButtonCards

const NewsFeed = () => {

    const apiKey = process.env.REACT_APP_WORLD_NEWS
    // this context holds the selected states 
    const stateCtx = useContext(MyContext);
    //this context holds selected to make the API call
    const apiCtx = useContext(MyContext)
    // this context holds the general options
    const genCtx = useContext(MyContext)
    const newTopic = stateCtx.states
    const pref = apiCtx.pref

    console.log('WHoop!', genCtx.genState)
    const gen = genCtx.genState

    console.log('pref', pref)

    // context of what to delete from x icon 
    const delCtx = useContext(MyContext)

    const [checkboxes, setCheckboxes] = useState(['artificial intelligence']);
    const [articles, setArticles] = useState([]);
    const [newTopics, setNewTopics] = useState([stateCtx.states]);


    const memoValue = useMemo(() => { return pref }, [articles])

    // removes duplicates from arr of selected topics (default topics not included)
    function cleanTopic() {
        let noDups = removeDups(stateCtx.states)
        setNewTopics(noDups)
    }
    // context of a function that filters out the term and returns new arr of topis for user
    function deleteNewTopic() {
        stateCtx.deleteSelected(delCtx.del)
    }

    // fetch API for news articles according to {pref} and {gen}

    async function getCategory() {

        try {
            let resp = await axios.get(`https://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=${pref}&sort=published_desc&languages=en&countries=us&limit=20`)
            console.log(resp.data.data)
            // using utils.js function to clean resp object
            let cleanedData = cleanData(resp.data.data)
            // using utils.js to keep only articles with images
            let cleaner = getImagesOnly(cleanedData)
            setArticles(cleaner)
        }
        catch (err) {
            console.log(err)
        }
    }


    // these are topics that are not default 
    // async function getAdditional() {

    //     let options = `https://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=${gen}&languages=en&limit=40`

    //     try {
    //         const resp = await axios.get(options);
    //         console.log(resp.data.data)
    //         let arr1 = resp.data.data
    //         let cleanedData = cleanData(arr1)
    //         let cleaner = getImagesOnly(cleanedData)
    //         setArticles(cleaner)
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }
    // this populates the dropdown list
    let topicSelection = ['artificial intelligence', 'math', 'Donald Trump', 'gun control', 'sexuality', 'China', 'Europe', 'India', 'Japan', 'Korea', 'internet', 'Africa']

    let subj = pref === null ? 'Breaking' : memoValue;

    useEffect(() => {
        getCategory();
        // getAdditional();
        cleanTopic();
        deleteNewTopic();
    }, [pref, subj]
    )



    return (
        <body className='newsfeed-div'>
            <Sidebar />
            <div className='article-begin'>
                <div className='container'>
                    <h1 className='newsfeed'>
                        Breaking News</h1>
                    <h1 className='welcome-2'>{subj}</h1>
                    {articles.map(c => (
                        <ArticleCard title={c.title}
                            key={c.key}
                            url={c.url}
                            description={c.description}
                            author={c.author}
                            image={c.image}
                            published_at={c.published_at}
                        />
                    ))}
                </div>
            </div>
        </body>

    )
};

export default NewsFeed