import { ReactTestRendererNode, screen, cleanup, render } from "@testing-library/react";
import Todo from "../todo";  // we have to test this file 

test('should render todo component',() => {
    render(<Todo/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContext('Hello Rajat');
})