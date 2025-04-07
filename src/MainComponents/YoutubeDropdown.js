
import React, { useContext, useState } from 'react'
import MyContext from '../hooks/MyContext'

const YoutubeDropdown = () => {

    const [isOpen, setIsOpen] = useState(false)
    const ytCtx = useContext(MyContext)

    const channelIds = {
        'CNBC Television':  'UCrp_UI8XtuYfpiqluWLD7Lw',
        'Bloomberg Podcasts': 'UChF5O40UBqAc82I7-i5ig6A',
        'Bloomberg Television' : 'UCi4h0t4Jq3l5jY7qsJtWw_g',
        'ABC News': 'UCBi2mrWuNuyYy4gbM6fU18Q',
        'BBC News': 'UC16niRr50-MSBwiO3YDb3RA',
        'NBC News' : 'UC16niRr50-MSBwiO3YDb3RA',
        'Al Jazeera English' : 'UCm8RjT1VAffy3-xGgP7FvYg',
        'MSNBC' : 'UCm8RjT1VAffy3-xGgP7FvYg',
        'CBS News' : 'UC8p0C5-3iFDikH9U13RkiHg',
        'USA Today' : 'UCj06-lbFnQjL17-v-z14wEw',
        'Sky News' : 'UCoMdktPbSTixAyNGwb-UYkQ ',
        'Fox Nwws' : 'UCXIJgqnII2ZOINSWNOGFThA',
        'WION' : 'UC_gUv0bJ65GLD4Hhf-j74Pw'
    }
    
        const topics = Object.keys(channelIds)
        const handleClickOption = (option) => {
            setIsOpen(false);
            ytCtx.addYT(option)
        }


        return (
            <>
            <div id = 'dropdown'>
            <button onClick={() => setIsOpen(!isOpen)} className= 'dropdown-button-yt'>Add Feed Topic
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
    

    