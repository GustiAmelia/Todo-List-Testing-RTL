import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import  Header from '../components/Header'

describe('Header', () => {
    it('Should render header', () => {
        render(<Header/>)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toBeInTheDocument()
    });
})