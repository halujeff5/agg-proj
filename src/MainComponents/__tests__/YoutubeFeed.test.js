import React from 'react';
import { render, screen } from '@testing-library/react';
// import { setupServer } from 'msw/browser';
// import { rest } from 'msw/browser';
import YoutubeFeed from '../YouTubeFeed';

// const handlers = [rest.get('/youtube', (req, res, ctx) => {
    
//     const query = req.url.searchParams.get('term')
//     console.log(query)

//     return res (
//         ctx.json({
//             data: 'data',
//             data1: 'data'
//         })
//     )
// })];

// const server = setupServer(...handlers)
//     beforeAll(() => {
//         server.listen();
//         })

//     afterEach(() => {
//         server.resetHandlers();
//         })

//     afterAll(() => {
//         server.close()
//         })

test ('renders OK', async function() {
    render(<YoutubeFeed />);



});