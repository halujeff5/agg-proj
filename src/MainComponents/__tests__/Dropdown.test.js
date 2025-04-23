/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import Dropdown from '../Dropdown'


it ('renders without crashing', function() {
    render(<Dropdown />)
});