import React from 'react'

function Todo({todo}) {
    const {id, title,status} = todo;
    const h1 = <h1>{title}</h1>
    const test = status ? <strike>{h1}</strike> : h1;
    return (
        <div data-tested={`todo-${id}`}>
            {test}
        </div>
    )
}

export default Todo
