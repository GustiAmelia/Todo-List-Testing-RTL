import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

describe('Todo Item', () => {
    it('should render todo item', () => {
        render(<TodoItem todo="Go to Office"/>)
        expect(screen.getByRole("heading")).toBeInTheDocument()
    })
})