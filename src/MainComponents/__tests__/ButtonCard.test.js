import React from 'react';
import user from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import ButtonCard from '../ButtonCard';


it ('list of topics works when clicked', function() {
    render(<ButtonCard prop = 'general'/>)
    const button = screen.getByRole('button', {value: 'general'})
    const text = screen.getByText('general')


    expect(text).toBeInTheDocument()
    expect(button).toHaveTextContent('general')
    expect(text).toHaveTextContent('general')

});

