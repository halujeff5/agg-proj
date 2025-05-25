import React from 'react'
import { render, screen } from '@testing-library/react'
import Podcast from '../Podcast'

test ('input box is in DOM', ()=> {
    render(<Podcast />)
    const input = screen.getByPlaceholderText('Enter search topic')
    expect(input).toBeInTheDocument()
}) 

test ('button to be in DOM', () => {
    render(<Podcast/>)
    const button = screen.getByRole('button', { name: 'finds podcasts'})
    expect(button).toBeInTheDocument()
})