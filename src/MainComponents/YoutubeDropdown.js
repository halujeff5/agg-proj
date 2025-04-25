
import React, { useContext, useState } from 'react'
import MyContext from '../hooks/MyContext'

const YoutubeDropdown = () => {

    const [isOpen, setIsOpen] = useState(false)
    const ytCtx = useContext(MyContext)



    const channelIds = {
        'CNBC Television':  'UCrp_UI8XtuYfpiqluWLD7Lw',
        'Bloomberg Podcasts': 'UChF5O40UBqAc82I7-i5ig6A',
        'Bloomberg Television' : 'UCIALMKvObZNtJ6AmdCLP7Lg',
        'ABC News': 'UCBi2mrWuNuyYy4gbM6fU18Q',
        'BBC News': 'UC16niRr50-MSBwiO3YDb3RA',
        'NBC News' : 'UC16niRr50-MSBwiO3YDb3RA',
        'Al Jazeera' : 'UCNye-wNBqNL5ZzHSJj3l8Bg',
        'MSNBC' : 'UCaXkIU1QidjPwiAYu6GcHjg',
        'CBS News' : 'UC8p1vwvWtl6T73JiExfWs1g',
        'USA Today' : 'UCP6HGa63sBC7-KHtkme-p-g',
        'Sky News' : 'UCoMdktPbSTixAyNGwb-UYkQ ',
        'Fox News' : 'UCXIJgqnII2ZOINSWNOGFThA',
        'WION' : 'UC_gUM8rL-Lrg6O3adPW9K1g'
    }
    
        const topics = Object.keys(channelIds)
        const handleClickOption = (option) => {
            setIsOpen(false);
            ytCtx.addYT(option)
        }


        return (
            <>
            <div id ='dropdown'>
            <button onClick={() => setIsOpen(!isOpen)} className= 'dropdown-button-yt'>Add Channel
            </button>
            
            {isOpen && (
                <ul className='dropdown-list'>
                    {topics.map((option) => (
                        <li key = {option.keys} onClick={() => handleClickOption(option)} >{option}</li>
                    ))}
                </ul>
            )}
            </div>
            </>
        )
                    }

    
export default YoutubeDropdown
    

    