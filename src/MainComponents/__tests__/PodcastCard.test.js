import React from 'react'
import { render, screen } from '@testing-library/react'
import PodcastCard from '../PodcastCard'


test ('image of podcast shows up', ()=> {
    jest.mock('../static/download.jpeg', () => ({
        __esModule: true,
        default: 'mocked-logo.jpeg'
    }))
    render(<PodcastCard thumbnail = 'mocked-logo.jpeg' link = 'www.msn.com'/>)
    const image = screen.getByRole('img', {name: 'podcast photo' })
    
    expect(image).toBeInTheDocument()
}) 

test ('podcast link is present', () => {
    
    render(<PodcastCard link = 'www.msn.com'/>)
    const links = screen.getAllByRole('heading', { level:3, name: 'www.msn.com'})
    
    expect(links).toHaveLength(1)

})