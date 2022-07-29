import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import AddTodo from '../components/AddTodo';



describe('Add Todo',()=>{
    it('should render label', () => {
        render (<AddTodo/> )
        const labelElement = screen.getByText(/What you want to do?/i)
        expect(labelElement).toBeInTheDocument();
    });
    it('should render input', ()=>{
        render(<AddTodo/>)
        const inputElement = screen.getByPlaceholderText(/Enter todo/i)
        expect(inputElement).toBeInTheDocument()
    });
    it('should be able to type in input', ()=>{
        render(<AddTodo/>)
        const inputElement = screen.getByPlaceholderText(/Enter todo/i)
        fireEvent.change(inputElement,{target:{value: "Go to Office"}})
        expect(inputElement.value).toBe("Go to Office")
    });
    it('should have empty input when close button is clicked', async() => {
        const mockSubmit = jest.fn()
        render(<AddTodo handleAddTodo={mockSubmit}/>);
        const inputElement = screen.getByPlaceholderText(/Enter todo/i)
        const buttonElement = screen.getByRole("button")
        fireEvent.change(inputElement, { target: {todo :{ value: "Go to office"}} })
        fireEvent.submit(buttonElement)
        expect(inputElement.value).toBe("");
    });
})