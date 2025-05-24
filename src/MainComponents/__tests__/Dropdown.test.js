/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'; 
import Dropdown from '../Dropdown'


it ('renders without crashing', function() {
    render(
    <MemoryRouter>
    <Dropdown />
    </MemoryRouter>
    )
});