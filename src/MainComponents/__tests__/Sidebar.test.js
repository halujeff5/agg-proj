/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import Sidebar from '../Sidebar'


it ('renders without crashing', function() {
    render(<Sidebar />)
});