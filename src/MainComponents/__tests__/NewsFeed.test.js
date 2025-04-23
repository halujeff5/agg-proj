/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import NewsFeed from '../NewsFeed'


it ('renders without crashing', function() {
    render(<NewsFeed />)
});

