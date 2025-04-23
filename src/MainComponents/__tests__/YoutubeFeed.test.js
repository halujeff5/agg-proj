/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import YoutubeFeed from '../YouTubeFeed'


it ('renders without crashing', function() {
    render(<YoutubeFeed />)
});