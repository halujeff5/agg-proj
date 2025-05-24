import React from 'react';
import { render, screen } from '@testing-library/react'
import ButtonCardDefault from '../ButtonCardDefault';


it ('topic buttons are working', function() {
    render(<ButtonCardDefault prop = 'entertainment'/>)
    const button = screen.getByRole('button', {value: 'entertainment'})
    const text = screen.getByText('entertainment')


    expect(button).toHaveTextContent('entertainment')
    expect(text).toHaveTextContent('entertainment')
});