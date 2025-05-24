import React from 'react';
import { render, screen } from '@testing-library/react'
import ButtonCardPub from '../ButtonCardPub';


it ('publication buttons work', function() {
    render(<ButtonCardPub prop = 'BBC News'/>)
    const button = screen.getByRole('button', {value: 'BBC News'})
    const text = screen.getByText('BBC News')


    expect(button).toHaveTextContent('BBC News')
    expect(text).toHaveTextContent('BBC News')
});