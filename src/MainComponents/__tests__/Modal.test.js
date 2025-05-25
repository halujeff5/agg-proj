import React from 'react'
import { render, screen } from '@testing-library/react'
import Modal from '../Modal'

it ('modal has the pricing tiers', function() {
    const mock = jest.fn()
    render(<Modal />)
    const heading1 = screen.getByText('Standard Plan')
    const heading2 = screen.getByText('Premium Plan');
    const li = screen.getByText('topic search for news');

    console.log(li)

    // expect(li).toBeInTheDocument()
    expect(li).toBeInTheDocument()
    expect(heading1).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()
});