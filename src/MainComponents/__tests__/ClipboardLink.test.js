import React from 'react'
import { render, screen } from '@testing-library/react'
import ClipboardLink from '../ClipboardLink'


test ('copies to clipboard', function() {
    render(<ClipboardLink url = 'wwww.msn.com' />)
    const image = screen.getByRole('img')
    // expect(image).toHaveLength(1)
    expect(image).toBeInTheDocument()
});

test ('on failure test', function() {
    render(<ClipboardLink />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
});