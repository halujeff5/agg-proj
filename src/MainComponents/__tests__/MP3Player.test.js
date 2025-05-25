import React from 'react'
import { render, screen } from '@testing-library/react'
import MP3Player from '../MP3Player'

it ('MP3 player receives audioUrl and plays', () => {
    render(<MP3Player audioUrl= 'http://localhost:3000/8b32943e-acbb-480d-95cb-49445c6c657b' />)

    expect(screen.getByRole('audio', { name : 'mp3player' })).toBeInTheDocument();
});

test ('MP3 player throws correct error message', () => {
    render(<MP3Player error = 'audio unsupported'/>)
    const error = screen.getByRole('heading', {level: 4, name: 'audio unsupported'} )

    expect(error).toBeInTheDocument()
})