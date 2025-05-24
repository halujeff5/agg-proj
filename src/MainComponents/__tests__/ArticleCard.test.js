import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import ArticleCard from '../../Cards/ArticleCard'

test ('the icons are appearing', () =>{
    render(<ArticleCard />)
    const icons = screen.getAllByAltText('icon')
    expect(icons).toHaveLength(2)
    // expect(icons).toBeInTheDocument();
})

test ('image appears for each article', () => {
    render(<ArticleCard/>)
    const image = screen.getAllByAltText('news-image')
    expect(image).toHaveLength(1)
    // expect(image).toBeInTheDocument(); 
})