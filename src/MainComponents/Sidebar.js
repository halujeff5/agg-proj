import React, { useContext, useEffect } from 'react'
import '../App.css'
import ButtonCard from './ButtonCard';
import MyContext from '../hooks/MyContext';
import ButtonCardDefault from './ButtonCardDefault';
import Podcast from './Podcast' 
import Dropdown from './Dropdown';
import YoutubeDropdown from './YoutubeDropdown';
import PublicationDropdown from './PublicationDropdown';
import ButtonCardPub from './ButtonCardPub';

// this populates the dropdown list
let topicSelection = ['artificial intelligence','math', 'Donald Trump', 'gun control', 'sexuality', 'China', 'Europe', 'India', 'Japan', 'Korea', 'internet', 'Africa']

let publicationSelection = ['BBC News', 'Fox News', 'Bloomberg', 'CNBC', 'The Verge', 'CBS News', 'ABC News']

const Sidebar = () => {

    const stateCtx = useContext(MyContext);
    const apiCtx = useContext(MyContext)
    const delCtx = useContext(MyContext)
    const pubCtx = useContext(MyContext)
    const ytCtx = useContext(MyContext)

    console.log(pubCtx.pub)
    console.log('major', stateCtx.states)
    function deleteNewTopic() {
        stateCtx.deleteSelected(delCtx.del)
    }

    useEffect(() => {
        deleteNewTopic();

    }, [delCtx.del])
    return (
        <>
        <div className= 'sidebar'>
            <div className= 'sidebar-menu'>
            <h1>NewsFeed</h1>
            <ul>
                <h1 className = 'menu-item'>Standard</h1>
                <ButtonCardDefault prop='general' />
                <ButtonCardDefault prop='business' />
                <ButtonCardDefault prop='entertainment' />
                <ButtonCardDefault prop='health' />
                <ButtonCardDefault prop='science' />
                <ButtonCardDefault prop='sports' />
                <ButtonCardDefault prop='technology' />

                <div className='added'>
                <h1 className = 'menu-item'>Personal</h1>
                <div>
                <Dropdown {...topicSelection} />
                </div>
                {stateCtx.states.map(c => (
                    <ButtonCard prop={c} />
                ))}
                </div>
                <h1 className = 'menu-item'>Publications</h1>
                <div>
                <PublicationDropdown {...publicationSelection} />
                </div>
                {pubCtx.pub.map(c => (
                    <ButtonCardPub prop = {c} />
                ))}

            </ul>
            <h1>Podcasts</h1>
            <Podcast />
            <h1>Youtube Search</h1>
            <YoutubeDropdown />
            {ytCtx.yt.map(c => (
                <ButtonCardPub prop = {c} />
            ))}
            </div>
        </div>
        </>
    )
}


export default Sidebar