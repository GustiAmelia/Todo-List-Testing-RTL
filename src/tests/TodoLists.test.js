import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import TodoLists from '../components/TodoLists';

describe('Todo Lists',() => {
    const allTodo =["go to office", "go to market"]
    it('should render some text passed into todo prop',()=>{
        render(<TodoLists todos={["go to office", "go to market"]}/>);
        allTodo.forEach((todo, i) =>{
            expect(screen.queryAllByTestId("todo-name")[i]).toHaveTextContent(todo)
        })
    })
    it('should render some text passed into todo prop',()=>{
        render(<TodoLists todos={allTodo}/>);
        expect(screen.getAllByTestId("todo-name").length).toBe(2)
    })
})