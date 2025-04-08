import React, { useState, useEffect, useContext } from 'react'
import '../App.css'
import ArticleCard from '../Cards/ArticleCard'
import axios from 'axios'
import { cleanData, getImagesOnly, removeDups } from '../hooks/utils'
import Dropdown from './Dropdown'
import Sidebar from './Sidebar'
import ButtonCard from './ButtonCard'
import MyContext from '../hooks/MyContext'
import YoutubeFeed from './YoutubeFeed'

// accepts a state from contextAPI appends to checkboxes.
// iterate over checkboxes state to map out the ButtonCards

const NewsFeed = () => {

    const apiKey = process.env.REACT_APP_WORLD_NEWS
    console.log(apiKey)
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
        
        const config = {
         headers : {
            'apiKey' : apiKey,
            'Content-Type' : 'application/json',
        }
        }
     
        // console.log('HEADER', headers)
        
        try {
        let resp = await axios.get(`https://api.apilayer.com/world_news/search-news?text=${pref}&sort=publish-time&sort-direction=desc&language=en&number=20`, config)
        
        setArticles(resp.data.news)
            
            
//     // using utils.js function to clean resp object
//             // let cleanedData = cleanData(result)
//     // using utils.js to keep only articles with images
//         //     let cleaner = getImagesOnly(cleanedData)
//         //     setArticles(cleaner)
        } catch (err) {
             console.log(err)
        }
    }


    // these are topics that are not default 
    async function getAdditional() {
        
        let options = `https://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=${pref}&languages=en&limit=40`

        try {
            const resp = await axios.get(options);
            console.log(resp.data.data)
            let arr1 = resp.data.data
            let cleanedData = cleanData(arr1)
            let cleaner = getImagesOnly(cleanedData)
            setArticles(cleaner)
        } catch(err) {
            console.log(err)
        }
    }
    // this populates the dropdown list
    let topicSelection = ['artificial intelligence','math', 'Donald Trump', 'gun control', 'sexuality', 'China', 'Europe', 'India', 'Japan', 'Korea', 'internet', 'Africa']

    useEffect(() => {
        getCategory();
        // getAdditional();
        cleanTopic();
        deleteNewTopic();
    }, [gen, pref]
    )

    let subj = gen == null ? 'Breaking' : gen;

    return (
        <body className = 'newsfeed-div'>
       
            {/* <h1 className='newsfeed'>
                News Media</h1> */}

            <Sidebar />
            <div className='article-begin'>
                <h1 className='welcome-2'>{subj}</h1>
                <div className='container'>

                    {articles.map(c => (
                        <ArticleCard title={c.title}
                            key={c.key}
                            url={c.url}
                            description={c.summary}
                            author={c.author}
                            image={c.image}
                            publishedAt={c.publish_date}
                        />

                    ))}
                </div>
           
            
            <YoutubeFeed />
            </div>
     
        </body>

    )
                    };

export default NewsFeed