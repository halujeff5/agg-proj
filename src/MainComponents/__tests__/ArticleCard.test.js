/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import ArticleCard from '../../Cards/ArticleCard'

it ('renders without crashing', function() {
    render(<ArticleCard />)
});