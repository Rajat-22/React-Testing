import { render, screen, cleanup, render } from "@testing-library/react";
import Todo from "../todo";  // we have to test this file 

aftrerEach(() => {
    cleanup();
});

test('should render completed todo',() => {
    const todo = {id:1, title:"grocery", status:false};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContext('grocery');
})

test('should render completed todo',() => {
    const todo = {id:2, title:"dishes", status:true};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContext('dishes');
})