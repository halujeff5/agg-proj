/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react'
import ButtonCard from '../ButtonCard';


it ('renders OK', function() {
    render(<ButtonCard />)
});

