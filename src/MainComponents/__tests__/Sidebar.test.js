import React from 'react'
import { render, screen } from '@testing-library/react'
import Sidebar from '../Sidebar'
import { MyContext, MyContextProvider } from '../../hooks/MyContext'


test ('context works', () => {
    render(<MyContextProvider>
        <MyContext />
        </MyContextProvider>
        )
})

test ('certain text appears on screen', () => {
    render(<MyContextProvider>
        <MyContext />
        </MyContextProvider>
        )
    render(<Sidebar />)
    const text = screen.getByRole('h1', {
        value : 'NewsFeed'
    })

    expect(text).toBeInTheDocument()
})